const pdfInput=document.getElementById('pdfInput');
const chooseBtn=document.getElementById('chooseBtn');
const processBtn=document.getElementById('processBtn');
const fileName=document.getElementById('fileName');
const statusBox=document.getElementById('status');
const resultCard=document.getElementById('resultCard');
const environmentList=document.getElementById('environmentList');
let selectedFile=null;

if(window.pdfjsLib){
  pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

chooseBtn.onclick=()=>pdfInput.click();
pdfInput.onchange=()=>{
  selectedFile=pdfInput.files?.[0]||null;
  fileName.textContent=selectedFile?selectedFile.name:'Nenhum arquivo selecionado';
  processBtn.disabled=!selectedFile;
  resultCard.classList.add('hidden');
  hideStatus();
};

function showStatus(text,error=false){
  statusBox.textContent=text;
  statusBox.classList.remove('hidden');
  statusBox.classList.toggle('error',error);
}
function hideStatus(){statusBox.classList.add('hidden');}
function clean(s){return String(s||'').replace(/\s+/g,' ').trim();}
function noAccent(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'');}

function detectEnvironments(text){
  const upper=noAccent(text).toUpperCase();
  const found=new Set();
  const known=[
    ['ADMINISTRACAO DO CAMPO','ADMINISTRAÇÃO DO CAMPO'],
    ['AGROINDUSTRIA','AGROINDÚSTRIA'],
    ['MANUTENCAO','MANUTENÇÃO'],
    ['OPERACIONAL CAMPO','OPERACIONAL CAMPO']
  ];
  known.forEach(([key,label])=>{if(upper.includes(key))found.add(label)});

  const lines=text.split(/\n+/).map(clean).filter(Boolean);
  lines.forEach((line,i)=>{
    let m=line.match(/ambiente(?:s)?(?:\s+de\s+trabalho)?\s*[:\-]\s*(.{3,90})$/i);
    if(m){
      const value=clean(m[1]).split(/\s{2,}|\|/)[0];
      if(value)found.add(value.toUpperCase());
    }else if(/ambiente(?:s)?(?:\s+de\s+trabalho)?\s*[:\-]?$/i.test(line)){
      const next=clean(lines[i+1]);
      if(next&&next.length<90&&!/cargo|risco|descri|inventario/i.test(next))found.add(next.toUpperCase());
    }
  });
  return [...found];
}

function addEnvironment(name='NOVO AMBIENTE'){
  const row=document.createElement('div');
  row.className='environment';
  row.innerHTML='<input type="checkbox" checked><input class="name" type="text"><button class="remove" type="button">Excluir</button>';
  row.querySelector('.name').value=name;
  row.querySelector('.remove').onclick=()=>row.remove();
  environmentList.appendChild(row);
}
function renderEnvironments(items){
  environmentList.innerHTML='';
  items.forEach(addEnvironment);
}

processBtn.onclick=async()=>{
  if(!selectedFile)return;
  if(!window.pdfjsLib){
    showStatus('O leitor de PDF não foi carregado. Verifique a conexão com a internet.',true);
    return;
  }
  processBtn.disabled=true;
  try{
    const buffer=await selectedFile.arrayBuffer();
    const pdf=await pdfjsLib.getDocument({data:buffer}).promise;
    let text='';
    for(let p=1;p<=pdf.numPages;p++){
      showStatus('Lendo página '+p+' de '+pdf.numPages+'...');
      const page=await pdf.getPage(p);
      const content=await page.getTextContent();
      text+='\n'+content.items.map(i=>i.str).join(' ')+'\n';
    }
    const environments=detectEnvironments(text);
    renderEnvironments(environments);
    resultCard.classList.remove('hidden');
    showStatus(environments.length
      ? 'Leitura concluída: '+environments.length+' ambiente(s) identificado(s).'
      : 'PDF lido, mas nenhum ambiente foi identificado automaticamente. Adicione manualmente para continuar.',
      !environments.length
    );
  }catch(err){
    console.error(err);
    showStatus('Não foi possível processar este PDF: '+(err.message||err),true);
  }finally{
    processBtn.disabled=false;
  }
};

document.getElementById('addEnvironmentBtn').onclick=()=>addEnvironment('');
document.getElementById('continueBtn').onclick=()=>{
  const selected=[...environmentList.querySelectorAll('.environment')]
    .filter(r=>r.querySelector('input[type=checkbox]').checked)
    .map(r=>r.querySelector('.name').value.trim())
    .filter(Boolean);
  if(!selected.length){showStatus('Selecione pelo menos um ambiente.',true);return}
  sessionStorage.setItem('mapaRiscoAmbientes',JSON.stringify(selected));
  alert('Ambientes confirmados. A próxima etapa será a extração e edição dos riscos.');
};