/* Vision EPI - persistência de cotações. */
(function(){
  const cfg=window.APP_CONFIG&&window.APP_CONFIG.supabase;
  if(!cfg||!window.supabase)return;
  const db=window.supabase.createClient(cfg.url,cfg.publishableKey);
  const pad=n=>String(n).padStart(3,'0');
  const ymd=()=>{const d=new Date();return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`};

  async function empresaAtual(){
    const nome=(document.getElementById('clientName')?.value||'').trim();
    if(!nome)throw new Error('Selecione a empresa/fazenda antes de gerar a cotação.');
    const {data,error}=await db.from('empresas').select('id,nome').eq('nome',nome).eq('ativo',true).limit(1).maybeSingle();
    if(error)throw error;if(!data)throw new Error('Empresa/fazenda não encontrada no cadastro central.');return data;
  }

  async function proximoNumero(empresaId){
    const prefix=`COT-${ymd()}-`;
    const {data,error}=await db.from('epi_cotacoes').select('numero').eq('empresa_id',empresaId).like('numero',`${prefix}%`).order('numero',{ascending:false}).limit(1);
    if(error)throw error;
    const ultimo=data&&data[0]?Number(String(data[0].numero).split('-').pop())||0:0;
    return prefix+pad(ultimo+1);
  }

  async function criar(itens){
    if(!Array.isArray(itens)||!itens.length)throw new Error('Não há itens para cotação.');
    const empresa=await empresaAtual();let numero=await proximoNumero(empresa.id),cotacao=null;
    for(let tentativa=0;tentativa<3;tentativa++){
      const {data,error}=await db.from('epi_cotacoes').insert({empresa_id:empresa.id,numero,data_cotacao:new Date().toISOString().slice(0,10),status:'ABERTA'}).select('id,numero').single();
      if(!error){cotacao=data;break}
      if(error.code==='23505'){numero=await proximoNumero(empresa.id);continue}
      throw error;
    }
    if(!cotacao)throw new Error('Não foi possível gerar um número único para a cotação.');
    const linhas=itens.map(r=>({cotacao_id:cotacao.id,produto:r.produto,quantidade_solicitada:Number(r.comprar)||1,quantidade_recebida:0}));
    const {error}=await db.from('epi_cotacao_itens').insert(linhas);
    if(error){await db.from('epi_cotacoes').delete().eq('id',cotacao.id);throw error}
    return {id:cotacao.id,numero:cotacao.numero,empresa};
  }

  window.visionCotacoes={criar};
})();