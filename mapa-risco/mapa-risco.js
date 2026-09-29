const pdfInput=document.getElementById('pdfInput');
const chooseBtn=document.getElementById('chooseBtn');
const processBtn=document.getElementById('processBtn');
const fileName=document.getElementById('fileName');
const statusBox=document.getElementById('status');
const resultCard=document.getElementById('resultCard');
const environmentList=document.getElementById('environmentList');
let selectedFile=null;
let extractedText='';
let risksByEnvironment={};

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
    extractedText=text;
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
  risksByEnvironment=extractRisksByEnvironment(extractedText,selected);
  openRiskReview(selected);
};

const riskCard=document.getElementById('riskCard');
const riskEnvironment=document.getElementById('riskEnvironment');
const riskList=document.getElementById('riskList');

const riskTypes=[
  {value:'FÍSICO',color:'#22a447'},
  {value:'QUÍMICO',color:'#e43b3b'},
  {value:'BIOLÓGICO',color:'#8b5a2b'},
  {value:'ERGONÔMICO',color:'#f2d21b'},
  {value:'ACIDENTE',color:'#2878c8'}
];

function classifyRisk(text){
  const t=noAccent(text).toUpperCase();
  if(/RUIDO|VIBRAC|CALOR|FRIO|RADIAC|UMIDADE|PRESSAO/.test(t))return 'FÍSICO';
  if(/POEIRA|QUIMIC|AGROTOX|DEFENSIV|VAPOR|GAS|FUMO|NEVOA|PRODUTO/.test(t))return 'QUÍMICO';
  if(/BIOLOG|BACTER|VIRUS|FUNGO|PARASIT|ANIMAL|PICADA|MICRORGAN/.test(t))return 'BIOLÓGICO';
  if(/ERGON|POSTURA|REPETIT|PESO|LEVANTAMENTO|ESFORCO|JORNADA|MONOTON/.test(t))return 'ERGONÔMICO';
  if(/ACIDENT|MECANIC|QUEDA|CHOQUE|ELETRIC|CORTE|PERFU|ATROPEL|MAQUINA|INCEND/.test(t))return 'ACIDENTE';
  return '';
}

function extractRisksByEnvironment(text,environments){
  const result={}; environments.forEach(e=>result[e]=[]);
  const flat=clean(text);
  environments.forEach(env=>{
    const key=noAccent(env).toUpperCase();
    const normalized=noAccent(flat).toUpperCase();
    let pos=0,guard=0;
    while((pos=normalized.indexOf(key,pos))>=0&&guard++<80){
      const chunk=flat.slice(Math.max(0,pos-250),Math.min(flat.length,pos+2200));
      const sentences=chunk.split(/(?=[.;:]\s)|\s{2,}/).map(clean).filter(Boolean);
      sentences.forEach(s=>{
        const type=classifyRisk(s);
        if(!type)return;
        let source=s.replace(/^.*?(risco|perigo|agente)\s*[:\-]?\s*/i,'').trim();
        if(source.length<3||source.length>180)return;
        const signature=noAccent(type+'|'+source).toUpperCase().replace(/[^A-Z0-9|]/g,'');
        if(!result[env].some(r=>r.signature===signature)){
          result[env].push({type,source,measure:'',degree:'MÉDIO',signature});
        }
      });
      pos+=key.length;
    }
  });
  return result;
}

function typeOptions(selected){
  return riskTypes.map(t=>'<option value="'+t.value+'" '+(t.value===selected?'selected':'')+'>'+t.value+'</option>').join('');
}
function addRiskRow(risk={type:'ACIDENTE',source:'',measure:'',degree:'MÉDIO'}){
  const row=document.createElement('div'); row.className='risk-row';
  row.innerHTML='<select class="risk-type">'+typeOptions(risk.type)+'</select>'+
    '<input class="risk-source" placeholder="Fonte geradora / risco">'+
    '<input class="risk-measure" placeholder="Medidas de proteção e controle">'+
    '<select class="risk-degree"><option>PEQUENO</option><option>MÉDIO</option><option>GRANDE</option></select>'+
    '<button class="remove" type="button">Excluir</button>';
  row.querySelector('.risk-source').value=risk.source||'';
  row.querySelector('.risk-measure').value=risk.measure||'';
  row.querySelector('.risk-degree').value=risk.degree||'MÉDIO';
  row.querySelector('.remove').onclick=()=>row.remove();
  riskList.appendChild(row);
}
function collectCurrentRisks(){
  const env=riskEnvironment.value;if(!env)return;
  risksByEnvironment[env]=[...riskList.querySelectorAll('.risk-row')].map(row=>({
    type:row.querySelector('.risk-type').value,
    source:row.querySelector('.risk-source').value.trim(),
    measure:row.querySelector('.risk-measure').value.trim(),
    degree:row.querySelector('.risk-degree').value
  })).filter(r=>r.source||r.measure);
}
function renderRiskEnvironment(){
  riskList.innerHTML='';
  const rows=risksByEnvironment[riskEnvironment.value]||[];
  if(!rows.length){
    const empty=document.createElement('div');empty.className='risk-empty';
    empty.textContent='Nenhum risco foi identificado automaticamente para este ambiente. Você pode adicioná-lo manualmente.';
    riskList.appendChild(empty);
  }else rows.forEach(addRiskRow);
}
function openRiskReview(environments){
  riskEnvironment.innerHTML=environments.map(e=>'<option></option>').join('');
  [...riskEnvironment.options].forEach((o,i)=>{o.value=environments[i];o.textContent=environments[i]});
  riskCard.classList.remove('hidden');
  renderRiskEnvironment();
  riskCard.scrollIntoView({behavior:'smooth',block:'start'});
}
riskEnvironment.addEventListener('change',()=>{renderRiskEnvironment()});
document.getElementById('addRiskBtn').onclick=()=>{
  const empty=riskList.querySelector('.risk-empty');if(empty)empty.remove();
  addRiskRow();
};
document.getElementById('saveRisksBtn').onclick=()=>{
  collectCurrentRisks();
  sessionStorage.setItem('mapaRiscoRiscos',JSON.stringify(risksByEnvironment));
  showStatus('Revisão salva neste navegador. Próxima etapa: montar o mapa final.');
};