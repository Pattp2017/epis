/* Vision EPI - recebimento de cotação pela tela Entrada. */
(function(){
  const cfg=window.APP_CONFIG&&window.APP_CONFIG.supabase;
  if(!cfg||!window.supabase)return;
  const db=window.supabase.createClient(cfg.url,cfg.publishableKey);
  let cotacaoAtual=null;

  const q=s=>document.querySelector(s);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const num=v=>Number(v)||0;

  async function empresaAtual(){
    const nome=(q('#clientName')?.value||'').trim();
    if(!nome)throw new Error('Selecione a empresa/fazenda.');
    const {data,error}=await db.from('empresas').select('id,nome').eq('nome',nome).eq('ativo',true).limit(1).maybeSingle();
    if(error)throw error;
    if(!data)throw new Error('Empresa/fazenda não encontrada.');
    return data;
  }

  function montar(){
    const section=q('#entrada');
    const card=section?.querySelector('.card');
    if(!card||q('#cotacaoRecebimentoBox'))return;
    const box=document.createElement('div');
    box.id='cotacaoRecebimentoBox';
    box.className='callout';
    box.style.marginBottom='16px';
    box.innerHTML=`
      <div style="display:flex;gap:10px;align-items:end;flex-wrap:wrap">
        <div class="field" style="min-width:260px;flex:1">
          <label>Nº da cotação</label>
          <input id="entradaCotacaoNumero" placeholder="Ex.: COT-20260917-001" autocomplete="off">
        </div>
        <button class="btn btn-light" id="entradaCotacaoBuscar" type="button">Buscar cotação</button>
      </div>
      <div id="entradaCotacaoInfo" class="muted" style="font-size:12px;margin-top:10px">Informe o número para carregar os itens pendentes de recebimento.</div>
      <div id="entradaCotacaoItens" style="margin-top:12px"></div>`;
    card.insertBefore(box,card.firstChild);
    q('#entradaCotacaoBuscar').onclick=buscar;
    q('#entradaCotacaoNumero').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();buscar()}});
  }

  async function buscar(){
    const numero=(q('#entradaCotacaoNumero')?.value||'').trim().toUpperCase();
    const info=q('#entradaCotacaoInfo'),area=q('#entradaCotacaoItens');
    cotacaoAtual=null;area.innerHTML='';
    if(!numero){info.textContent='Informe o número da cotação.';return}
    try{
      info.textContent='Buscando cotação...';
      const empresa=await empresaAtual();
      const {data:c,error}=await db.from('epi_cotacoes').select('*').eq('empresa_id',empresa.id).eq('numero',numero).maybeSingle();
      if(error)throw error;if(!c)throw new Error('Cotação não encontrada para esta empresa.');
      if(c.status==='CANCELADA')throw new Error('Esta cotação está cancelada.');
      const {data:itens,error:ei}=await db.from('epi_cotacao_itens').select('*').eq('cotacao_id',c.id).order('criado_em');
      if(ei)throw ei;
      cotacaoAtual={...c,itens:itens||[]};
      render();
    }catch(e){info.textContent=e.message||'Não foi possível buscar a cotação.'}
  }

  function render(){
    const c=cotacaoAtual,info=q('#entradaCotacaoInfo'),area=q('#entradaCotacaoItens');
    const pendentes=c.itens.filter(i=>num(i.quantidade_recebida)<num(i.quantidade_solicitada));
    info.innerHTML=`<b>${esc(c.numero)}</b> · Status: <b>${esc(c.status)}</b>${c.fornecedor?` · Fornecedor: ${esc(c.fornecedor)}`:''}`;
    if(!pendentes.length){area.innerHTML='<div class="empty">Todos os itens desta cotação já foram recebidos.</div>';return}
    area.innerHTML=`<div class="table-wrap"><table><thead><tr><th>Receber</th><th>Item</th><th>Solicitado</th><th>Já recebido</th><th>Pendente</th><th>Qtd. agora</th><th>Variação</th><th>CA</th></tr></thead><tbody>${pendentes.map(i=>{const p=num(i.quantidade_solicitada)-num(i.quantidade_recebida);return `<tr data-cotacao-item="${i.id}"><td><input class="rc-check" type="checkbox" checked></td><td><b>${esc(i.produto)}</b></td><td>${num(i.quantidade_solicitada)}</td><td>${num(i.quantidade_recebida)}</td><td>${p}</td><td><input class="rc-qtd" type="number" min="0" max="${p}" step="1" value="${p}" style="width:80px"></td><td><input class="rc-var" placeholder="Tamanho/variação" style="min-width:110px"></td><td><input class="rc-ca" placeholder="CA" style="width:100px"></td></tr>`}).join('')}</tbody></table></div><div style="display:flex;justify-content:flex-end;margin-top:12px"><button class="btn btn-primary" id="entradaCotacaoReceber" type="button">Confirmar recebimento</button></div>`;
    q('#entradaCotacaoReceber').onclick=receber;
  }

  async function receber(){
    if(!cotacaoAtual)return;
    const btn=q('#entradaCotacaoReceber'),info=q('#entradaCotacaoInfo');
    const selecionados=[...document.querySelectorAll('[data-cotacao-item]')].filter(tr=>tr.querySelector('.rc-check').checked).map(tr=>{
      const item=cotacaoAtual.itens.find(i=>i.id===tr.dataset.cotacaoItem),pend=num(item.quantidade_solicitada)-num(item.quantidade_recebida),qtd=num(tr.querySelector('.rc-qtd').value);
      return {tr,item,pend,qtd,variacao:tr.querySelector('.rc-var').value.trim(),ca:tr.querySelector('.rc-ca').value.trim()};
    }).filter(x=>x.qtd>0);
    if(!selecionados.length){alert('Selecione ao menos um item e informe a quantidade recebida.');return}
    for(const x of selecionados){if(x.qtd>x.pend)return alert(`A quantidade de ${x.item.produto} é maior que o saldo pendente.`)}
    try{
      btn.disabled=true;btn.textContent='Registrando...';
      const empresa=await empresaAtual(),data=q('#entradaData')?.value||new Date().toISOString().slice(0,10),fornecedor=cotacaoAtual.fornecedor||'Cotação '+cotacaoAtual.numero;
      for(const x of selecionados){
        const meta=typeof itemByName==='function'?itemByName(x.item.produto):{};
        if((meta?.categoria||'').toUpperCase()==='EPI'&&!x.ca)throw new Error(`Informe o CA de ${x.item.produto}.`);
        const entrada={empresa_id:empresa.id,data,produto:x.item.produto,variacao:x.variacao||'',ca:x.ca||'N/A',quantidade:x.qtd,fornecedor,observacao:`Recebimento da cotação ${cotacaoAtual.numero}`};
        const {error:ee}=await db.from('epi_entradas').insert(entrada);if(ee)throw ee;
        const novo=num(x.item.quantidade_recebida)+x.qtd;
        const {error:eu}=await db.from('epi_cotacao_itens').update({quantidade_recebida:novo}).eq('id',x.item.id);if(eu)throw eu;
        x.item.quantidade_recebida=novo;
      }
      const completo=cotacaoAtual.itens.every(i=>num(i.quantidade_recebida)>=num(i.quantidade_solicitada));
      const status=completo?'RECEBIDA':'PARCIALMENTE_RECEBIDA';
      const {error:ec}=await db.from('epi_cotacoes').update({status,atualizado_em:new Date().toISOString()}).eq('id',cotacaoAtual.id);if(ec)throw ec;
      cotacaoAtual.status=status;
      info.innerHTML=`<b>${esc(cotacaoAtual.numero)}</b> · Recebimento registrado · Status: <b>${status}</b>`;
      if(typeof window.loadSupabaseData==='function')await window.loadSupabaseData();
      else if(typeof renderAll==='function')renderAll();
      render();
    }catch(e){alert(e.message||'Erro ao registrar recebimento.')}finally{if(btn){btn.disabled=false;btn.textContent='Confirmar recebimento'}}
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',montar);else montar();
})();