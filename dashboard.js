/* Dashboard Gerencial de EPI — módulo isolado, sem novas tabelas. */
(function(){
  function n(v){return Number(v)||0} function iso(v){return /^\d{4}-\d{2}-\d{2}$/.test(v||'')?v:''} function mk(v){return iso(v)?v.slice(0,7):''}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot',"'":'&#39;'}[c]))}
  function addDays(v,dias){const d=progParseISO(v);d.setDate(d.getDate()+dias);return progISO(d)}
  function ml(k){const [y,m]=k.split('-');return new Date(+y,+m-1,1).toLocaleDateString('pt-BR',{month:'short',year:'2-digit'}).replace('.','')}

  function montarTela(){
    const btn=[...document.querySelectorAll('.nav-child')].find(b=>b.textContent.trim()==='Dashboard');
    if(btn){btn.classList.remove('nav-soon');btn.dataset.page='dashboard';btn.type='button';btn.onclick=()=>openPage('dashboard')}
    if(!document.getElementById('dashboard')){
      const main=document.querySelector('main.content'),sec=document.createElement('section');sec.id='dashboard';sec.className='page';sec.innerHTML='<div class="section-title"><div><h2>Dashboard Gerencial</h2><div class="muted" style="font-size:12px;margin-top:4px">Visão consolidada do estoque, movimentações e próximas trocas de EPI.</div></div><button class="btn btn-light" id="dashAtualizar" type="button">Atualizar</button></div><div id="dashboardContent"></div>';main.appendChild(sec);document.getElementById('dashAtualizar').onclick=renderDashboard;
    }
    PAGE_CFG.dashboard=['Dashboard Gerencial','Acompanhe estoque, movimentações, alertas e próximas trocas de EPI.'];
    const originalOpen=openPage;openPage=function(page,updateHash=true){originalOpen(page,updateHash);if(page==='dashboard')renderDashboard()};
  }

  function stockRows(){const map=new Map(),key=x=>[normKey(x.produto),normKey(x.variacao),normKey(x.ca||'N/A')].join('|');entradas.forEach(e=>{const k=key(e);if(!map.has(k))map.set(k,{produto:e.produto,variacao:e.variacao||'',ca:e.ca||'N/A',ent:0,sai:0});map.get(k).ent+=n(e.quantidade)});saidas.forEach(s=>{const k=key(s);if(!map.has(k))map.set(k,{produto:s.produto,variacao:s.variacao||'',ca:s.ca||'N/A',ent:0,sai:0});map.get(k).sai+=n(s.quantidade)});return[...map.values()].map(r=>({...r,saldo:r.ent-r.sai}))}

  function upcoming(days){const hoje=hojeISO(),ate=addDays(hoje,days),out=[];collaborators.forEach(c=>{const latest=new Map();saidas.filter(s=>s.colaborador===c.nome&&(itemByName(s.produto).categoria||'').toUpperCase()==='EPI').forEach(s=>{const k=normKey(s.produto),o=latest.get(k);if(!o||(s.data||'')>(o.data||''))latest.set(k,s)});latest.forEach(s=>{const meta=itemByName(s.produto),p=progProximaTroca(s.data,meta.vidaUtil);if(p&&p<=ate)out.push({colaborador:c.nome,produto:s.produto,variacao:s.variacao||'',ca:s.ca||'N/A',prevista:p,qtd:n(s.quantidade)||1})})});return out.sort((a,b)=>a.prevista.localeCompare(b.prevista))}

  function comprasPrevistas(days,st){
    const demandas=upcoming(days),porItem=new Map();
    demandas.forEach(x=>{const k=normKey(x.produto);if(!porItem.has(k))porItem.set(k,{produto:x.produto,necessario:0,primeira:x.prevista});const r=porItem.get(k);r.necessario+=x.qtd;if(x.prevista<r.primeira)r.primeira=x.prevista});
    const saldos=new Map();st.forEach(r=>{const k=normKey(r.produto);saldos.set(k,(saldos.get(k)||0)+Math.max(0,r.saldo))});
    return [...porItem.entries()].map(([k,r])=>({...r,estoque:saldos.get(k)||0,comprar:Math.max(0,r.necessario-(saldos.get(k)||0))})).filter(r=>r.comprar>0).sort((a,b)=>a.primeira.localeCompare(b.primeira)||b.comprar-a.comprar);
  }

  function monthly(){const now=new Date(),keys=[];for(let i=5;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);keys.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`)}return keys.map(k=>({key:k,entrada:entradas.filter(e=>mk(e.data)===k).reduce((a,e)=>a+n(e.quantidade),0),saida:saidas.filter(s=>mk(s.data)===k).reduce((a,s)=>a+n(s.quantidade),0)}))}
  function bars(data){const max=Math.max(1,...data.flatMap(x=>[x.entrada,x.saida]));return `<div class="dash-bars">${data.map(x=>`<div class="dash-bar-group"><div class="dash-bar-pair"><div class="dash-bar dash-in" style="height:${Math.max(3,x.entrada/max*150)}px" title="Entradas: ${x.entrada}"></div><div class="dash-bar dash-out" style="height:${Math.max(3,x.saida/max*150)}px" title="Saídas: ${x.saida}"></div></div><div class="dash-bar-label">${ml(x.key)}</div><div class="dash-bar-values">${x.entrada} / ${x.saida}</div></div>`).join('')}</div><div class="dash-legend"><span><i class="dash-dot dash-in"></i> Entradas</span><span><i class="dash-dot dash-out"></i> Saídas</span></div>`}

  window.renderDashboard=function(){
    const root=document.getElementById('dashboardContent');if(!root)return;
    const st=stockRows(),saldo=st.reduce((a,r)=>a+Math.max(0,r.saldo),0),zero=st.filter(r=>r.ent>0&&r.saldo<=0),baixo=st.filter(r=>r.saldo>0&&r.saldo<=2),mes=hojeISO().slice(0,7),entMes=saidas.filter(s=>mk(s.data)===mes).reduce((a,s)=>a+n(s.quantidade),0),p30=upcoming(30),p60=upcoming(60),p90=upcoming(90),compras90=comprasPrevistas(90,st),qtdComprar=compras90.reduce((a,r)=>a+r.comprar,0),alertas=[...zero.map(r=>({t:'ZERADO',r})),...baixo.map(r=>({t:'BAIXO',r}))].slice(0,10);
    root.innerHTML=`
      <div class="stats dash-stats"><div class="stat"><span>Unidades em estoque</span><b>${saldo}</b></div><div class="stat"><span>Posições zeradas</span><b>${zero.length}</b></div><div class="stat"><span>Entregas no mês</span><b>${entMes}</b></div><div class="stat"><span>Trocas em 30 dias</span><b>${p30.length}</b></div></div>
      <div class="dash-grid"><div class="card"><div class="section-title"><div><h2 style="font-size:18px">Entradas × Saídas</h2><div class="muted">Últimos 6 meses · unidades movimentadas</div></div></div>${bars(monthly())}</div><div class="card"><div class="section-title"><div><h2 style="font-size:18px">Previsão de trocas</h2><div class="muted">Última entrega + vida útil cadastrada</div></div></div><div class="dash-horizon"><div><b>${p30.length}</b><span>30 dias</span></div><div><b>${p60.length}</b><span>60 dias</span></div><div><b>${p90.length}</b><span>90 dias</span></div></div><div class="dash-next">${p30.length?p30.slice(0,5).map(x=>`<div><span><b>${esc(x.colaborador)}</b><small>${esc(x.produto)}</small></span><strong>${formatDateBR(x.prevista)}</strong></div>`).join(''):'<div class="empty">Nenhuma troca prevista nos próximos 30 dias.</div>'}</div></div></div>
      <div class="card dash-buy-card"><div class="section-title"><div><h2 style="font-size:18px">Necessidade futura de compra</h2><div class="muted">Estoque atual × trocas previstas para os próximos 90 dias</div></div><div class="dash-buy-total"><b>${qtdComprar}</b><span>unid. a comprar</span></div></div>${compras90.length?`<div class="table-wrap"><table><thead><tr><th>Item</th><th>Estoque atual</th><th>Necessidade 90 dias</th><th>Comprar</th><th>Primeira necessidade</th></tr></thead><tbody>${compras90.map(r=>`<tr><td><b>${esc(r.produto)}</b></td><td>${r.estoque}</td><td>${r.necessario}</td><td><span class="dash-alert buy">COMPRA ${r.comprar}</span></td><td>${formatDateBR(r.primeira)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">O estoque atual cobre as trocas previstas para os próximos 90 dias.</div>'}</div>
      <div class="card" style="margin-top:16px"><div class="section-title"><div><h2 style="font-size:18px">Pontos de atenção</h2><div class="muted">Estoque zerado ou com até 2 unidades</div></div></div>${alertas.length?`<div class="table-wrap"><table><thead><tr><th>Situação</th><th>Item</th><th>Detalhe</th></tr></thead><tbody>${alertas.map(a=>`<tr><td><span class="dash-alert ${a.t==='ZERADO'?'danger':'warn'}">${a.t}</span></td><td><b>${esc(a.r.produto)}</b></td><td>${a.t==='BAIXO'?`Saldo ${a.r.saldo} · `:''}${esc(a.r.variacao||'Sem variação')} · CA ${esc(a.r.ca)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">Nenhum alerta de estoque neste momento.</div>'}</div>`;
  };
  montarTela();
})();