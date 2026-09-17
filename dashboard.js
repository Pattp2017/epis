/* Dashboard Gerencial de EPI — usa somente dados já carregados e filtrados pela empresa atual. */
(function(){
  function n(v){ return Number(v)||0; }
  function isoDate(v){ return /^\d{4}-\d{2}-\d{2}$/.test(v||'') ? v : ''; }
  function monthKey(v){ return isoDate(v) ? v.slice(0,7) : ''; }
  function esc(v){ return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function addDays(iso,days){ const d=progParseISO(iso); d.setDate(d.getDate()+days); return progISO(d); }
  function monthLabel(key){ const [y,m]=key.split('-'); return new Date(Number(y),Number(m)-1,1).toLocaleDateString('pt-BR',{month:'short',year:'2-digit'}).replace('.',''); }

  function stockRows(){
    const map=new Map();
    const keyOf=x=>[normKey(x.produto),normKey(x.variacao),normKey(x.ca||'N/A')].join('|');
    entradas.forEach(e=>{ const k=keyOf(e); if(!map.has(k))map.set(k,{produto:e.produto,variacao:e.variacao||'',ca:e.ca||'N/A',entradas:0,saidas:0}); map.get(k).entradas+=n(e.quantidade); });
    saidas.forEach(s=>{ const k=keyOf(s); if(!map.has(k))map.set(k,{produto:s.produto,variacao:s.variacao||'',ca:s.ca||'N/A',entradas:0,saidas:0}); map.get(k).saidas+=n(s.quantidade); });
    return [...map.values()].map(r=>({...r,saldo:r.entradas-r.saidas}));
  }

  function upcoming(days){
    const hoje=hojeISO(), ate=addDays(hoje,days), out=[];
    collaborators.forEach(c=>{
      const latest=new Map();
      saidas.filter(s=>s.colaborador===c.nome && (itemByName(s.produto).categoria||'').toUpperCase()==='EPI').forEach(s=>{
        const k=normKey(s.produto), old=latest.get(k); if(!old || (s.data||'')>(old.data||'')) latest.set(k,s);
      });
      latest.forEach(s=>{
        const meta=itemByName(s.produto), prevista=progProximaTroca(s.data,meta.vidaUtil);
        if(prevista && prevista<=ate) out.push({colaborador:c.nome,produto:s.produto,prevista,qtd:n(s.quantidade)||1,atrasada:prevista<hoje});
      });
    });
    return out.sort((a,b)=>a.prevista.localeCompare(b.prevista));
  }

  function monthly(){
    const now=new Date(), keys=[];
    for(let i=5;i>=0;i--){ const d=new Date(now.getFullYear(),now.getMonth()-i,1); keys.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`); }
    return keys.map(k=>({key:k,entrada:entradas.filter(e=>monthKey(e.data)===k).reduce((a,e)=>a+n(e.quantidade),0),saida:saidas.filter(s=>monthKey(s.data)===k).reduce((a,s)=>a+n(s.quantidade),0)}));
  }

  function renderBars(data){
    const max=Math.max(1,...data.flatMap(x=>[x.entrada,x.saida]));
    return `<div class="dash-bars">${data.map(x=>`<div class="dash-bar-group"><div class="dash-bar-pair"><div class="dash-bar dash-in" style="height:${Math.max(3,x.entrada/max*150)}px" title="Entradas: ${x.entrada}"></div><div class="dash-bar dash-out" style="height:${Math.max(3,x.saida/max*150)}px" title="Saídas: ${x.saida}"></div></div><div class="dash-bar-label">${monthLabel(x.key)}</div><div class="dash-bar-values">${x.entrada} / ${x.saida}</div></div>`).join('')}</div><div class="dash-legend"><span><i class="dash-dot dash-in"></i> Entradas</span><span><i class="dash-dot dash-out"></i> Saídas</span></div>`;
  }

  window.renderDashboard=function(){
    const root=document.getElementById('dashboardContent'); if(!root)return;
    const stock=stockRows(), saldo=stock.reduce((a,r)=>a+Math.max(0,r.saldo),0), zerados=stock.filter(r=>r.entradas>0&&r.saldo<=0), baixos=stock.filter(r=>r.saldo>0&&r.saldo<=2);
    const mes=hojeISO().slice(0,7), entregasMes=saidas.filter(s=>monthKey(s.data)===mes).reduce((a,s)=>a+n(s.quantidade),0);
    const p30=upcoming(30), p60=upcoming(60), p90=upcoming(90);
    const alertas=[...zerados.map(r=>({tipo:'ZERADO',texto:r.produto,det:`${r.variacao||'Sem variação'} · CA ${r.ca}`})),...baixos.map(r=>({tipo:'BAIXO',texto:r.produto,det:`Saldo ${r.saldo} · ${r.variacao||'Sem variação'} · CA ${r.ca}`}))].slice(0,10);
    root.innerHTML=`
      <div class="stats dash-stats"><div class="stat"><span>Unidades em estoque</span><b>${saldo}</b></div><div class="stat"><span>Posições zeradas</span><b>${zerados.length}</b></div><div class="stat"><span>Entregas no mês</span><b>${entregasMes}</b></div><div class="stat"><span>Trocas em 30 dias</span><b>${p30.length}</b></div></div>
      <div class="dash-grid"><div class="card"><div class="section-title"><div><h2 style="font-size:18px">Entradas × Saídas</h2><div class="muted">Últimos 6 meses · unidades movimentadas</div></div></div>${renderBars(monthly())}</div>
      <div class="card"><div class="section-title"><div><h2 style="font-size:18px">Previsão de trocas</h2><div class="muted">Baseada na última entrega e vida útil do EPI</div></div></div><div class="dash-horizon"><div><b>${p30.length}</b><span>30 dias</span></div><div><b>${p60.length}</b><span>60 dias</span></div><div><b>${p90.length}</b><span>90 dias</span></div></div><div class="dash-next">${p30.length?p30.slice(0,5).map(x=>`<div><span><b>${esc(x.colaborador)}</b><small>${esc(x.produto)}</small></span><strong>${formatDateBR(x.prevista)}</strong></div>`).join(''):'<div class="empty">Nenhuma troca prevista nos próximos 30 dias.</div>'}</div></div></div>
      <div class="card" style="margin-top:16px"><div class="section-title"><div><h2 style="font-size:18px">Pontos de atenção</h2><div class="muted">Estoque zerado ou com até 2 unidades</div></div></div>${alertas.length?`<div class="table-wrap"><table><thead><tr><th>Situação</th><th>Item</th><th>Detalhe</th></tr></thead><tbody>${alertas.map(a=>`<tr><td><span class="dash-alert ${a.tipo==='ZERADO'?'danger':'warn'}">${a.tipo}</span></td><td><b>${esc(a.texto)}</b></td><td>${esc(a.det)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">Nenhum alerta de estoque neste momento.</div>'}</div>`;
  };
})();
