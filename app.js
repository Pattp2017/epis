
const INITIAL_ITEMS = [{"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Avental de malha de aço", "descricao": "Proteção do tronco do usuário contra cortes e golpes de facas manuais.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Avental de Proteção Radiológica-Chumbo", "descricao": "Proteção do tronco contra riscos de origem radioativa (radiação x).", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Avental de Proteção Térmica", "descricao": "Proteção do tronco do usuário contra agentes térmicos (pequenas chamas, calor de contato, convectivo e radiante) e contra umidade proveniente de operações com uso de água.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Avental de Raspa Açougueiro", "descricao": "Proteção do tronco do usuário contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem, corte e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Avental de Raspa com Manga", "descricao": "Proteção do Tronco do usuário contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": "Há descrição alternativa na base original; revisar tecnicamente."}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Avental de Raspa Tipo Açougueiro", "descricao": "Proteção do tronco do usuário contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem, corte e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Avental PVC", "descricao": "Proteção do tronco do usuário contra umidade proveniente de operações com uso de água.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Bota Cano Longo PVC com biqueira de aço", "descricao": "Proteção dos pés do usuário contra impactos de quedas de objetos sobre os artelhos, contra agentes abrasivos, escoriantes e perfurantes, contra umidade proveniente de operações com uso de água e contra riscos de origem química.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Bota de Cano Longo PVC com biqueira composite", "descricao": "Proteção dos pés do usuário contra impactos de quedas de objetos sobre os artelhos e contra agentes abrasivos, escoriantes, perfurantes e contra umidade proveniente de operações com uso de água.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Bota de PVC cano médio, sem biqueira", "descricao": "Proteção dos pés do usuário contra riscos de natureza leve, contra agentes abrasivos e escoriantes, contra umidade proveniente de operações com uso de água e contra riscos de origem química.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Bota tipo Coturno, sem biqueira, nat. leve", "descricao": "Proteção dos pés do usuário contra riscos de natureza leve e contra agentes abrasivos e escoriantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Botina de Segurança com Biqueira e Metatarso", "descricao": "Proteção dos pés do usuário contra impactos de quedas de objetos sobre os artelhos, contra agentes abrasivos, escoriantes e perfurantes e contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Botina de Segurança- Proteção Elétrica", "descricao": "Proteção dos pés do usuário contra riscos de natureza leve, contra agentes abrasivos e escoriantes e contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Botina de Segurança sem biqueira", "descricao": "Botina de couro, Tipo B, para proteção contra riscos de natureza leve e agentes abrasivos e escoriantes, com resistência ao escorregamento", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Botina de Segurança, biqueira composite", "descricao": "Aprovada para proteção dos pés contra impactos de quedas de objetos sobre os artelhos, agentes abrasivos, escoriantes, perfurantes e contra choques elétricos: trabalhos com baixa tensão (até 500 V) em ambiente seco.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Botina de Segurança, biqueira de aço", "descricao": "Proteção dos pés do usuário contra riscos de natureza leve e contra agentes abrasivos e escoriantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Botina de Uso no Campo (Montaria)", "descricao": "PROTEÇÃO DOS PÉS DO USUÁRIO CONTRA RISCOS DE NATUREZA LEVE E CONTRA AGENTES ABRASIVOS E ESCORIANTES.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Calça anti-chamas para eletricistas", "descricao": "Proteção das pernas do usuário contra agentes térmicos provenientes de arco elétrico e fogo repentino.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Calça de Raspa", "descricao": "Proteção das pernas do usuário contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Calça de Uniforme", "descricao": "Proteção das pernas do usuário contra agentes térmicos provenientes de arco elétrico e fogo repentino.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Calça Impermeável PVC", "descricao": "Proteção das pernas do usuário contra umidade proveniente de operações com uso de água.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Calça Operação de Motosserra", "descricao": "Proteção das pernas do usuário contra agentes mecânicos provenientes de operações com motosserras.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Calça Operacional Resistente", "descricao": "Proteção das pernas do usuário contra agentes térmicos provenientes de arco elétrico e fogo repentino; contra agentes térmicos (pequenas chamas, calor de contato, convectivo, radiante e metais fundidos) e contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Calça Proteção Térmica abaixo de -5°", "descricao": "Proteção das pernas do usuário contra agentes térmicos - frio, para temperatura ambiente abaixo de -5ºc.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Camisa Combate a Incêndio", "descricao": "Proteção do tronco e membros superiores do usuário contra agentes térmicos (pequenas chamas, calor de contato, convectivo, radiante e metais fundidos) e contra agentes agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Camisa Eletricista", "descricao": "Proteção do tronco e membros superiores do usuário contra agentes térmicos provenientes de arco elétrico e fogo repentino.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Camisa Impermeável", "descricao": "Proteção do tronco e membros superiores do usuário contra riscos de origem química. Não aprovado para uso com Agrotóxicos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Camisa Manga Longa Com Proteção UV", "descricao": "Proteção conta raios ultravioletas provenientes do sol.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Camisa Térmica -5°C", "descricao": "Proteção do tronco e membros superiores do usuário contra agentes térmicos - frio, para temperatura ambiente acima de -5ºc.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Capa de Chuva", "descricao": "Proteção do tronco e membros superiores do usuário contra umidade proveniente de operações com uso de água e de precipitação pluviométrica.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Capa de Chuva (Imtemperes)", "descricao": "Proteção do tronco e membros superiores do usuário contra umidade proveniente de operações com uso de água e de precipitação pluviométrica.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capacete c/ Jugular", "descricao": "Proteção da cabeça do usuário contra impactos de objetos sobre o crânio. Não aprovado para eletricistas.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capacete Classe B (Arco Elétrico)", "descricao": "Proteção da cabeça do usuário contra impactos de objetos sobre o crânio e contra choques elétricos", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Capacete Classe B (P/Protetor Facial Eletricista)", "descricao": "Proteção da cabeça do usuário contra impactos de objetos sobre o crânio e contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capacete Classe B (Proteção Arco Elétrico)", "descricao": "Proteção da cabeça do usuário contra impactos de objetos sobre o crânio e contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção auditiva", "nome": "Capacete com Protetor Auricular", "descricao": "Proteção do sistema auditivo do usuário contra níveis de pressão sonora superiores ao estabelecido na nr 15, anexos I e ii (conforme tabela de atenuação abaixo).", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capacete de Montaria", "descricao": "Proteção do crânio contra impactos de reações dos animais como coices, quedas e outros.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capacete de Segurança com proteção elétrica", "descricao": "Proteção da cabeça do usuário contra impactos de objetos sobre o crânio e contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capacete de Segurança Impacto de Objetos", "descricao": "Proteção da cabeça do usuário contra impactos de objetos sobre o crânio.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção auditiva", "nome": "Capacete Florestal Motosserrista Roçadeira C/ Abafador", "descricao": "", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "60 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capacete tipo alpinista", "descricao": "Proteção da cabeça do usuário contra impactos de objetos sobre o crânio.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Capacete/Respirador Jatista", "descricao": "Proteção das vias respiratórias em atmosferas não imediatamente perigosas à vida e a saúde e porcentagem de oxigênio superior a 12,5 % ao nível do mar.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capuz Balaclava Eletricistas", "descricao": "Proteção do crânio e pescoço do usuário contra agentes térmicos provenientes de arco elétrico.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capuz/Balaclava Solda", "descricao": "Proteção do crânio e pescoço do usuário contra agentes térmicos (pequenas chamas, calor de contato, convectivo, radiante e metal fundido) e contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Capuz/Balaclava Térmico -5°C", "descricao": "Proteção do crânio e pescoço do usuário contra agentes térmicos (frio), para temperatura ambiente abaixo de -5ºc.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Casaco de Raspa", "descricao": "Proteção do tronco e membros superiores do usuário contra agentes térmicos (pequenas chamas, calor de contato, convectivo, radiante e metais fundidos) e contra agentes agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Casaco Térmico Aluminizado-Processos de solda e similares", "descricao": "Proteção do tronco e membros superiores do usuário contra agentes térmicos (pequenas chamas, calor de contato, convectivo, radiante e metais fundidos) e contra agentes agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Outros itens de proteção", "nome": "Cervical de Chumbo-Radiação", "descricao": "Proteção do tronco (tireoide) contra riscos de origem radioativa (radiação x).", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Chapéu", "descricao": "Utilizado apenas para suporte evitando contato direto da cabeça do colaborador com a sacaria na realocação da saída do envase para a esteira de transporte.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Ergonomia / suporte", "nome": "Cinta Lombar", "descricao": "A cinta lombar proporciona sustentação e protege essa parte das costas, agindo na prevenção dos riscos de lesões. Também proporciona estabilidade nessa região e auxilia na postura correta.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção contra quedas", "nome": "Cinto de Segurança 5Pontos indicado para posicionamento", "descricao": "Proteção do usuário contra riscos de quedas nos trabalhos em altura.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção contra quedas", "nome": "Cinto de Segurança Paraquedista 2Pontos", "descricao": "Proteção do usuário contra riscos de quedas nos trabalhos em altura.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção contra quedas", "nome": "Cinto de Segurança tipo paraquedista 2 pontos com Talabarte e trava-queda", "descricao": "Proteção do usuário contra riscos de quedas nos trabalhos em altura.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Colete de Proteção Térmica -5°C", "descricao": "Proteção do tronco do usuário contra agentes térmicos - frio, para temperatura ambiente acima de -5ºc.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Colete Refletivo", "descricao": "Sinalização de atenção ao usuário que reflete a luz sinalizando que está no local de trânsito, trabalho em elétrica, entre outros", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Conjunto de Aplicação de Defensivo Costal", "descricao": "Proteção da cabeça, tronco, membros superiores e membros inferiores do usuário contra riscos de origem química (agrotóxicos).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Conjunto de Aplicação de Defensivos", "descricao": "Proteção dos olhos, crânio, pescoço, tronco, membros superiores e inferiores do usuário contra riscos de origem química (agrotóxicos).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Conjunto Pantaneiro Para Chuvas", "descricao": "Proteção do tronco e membros superiores do usuário contra umidade proveniente de precipitação pluviométrica.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Creme de Proteção Agentes Químicos Classe 3", "descricao": "Usar sempre com as mãos limpas e secas antes do início das atividades e antes de manusear tintas, solventes, óleos e graxas e outros. O mesmo não substitui a obrigatoriedade do uso de luvas para o manuseio dos químicos citados acima, os cremes de proteção funcionam proporcionando uma espécie de fina camada protetora entre a pele do profissional e os agentes agressores.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "2 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da pele", "nome": "Creme Protetor de Segurança", "descricao": "Proteção dos membros superiores do usuário contra riscos provenientes de produtos químicos: tolueno, xileno, benzina, thinner, águarraz, gasolina, óleo mineral, óleo diesel, querosene, pós em geral, ácido fosfórico diluído a 15%, ácido clorídrico diluído a 15%, ácido sulfúrico diluído a 15%, ácido acético diluído a 10% e hidróxido de sódio diluído a 10%.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Filtro Cartucho multigases 3m", "descricao": "Proteção das vias respiratórias do usuário contra a inalação de partículas sólidas, quando utilizado com filtros mecânicos ou combinados, e contra gases e vapores, quando utilizado com filtros químicos ou combinados.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Filtro Cartucho Químico Gases Acidos 3M", "descricao": "Proteção das vias respiratórias do usuário contra a inalação de partículas sólidas, quando utilizado com filtros mecânicos ou combinados, e contra gases e vapores, quando utilizado com filtros químicos ou combinados.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Filtro P2\\_Poeiras/Névoas e Fumos", "descricao": "Para proteção das vias respiratórias contra poeiras e névoas não oleosas, que não emitam gases e/ou vapores; fumos metálicos ou plásticos e névoas de ácido sulfúrico (com óculos de proteção adequados).", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Jaleco anti-chamas eletricista", "descricao": "Proteção do tronco e membros superiores do usuário contra agentes térmicos provenientes de arco elétrico e fogo repentino.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Japona Térmica -35°C", "descricao": "Proteção do crânio, pescoço, tronco e membros superiores do usuário contra agentes térmicos - frio, para temperatura ambiente abaixo de -5ºc.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Agentes Mecânicos (PU)", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Agentes Mecânicos(PU)", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva alta tensão pico 20000V\\_Class 02", "descricao": "Proteção das mãos do usuário contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Antivibração", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes e contra vibrações.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Baixa Tensão 500V Pico 2500V\\_Class 00", "descricao": "Proteção das mãos do usuário contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva banhada com Latex", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes e contra agentes térmicos (calor de contato).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva de Cobertura para tensão\\_Vaqueta", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes e contra agentes térmicos (pequenas chamas, calor de contato, convectivo, radiante e metais fundidos).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva de Malha de Aço", "descricao": "Proteção das mãos do usuário contra cortes por facas manuais e objetos cortantes similares.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "24 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva de Proteção Contra Agentes Térmicos", "descricao": "PROTEÇÃO DAS MÃOS DO USUÁRIO CONTRA AGENTES TÉRMICOS (PEQUENAS CHAMAS E CALOR DE CONTATO).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "24 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva de Raspa Cano Longo", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes e contra agentes térmicos (pequenas chamas, calor de contato, convectivo, radiante e metais fundidos).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva de Vaqueta", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva de Vaqueta Mista", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurocortantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "6 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Grip Azul", "descricao": "", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Látex Descartável", "descricao": "Proteção das mão do usuário contra agentes biológicos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "1 meses", "observacao": "Há descrição alternativa na base original; revisar tecnicamente."}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Latéx/Neoprene", "descricao": "Proteção das mãos do usuário contra agente químicos, produtos domissanitários.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Nitrílica", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, cortantes e perfurantes e contra agentes químicos ( hidrocarbonetos saturados (j), bases inorgânicas (k), ácidos orgânicos (n), bases orgânicas (o), peróxidos (p) e aldeídos (t)).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva para câmara fria -35°C", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes, perfurantes e contra agentes térmicos (frio).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Raspa-Cano curto", "descricao": "I) O EPI obteve resultado de níveis de desempenho 4344X para BS EN 388, com valores variando de 1(um) a 4 (quatro) para abrasão, rasgamento e perfuração e 1 (um) a 5 (cinco) para corte, sendo 1 (um) o pior resultado, em que: 4 - resistência à abrasão; 3 - resistência ao corte por lâmina; 4 - resistência ao rasgamento; 4 - resistência à perfuração por punção; X - resistência ao corte TDM (ensaio adicional previsto na norma EN ISO 13997, com valores de A a F, sendo F o melhor resultado). II) O código X indica que o EPI não foi ensaiado para a aplicação correspondente. III) Para a seleção e correta utilização do equipamento, verificar o disposto no Comunicado XL, disponível no link \"https\\://www\\.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/equipamentos-de-protecao-individual-epi/comunicados-epi\".", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Térmica até 350c°", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes, contra agentes térmicos (pequenas chamas, calor de contato, convectivo, radiante e metais fundidos), contra agentes térmicos (frio) e contra agentes químicos (aminas (g), ésteres (I), hidrocarbonetos saturados (j), bases inorgânicas (k), ácidos orgânicos (n), peróxidos (p) e aldeídos (t)).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Térmica Baixas Temperaturas Volk", "descricao": "A luva térmica é indicada para trabalhos leves e médios, protegendo o usuário que trabalha nos setores operacionais de indústrias alimentícias, frigoríficas, armazéns, portos e terminais de cargas frias, manipulação de peças frias, empilhadeiras em ambientes refrigerados, atividades desenvolvidas em ambientes frios e controlados. Proteção contra agentes abrasivos, escoriantes, cortantes e perfurantes; Proteção térmica a altas temperaturas; Proteção em atividades sob temperaturas de até -25°C, com intermitência de 15 segundos; Proteção ao calor de contato: até 250°C por 15 segundos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "Em uso", "observacao": "Substituir conforme desgaste, perda de integridade, contaminação ou perda da capacidade de proteção térmica. Produto reutilizável e lavável"}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva Tricotada/Algodão", "descricao": "Proteção das mãos do usuário contra agentes abrasivos, escoriantes, cortantes e perfurocortantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva/Mangote Temp. de Contato", "descricao": "Proteção das mãos do usuário contra agentes térmicos (pequenas chamas e calor de contato).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das mãos", "nome": "Luva/Mangote Térmico", "descricao": "Proteção das mãos do usuário contra agentes térmicos (pequenas chamas, calor de contato, convectivo e radiante).", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Macacão de Pintura Colad", "descricao": "Equipamento de Proteção Individual (EPI): Categoria I de acordo com a Diretiva Europeia 2016/425 - O EPI básico protege contra riscos mínimos. Protege contra produtos químicos como tintas.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "Em uso", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Macacão de Segurança Eletricista", "descricao": "Proteção do tronco, membros superiores e inferiores do usuário contra agentes térmicos provenientes de arco elétrico.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Macacão Impermeável Para Saneamento", "descricao": "Proteção do crânio, pescoço, tronco, membros superiores e membros inferiores do usuário contra riscos de origem química e contra umidade proveniente de operações com uso de água.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Macacão p/ risco Biológico ou Químico", "descricao": "Proteção do tronco, membros superiores e membros inferiores do usuário contra riscos de origem química/biológica.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Outros itens de proteção", "nome": "Manga", "descricao": "Proteção do braço e antebraço do usuário contra agentes escoriantes, cortantes e perfurocortantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "4 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos braços", "nome": "Manga Isolante Alta Tensão 20kv", "descricao": "Proteção do braço e antebraço do usuário contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos braços", "nome": "Manga Isolante de Borracha até 1000v", "descricao": "Proteção do braço e antebraço do usuário contra choques elétricos.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos braços", "nome": "Mangote de Algodão", "descricao": "Proteção do braço e antebraço do usuário contra agentes abrasivos, escoriantes, cortantes e perfurantes.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos braços", "nome": "Mangote de Raspa", "descricao": "Proteção do braço e antebraço do usuário contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem, corte e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos braços", "nome": "Mangote Térmico", "descricao": "Proteção do braço e antebraço do usuário contra agentes térmicos (pequenas chamas, calor de contato, convectivo e radiante) e contra umidade provenientes de operações com uso de água.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Máscara Cirúrgica", "descricao": "Indicado para uso em Centro Cirúrgico, Hospitais, Clínicas, Consultórios Odontológicos, Indústria Alimentícia, Manipulação de Alimentos e Estabelecimentos Similares. O produto é descartável, devendo ser usado uma única vez pelo período máximo de 4 horas. Findado deste período, a troca da Máscara deve ser realizada obrigatoriamente.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "Uso único", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Mascara de Solda", "descricao": "Proteção dos olhos e face do usuário contra impactos de partículas volantes (frontais/multidirecionais), luminosidade intensa e radiações provenientes de serviços de soldagem.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "36 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Máscara Descartável com Válvula 9322+BR – 3M", "descricao": "Proteção das vias respiratórias do usuário contra poeiras, névoas e fumos(PFF2).", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Máscara Descartável Hospitalar", "descricao": "Proteção das vias respiratórias do usuário contra poeiras, névoas e fumos (pff2).", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "Uso único", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Máscara Descartável TNT", "descricao": "", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Óculos de Proteção UVA,UVB e IR", "descricao": "Proteção dos olhos do usuário contra partículas volantes multidirecionais, respingos de produtos ácidos entre outros, luminosidade intensa, raios UVA, UVB. IR.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "36 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Óculos de Segurança Incolor", "descricao": "Proteção dos olhos do usuário contra impactos de partículas volantes, contra raios ultravioleta e no caso das lentes cinzas, luz intensa. Deverá ser usado nas atividades que oferecem risco de estilhaços ou faíscas metálicas, efetuar a troca sempre que estiver arranhado atrapalhando a visão ou vencimento do CA.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "6 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Óculos de segurança lentes escuras", "descricao": "Proteção dos olhos do usuário contra impactos de partículas volantes; contra raio ultravioleta (u6); no caso das lentes incolor com revestimento externo de filme prateado, cinza, cinza com tratamento, cinza com revestimento externo de filme prateado e verde escuro , contra luz intensa (l); e, ainda, no caso da lente verde escuro, contra raio infravermelho (r3) e contra soldagem e processos similares (w5)", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Óculos Eletricista", "descricao": "Proteção dos olhos do usuário contra impactos de partículas volantes e soldagem e processos similares (w).", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Óculosde Proteção CE- Próprio da Máquina", "descricao": "CE-200-405nm Odz+ & 080-1100nm OD5+CE", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "180 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Perneira de Proteção (animais peçonhentos)", "descricao": "Proteção das pernas do usuário contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Perneira de Raspa (Solda)", "descricao": "Proteção das pernas contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem, corte e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": "Há descrição alternativa na base original; revisar tecnicamente."}, {"categoria": "EPI", "tipo": "Proteção das pernas", "nome": "Perneira Impactos de objetos", "descricao": "Proteção das pernas do usuário contra agentes abrasivos, escoriantes e térmicos provenientes de operações de soldagem e processos similares.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção auditiva", "nome": "Protetor Auricular Plug", "descricao": "Proteção do sistema auditivo do usuário contra níveis de pressão sonora superiores ao estabelecimento na NR15,anexo I e II.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "1 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção auditiva", "nome": "Protetor Auricular Tipo Concha", "descricao": "Proteção do sistema auditivo do usuário contra níveis de pressão sonora superiores ao estabelecimento na NR15,anexo I e II.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "6 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Protetor Facial Arco Elétrico", "descricao": "Proteção dos olhos e face do usuário contra impactos de partículas volantes, contra raios ultravioleta (u6) e infravermelho (R5) e contra agentes térmicos provenientes de arco elétrico.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Protetor Facial incolor", "descricao": "Proteção dos olhos e face do usuário contra impacto de partículas volantes", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": "Há descrição alternativa na base original; revisar tecnicamente."}, {"categoria": "EPI", "tipo": "Proteção dos olhos e face", "nome": "Protetor Facial tipo tela", "descricao": "Proteção do crânio e pescoço do usuário contra agentes abrasivos, escoriantes.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção solar", "nome": "Protetor Solar UVA/UVB Fator 60", "descricao": "Proteção contra efeito do sol, age contra a ação nociva dos raios ultravioletas dos tipos UVA e UVB emitidas pelas radiações solares, pelas radiações provenientes de trabalhos com soldas elétricas e de outras máquinas e equipamentos que emitam este tipo de radiações. Registro no Ministério da Saúde: 2.1679.0054", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "2 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Respirador 3M 6200 Semifacial Reutilizável", "descricao": "Proteção das vias respiratórias do usuário contra a inalação de partículas sólidas, quando utilizado com filtros mecânicos ou combinados, e contra gases e vapores, quando utilizado com filtros químicos ou combinados.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Respirador Peça Inteira", "descricao": "Proteção das vias respiratórias do usuário contra a inalação de partículas sólidas, quando utilizado com filtros mecânicos ou combinados, e contra gases e vapores, quando utilizado com filtros químicos ou combinados.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "Em uso", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Respirador Pff2", "descricao": "Utilizar quando em contato com poeiras, nevoas e fumos. Proteção das vias respiratórias contra poeiras, névoas e fumos (PFF2).", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "Uso único", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção respiratória", "nome": "Respirador Tipo P3-Para Agrotóxicos Vide a FISPQ", "descricao": "PROTEÇÃO DAS VIAS RESPIRATÓRIAS DO USUÁRIO CONTRA A INALAÇÃO DE PARTÍCULAS SÓLIDAS, QUANDO UTILIZADO COM FILTROS COMBINADOS, E CONTRA GASES E VAPORES, QUANDO UTILIZADO COM FILTROS QUÍMICOS OU COMBINADOS.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Outros itens de proteção", "nome": "Roupas de Manga Longa", "descricao": "Proteção do tronco e membros superiores do usuário contra agentes térmicos - frio, para temperatura ambiente acima de -5ºc.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção dos pés", "nome": "Sapato de Segurança Hospitalar", "descricao": "Proteção dos pés do usuário contra riscos de natureza leve, contra agentes abrasivos e escoriantes e contra umidade proveniente de operações com uso de água.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção contra quedas", "nome": "Talabarte em Y", "descricao": "Proteção do usuário contra riscos de quedas nos trabalhos em altura.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção contra quedas", "nome": "Talabarte simples", "descricao": "Proteção do usuário contra riscos de quedas nos trabalhos em altura.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Touca Árabe", "descricao": "Proteção do crânio e pescoço do usuário contra agentes abrasivos e escoriantes. Proteção do crânio e pescoço do usuário contra agentes abrasivos e escoriantes.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção da cabeça", "nome": "Touca TNT Descartável", "descricao": "Touca de proteção sanfonada em formato de tiras fabricada em (TNT). Indicada para evitar queda de fios de cabelo nos produtos ou máquinas que possam contaminar alimentos ou colocar o trabalhador em perigo. Uso único, individual e descartável, proporcionando mais segurança ao usuário; Higiene e segurança", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "Uso único", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção contra quedas", "nome": "Trava quedas retrátil", "descricao": "Proteção contra quedas em deslocamentos verticais.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção contra quedas", "nome": "Trava Quedas Retrátil tipo fita", "descricao": "Utilizado para retenção de queda em sistema de ancoragem para deslocamento horizontal e vertical no trabalho em altura.", "exibirFicha": "SIM", "possuiVariacao": "NÃO", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "EPI", "tipo": "Proteção do corpo", "nome": "Vestimenta Tipo Camisa-Eletricista", "descricao": "Proteção do tronco e membros superiores do usuário contra agentes térmicos provenientes de aro elétrico e fogo repentino.", "exibirFicha": "SIM", "possuiVariacao": "SIM", "vidaUtil": "12 meses", "observacao": ""}, {"categoria": "Uniforme", "tipo": "Proteção do Corpo", "nome": "Camiseta", "descricao": "Proteção do tronco e membros superiores.", "exibirFicha": "Sim", "possuiVariacao": "SIM", "vidaUtil": "", "observacao": ""}, {"categoria": "Item de uso pessoal", "tipo": "", "nome": "Marmita", "descricao": "", "exibirFicha": "NÃO", "possuiVariacao": "NÃO", "vidaUtil": "", "observacao": ""}, {"categoria": "Item de uso pessoal", "tipo": "", "nome": "Galão térmico", "descricao": "", "exibirFicha": "NÃO", "possuiVariacao": "NÃO", "vidaUtil": "", "observacao": ""}];
const BASE_MATRIX = [{"cargo": "Supervisor de operações", "item": "Protetor Auricular Plug", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Respirador 3M 6200 Semifacial Reutilizável", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Touca Árabe", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Luva Nitrílica", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Luva de Raspa Cano Longo", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Avental de Raspa com Manga", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Perneira de Proteção (animais peçonhentos)", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Botina de Segurança, biqueira composite", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Bota de PVC cano médio, sem biqueira", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Protetor Facial incolor", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Conjunto de Aplicação de Defensivos", "quantidade": 1}, {"cargo": "Supervisor de operações", "item": "Respirador Tipo P3-Para Agrotóxicos Vide a FISPQ", "quantidade": 1}, {"cargo": "Trabalhador Rural", "item": "Protetor Auricular Tipo Concha", "quantidade": 1}, {"cargo": "Trabalhador Rural", "item": "Protetor Auricular Plug", "quantidade": 1}, {"cargo": "Trabalhador Rural", "item": "Touca Árabe", "quantidade": 1}, {"cargo": "Trabalhador Rural", "item": "Luva de Raspa Cano Longo", "quantidade": 1}, {"cargo": "Trabalhador Rural", "item": "Avental de Raspa com Manga", "quantidade": 1}, {"cargo": "Trabalhador Rural", "item": "Perneira de Proteção (animais peçonhentos)", "quantidade": 1}, {"cargo": "Trabalhador Rural", "item": "Botina de Segurança, biqueira composite", "quantidade": 1}, {"cargo": "Trabalhador Rural", "item": "Protetor Facial Incolor", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Protetor Auricular Plug", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Respirador 3M 6200 Semifacial Reutilizável", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Touca Árabe", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Luva Nitrílica", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Luva de Raspa Cano Longo", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Avental de Raspa com Manga", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Perneira de Proteção (animais peçonhentos)", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Botina de Segurança, biqueira composite", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Bota de PVC cano médio, sem biqueira", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Protetor Facial Incolor", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Conjunto de Aplicação de Defensivos", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Respirador Tipo P3-Para Agrotóxicos Vide a FISPQ", "quantidade": 1}, {"cargo": "Trabalhador Rural II", "item": "Protetor Auricular Tipo Concha", "quantidade": 1}, {"cargo": "Tratorista", "item": "Protetor Auricular Tipo Concha", "quantidade": 1}, {"cargo": "Tratorista", "item": "Protetor Auricular Plug", "quantidade": 1}, {"cargo": "Tratorista", "item": "Respirador 3M 6200 Semifacial Reutilizável", "quantidade": 1}, {"cargo": "Tratorista", "item": "Touca Árabe", "quantidade": 1}, {"cargo": "Tratorista", "item": "Luva Nitrílica", "quantidade": 1}, {"cargo": "Tratorista", "item": "Luva de Raspa Cano Longo", "quantidade": 1}, {"cargo": "Tratorista", "item": "Avental de Raspa com Manga", "quantidade": 1}, {"cargo": "Tratorista", "item": "Perneira de Proteção (animais peçonhentos)", "quantidade": 1}, {"cargo": "Tratorista", "item": "Botina de Segurança, biqueira composite", "quantidade": 1}, {"cargo": "Tratorista", "item": "Bota de PVC cano médio, sem biqueira", "quantidade": 1}, {"cargo": "Tratorista", "item": "Protetor Facial Incolor", "quantidade": 1}, {"cargo": "Tratorista", "item": "Conjunto de Aplicação de Defensivos", "quantidade": 1}, {"cargo": "Tratorista", "item": "Respirador Tipo P3-Para Agrotóxicos Vide a FISPQ", "quantidade": 1}];
const BASE_COLABS = [{"nome": "Anderson Silverio", "cpf": "139.894.256-17", "cargo": "Tratorista", "admissao": "46246", "tipoCadastro": "ADMISSÃO"}, {"nome": "Domingos dos Santos", "cpf": "009.147.146-00", "cargo": "Trabalhador Rural", "admissao": "46163", "tipoCadastro": "INICIAL"}, {"nome": "Ederval Mariano", "cpf": "101.880.166-94", "cargo": "Tratorista I", "admissao": "46036", "tipoCadastro": "INICIAL"}, {"nome": "Eliane Silverio Batista", "cpf": "118.514.376-90", "cargo": "Empregada Doméstica", "admissao": "46056", "tipoCadastro": "INICIAL"}, {"nome": "Fabio Augusto", "cpf": "118.695.136-22", "cargo": "Tratorista", "admissao": "46091", "tipoCadastro": "INICIAL"}, {"nome": "Joao Camilo Batista", "cpf": "487.248.236-00", "cargo": "Trabalhador Rural", "admissao": "45729", "tipoCadastro": "INICIAL"}, {"nome": "Jose Reis Feliciano", "cpf": "002.846.746-99", "cargo": "Tratorista", "admissao": "45896", "tipoCadastro": "INICIAL"}, {"nome": "Luiz Carlos Batista", "cpf": "072.056.426-39", "cargo": "Supervisor de Operações", "admissao": "45399", "tipoCadastro": "INICIAL"}, {"nome": "Marcilio Martimiano da Costa", "cpf": "062.522.286-56", "cargo": "Tratorista", "admissao": "45896", "tipoCadastro": "INICIAL"}, {"nome": "Ricardo Antonio da Silva Rodrigues", "cpf": "106.846.776-28", "cargo": "Trabalhador Rural II", "admissao": "45896", "tipoCadastro": "INICIAL"}];

const KEY_MATRIX = 'rgcerte_matrix_v1';
const KEY_COLABS = 'rgcerte_colabs_v1';
const KEY_CLIENT = 'rgcerte_client_v1';
const KEY_CARGOS = 'rgcerte_cargos_v2';
const KEY_ITEMS = 'rgcerte_items_v2';
const KEY_ENTRADAS = 'rgcerte_entradas_v1';

const KEY_SAIDAS = 'rgcerte_saidas_v1';

// =========================================================
// V30 — SUPABASE: PRIMEIRA MIGRAÇÃO (ENTRADAS)
// =========================================================
const supabaseClient = window.supabase.createClient(
  window.APP_CONFIG.supabase.url,
  window.APP_CONFIG.supabase.publishableKey
);

const SUPABASE_EMPRESA_NOME = 'Fazenda Vale do Sol';
let supabaseEmpresaId = null;
let supabaseEmpresaNome = '';
let supabaseItensPorNome = new Map();

async function carregarReferenciasSupabase() {
  if (!supabaseEmpresaId) {
    throw new Error('Selecione a empresa/fazenda antes de entrar no sistema.');
  }

  if (supabaseItensPorNome.size) return;

  const {data:{user},error:userError}=await supabaseClient.auth.getUser();
  if(userError) throw userError;
  if(!user) throw new Error('Sessão não autenticada.');

  window.SUPABASE_EMPRESA_NOME_ATUAL = supabaseEmpresaNome || 'Empresa';

  const client=document.getElementById('clientName');
  if(client){
    client.value=window.SUPABASE_EMPRESA_NOME_ATUAL;
  }

  const {data:itensDb,error:itensError}=await supabaseClient
    .from('epi_itens')
    .select('id,nome');

  if(itensError) throw itensError;

  supabaseItensPorNome=new Map(
    (itensDb||[]).map(i=>[normKey(i.nome),i.id])
  );
}

async function carregarEntradasSupabase() {
  try {
    await carregarReferenciasSupabase();

    const { data, error } = await supabaseClient
      .from('epi_entradas')
      .select(`
        id,
        data_entrada,
        variacao,
        ca,
        quantidade,
        fornecedor,
        observacao,
        item_id,
        epi_itens ( nome )
      `)
      .eq('empresa_id', supabaseEmpresaId)
      .order('data_entrada', { ascending: false })
      .order('criado_em', { ascending: false });

    if (error) throw error;

    entradas = (data || []).map(e => ({
      id: e.id,
      data: e.data_entrada,
      produto: e.epi_itens?.nome || '',
      variacao: e.variacao || '',
      ca: e.ca || 'N/A',
      quantidade: Number(e.quantidade) || 0,
      fornecedor: e.fornecedor || '',
      observacao: e.observacao || ''
    }));

    renderEntradas();
    renderEstoque();
    populateSaidaProdutos();
    populateHistoricoProdutos();
    renderHistorico();

    console.log(`Supabase: ${entradas.length} entrada(s) carregada(s).`);
  } catch (err) {
    console.error('Erro ao carregar entradas do Supabase:', err);
    document.getElementById('entradaInfo').innerHTML =
      `<b>Erro de conexão com o Supabase.</b><br>${err.message || err}`;
  }
}


let items = [];
let entradas = []; // V30: entradas agora vêm do Supabase
let saidas = []; // V31 Supabase
let matrix = [];
let collaborators = [];
let cargos = [];

function uniq(arr) { return [...new Set(arr.filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR')); }
function itemByName(name) { return items.find(i=>i.nome===name) || {}; }
function categoryBadge(cat) {
  const c=(cat||'').toUpperCase();
  if(c.includes('EPI')) return '<span class="badge badge-epi">EPI</span>';
  if(c.includes('UNIFORM')) return '<span class="badge badge-uniforme">UNIFORME</span>';
  return '<span class="badge badge-pessoal">'+(cat||'OUTRO')+'</span>';
}
function saveAll(){ /* V32: dados principais no Supabase */ }

let supabaseColabsPorNome=new Map();

async function carregarColaboradoresSupabase(){
  await carregarReferenciasSupabase();
  const {data,error}=await supabaseClient.from('epi_colaboradores')
    .select('id,nome,cargo_id,epi_cargos(nome)')
    .eq('empresa_id',supabaseEmpresaId).eq('ativo',true);
  if(error) throw error;
  supabaseColabsPorNome=new Map((data||[]).map(c=>[normKey(c.nome),c]));
}

async function carregarSaidasSupabase(){
  try{
    await carregarReferenciasSupabase();
    const {data,error}=await supabaseClient.from('epi_saidas')
      .select('id,data_saida,variacao,ca,quantidade,motivo,origem,observacao,epi_itens(nome),epi_colaboradores(nome)')
      .eq('empresa_id',supabaseEmpresaId)
      .order('data_saida',{ascending:false}).order('criado_em',{ascending:false});
    if(error) throw error;
    saidas=(data||[]).map(s=>({id:s.id,data:s.data_saida,colaborador:s.epi_colaboradores?.nome||'',
      produto:s.epi_itens?.nome||'',variacao:s.variacao||'',ca:s.ca||'N/A',
      quantidade:Number(s.quantidade)||0,motivo:s.motivo||'',origem:s.origem||'',observacao:s.observacao||''}));
    renderSaidas(); renderEstoque(); populateSaidaProdutos(); populateHistoricoProdutos();
    renderHistorico(); populateFichaColaboradores(); populateOutrosFichaColaboradores(); renderFichaEntregas(); renderOutrosFichaEntregas(); renderAdmissao(); if(typeof populateProgramacaoColaboradores==='function') populateProgramacaoColaboradores();
  }catch(err){ console.error(err); alert('Erro ao carregar saídas do Supabase: '+(err.message||err)); }
}


let supabaseCargosPorNome=new Map();
async function carregarCadastrosSupabase(){
  await carregarReferenciasSupabase();
  const [ri,rc,rco,rm]=await Promise.all([
    supabaseClient.from('epi_itens').select('*').eq('ativo',true).order('nome'),
    supabaseClient.from('epi_cargos').select('id,nome').eq('empresa_id',supabaseEmpresaId).eq('ativo',true).order('nome'),
    supabaseClient.from('epi_colaboradores').select('id,nome,cpf,data_admissao,tipo_cadastro,cargo_id,epi_cargos(nome)').eq('empresa_id',supabaseEmpresaId).eq('ativo',true).order('nome'),
    supabaseClient.from('epi_cargo_itens').select('id,cargo_id,item_id,quantidade_inicial,epi_cargos(nome),epi_itens(nome)')
  ]);
  for(const r of [ri,rc,rco,rm]) if(r.error) throw r.error;
  items=(ri.data||[]).map(i=>({id:i.id,categoria:i.categoria||'',tipo:i.tipo||'',nome:i.nome||'',descricao:i.descricao||'',exibirFicha:i.exibir_ficha?'SIM':'NÃO',possuiVariacao:i.possui_variacao?'SIM':'NÃO',vidaUtil:i.vida_util||'',observacao:i.observacao||''}));
  supabaseItensPorNome=new Map(items.map(i=>[normKey(i.nome),i.id]));
  cargos=(rc.data||[]).map(c=>c.nome);
  supabaseCargosPorNome=new Map((rc.data||[]).map(c=>[normKey(c.nome),c.id]));
  collaborators=(rco.data||[]).map(c=>({id:c.id,nome:c.nome||'',cpf:c.cpf||'',cargo:c.epi_cargos?.nome||'',admissao:c.data_admissao||'',tipoCadastro:c.tipo_cadastro||'INICIAL'}));
  matrix=(rm.data||[]).filter(x=>x.epi_cargos?.nome&&x.epi_itens?.nome).map(x=>({id:x.id,cargo:x.epi_cargos.nome,item:x.epi_itens.nome,quantidade:Number(x.quantidade_inicial)||1}));
  renderCargoOptions(); renderMatrix(); renderItemCategoryFilter(); populateItemSelect(); renderItems(); renderColabs();
  populateEntradaProdutos(); populateSaidaProdutos(); populateSaidaColaboradores(); populateAdmissaoColaboradores(); populateFichaColaboradores(); populateOutrosFichaColaboradores(); populateHistoricoProdutos();
  renderAdmissao(); renderFichaEntregas(); renderOutrosFichaEntregas(); if(typeof populateProgramacaoColaboradores==='function') populateProgramacaoColaboradores();
}
async function recarregarCadastrosSupabase(){try{await carregarCadastrosSupabase();}catch(e){console.error(e);alert('Erro ao carregar cadastros do Supabase: '+(e.message||e));}}

const cargoSelect=document.getElementById('cargoSelect');
const matrixBody=document.getElementById('matrixBody');
const matrixSearch=document.getElementById('matrixSearch');

function renderCargoOptions() {
  cargos=uniq(cargos);
  const prev=cargoSelect.value;
  cargoSelect.innerHTML=cargos.map(c=>`<option>${c}</option>`).join('');
  if(cargos.includes(prev)) cargoSelect.value=prev;
  document.getElementById('colabCargo').innerHTML=cargos.map(c=>`<option>${c}</option>`).join('');
  document.getElementById('statCargos').textContent=cargos.length;
}

function renderMatrix() {
  const cargo=cargoSelect.value;
  const q=matrixSearch.value.trim().toLowerCase();
  const rows=matrix.filter(x=>x.cargo===cargo && (!q || x.item.toLowerCase().includes(q)));
  matrixBody.innerHTML=rows.length ? rows.map((r,idx)=>{
    const meta=itemByName(r.item);
    return `<tr>
      <td><b>${r.item}</b><div class="muted" style="font-size:12px;margin-top:3px">${meta.tipo||''}</div></td>
      <td>${categoryBadge(meta.categoria)}</td>
      <td>${meta.possuiVariacao||'NÃO'}</td>
      <td><input type="number" min="1" value="${r.quantidade}" style="width:78px" onchange="updateQty('${cargo.replace(/'/g,"\'")}','${r.item.replace(/'/g,"\'")}',this.value)" /></td>
      <td>${meta.vidaUtil||'<span class="muted">sem prazo</span>'}</td>
      <td><div class="actions"><button class="icon-btn" onclick="removeMatrix('${cargo.replace(/'/g,"\'")}','${r.item.replace(/'/g,"\'")}')">Excluir</button></div></td>
    </tr>`;
  }).join('') : `<tr><td colspan="6" class="empty">Nenhum item vinculado a este cargo.</td></tr>`;
  document.getElementById('statItens').textContent=items.length;
  document.getElementById('statVinculos').textContent=matrix.length;
}

window.updateQty=async (cargo,item,val)=>{
  const row=matrix.find(x=>x.cargo===cargo && x.item===item);
  if(!row)return;
  const quantidade=Math.max(1,Number(val)||1);
  try{
    const {error}=await supabaseClient.from('epi_cargo_itens').update({quantidade_inicial:quantidade}).eq('id',row.id);
    if(error)throw error;
    row.quantidade=quantidade;
  }catch(e){console.error(e);alert('Erro ao alterar quantidade da matriz: '+(e.message||e));await recarregarCadastrosSupabase();}
};
window.removeMatrix=async (cargo,item)=>{
  const row=matrix.find(x=>x.cargo===cargo && x.item===item);
  if(!row)return;
  if(!confirm(`Remover "${item}" da matriz do cargo "${cargo}"?`))return;
  try{
    const {error}=await supabaseClient.from('epi_cargo_itens').delete().eq('id',row.id);
    if(error)throw error;
    await recarregarCadastrosSupabase();
  }catch(e){console.error(e);alert('Erro ao remover vínculo da matriz: '+(e.message||e));}
};

function populateItemSelect() {
  const sel=document.getElementById('matrixItemSelect');
  sel.innerHTML=items.map(i=>`<option value="${i.nome}">${i.nome}</option>`).join('');
  updateMatrixInfo();
}
function updateMatrixInfo() {
  const i=itemByName(document.getElementById('matrixItemSelect').value);
  document.getElementById('matrixItemInfo').innerHTML =
    `<b>${i.categoria||''}</b> · ${i.tipo||''}<br>
     Variação: <b>${i.possuiVariacao||'NÃO'}</b> · Vida útil ref.: <b>${i.vidaUtil||'sem prazo'}</b>`;
}



let editingItemOriginalName=null;

function renderItemCategoryFilter() {
  const sel=document.getElementById('itemCategoryFilter');
  const prev=sel.value;
  const cats=uniq(items.map(i=>i.categoria));
  sel.innerHTML='<option value="">Todas</option>'+cats.map(c=>`<option>${c}</option>`).join('');
  if(cats.includes(prev)) sel.value=prev;
}

function renderItems() {
  const q=document.getElementById('itemSearch').value.trim().toLowerCase();
  const cat=document.getElementById('itemCategoryFilter').value;
  const rows=items.filter(i=>{
    const hay=[i.nome,i.categoria,i.tipo,i.descricao].join(' ').toLowerCase();
    return (!q || hay.includes(q)) && (!cat || i.categoria===cat);
  });

  document.getElementById('itemBody').innerHTML=rows.length ? rows.map(i=>`
    <tr>
      <td><b>${i.nome}</b><div class="muted" style="font-size:12px;margin-top:3px">${i.descricao||''}</div></td>
      <td>${categoryBadge(i.categoria)}</td>
      <td>${i.tipo||''}</td>
      <td>${i.possuiVariacao||'NÃO'}</td>
      <td>${i.vidaUtil||'<span class="muted">sem prazo</span>'}</td>
      <td><div class="actions"><button class="icon-btn" onclick="editItem('${i.nome.replace(/'/g,"\\'")}')">Editar</button><button class="icon-btn" onclick="deleteItemDb('${i.nome.replace(/'/g,"\\'")}')">Excluir</button></div></td>
    </tr>`).join('') :
    `<tr><td colspan="6" class="empty">Nenhum item encontrado.</td></tr>`;

  document.getElementById('itemTotal').textContent=items.length;
  document.getElementById('itemEpi').textContent=items.filter(i=>(i.categoria||'').toUpperCase()==='EPI').length;
  document.getElementById('itemOutros').textContent=items.filter(i=>(i.categoria||'').toUpperCase()!=='EPI').length;
}

function openItemModal(item=null) {
  editingItemOriginalName=item ? item.nome : null;
  document.getElementById('itemModalTitle').textContent=item?'Editar item':'Novo item';
  document.getElementById('itemCategory').value=item?.categoria||'EPI';
  document.getElementById('itemType').value=item?.tipo||'';
  document.getElementById('itemName').value=item?.nome||'';
  document.getElementById('itemDescription').value=item?.descricao||'';
  document.getElementById('itemVariation').value=item?.possuiVariacao||'NÃO';
  document.getElementById('itemLife').value=item?.vidaUtil||'';
  document.getElementById('itemObservation').value=item?.observacao||'';
  document.getElementById('itemModal').classList.add('open');
}


window.deleteItemDb=async (name)=>{
  const item=itemByName(name); if(!item?.id)return;
  const usadoEntrada=entradas.some(e=>normKey(e.produto)===normKey(name));
  const usadoSaida=saidas.some(s=>normKey(s.produto)===normKey(name));
  if(usadoEntrada||usadoSaida)return alert('Exclusão bloqueada. Este item possui movimentação de estoque. Desative-o em vez de apagar o histórico.');
  if(!confirm(`Excluir o item "${name}"?`))return;
  try{
    const {error}=await supabaseClient.from('epi_itens').delete().eq('id',item.id);
    if(error)throw error;
    await recarregarCadastrosSupabase();
  }catch(e){console.error(e);alert('Não foi possível excluir o item: '+(e.message||e));}
};

window.editItem=(name)=>openItemModal(itemByName(name));
document.getElementById('newItemBtn').onclick=()=>openItemModal();

document.getElementById('saveItemBtn').onclick=async ()=>{
  const nome=document.getElementById('itemName').value.trim();
  if(!nome)return alert('Informe o nome do item.');
  const payload={categoria:document.getElementById('itemCategory').value,tipo:document.getElementById('itemType').value.trim()||null,nome,
    descricao:document.getElementById('itemDescription').value.trim()||null,exibir_ficha:true,
    possui_variacao:document.getElementById('itemVariation').value==='SIM',vida_util:document.getElementById('itemLife').value.trim()||null,
    observacao:document.getElementById('itemObservation').value.trim()||null,ativo:true};
  try{
    if(editingItemOriginalName){
      const original=items.find(i=>i.nome===editingItemOriginalName); if(!original)throw new Error('Item original não encontrado.');
      const {error}=await supabaseClient.from('epi_itens').update(payload).eq('id',original.id);if(error)throw error;
    }else{
      const {error}=await supabaseClient.from('epi_itens').insert(payload);if(error)throw error;
    }
    editingItemOriginalName=null;document.getElementById('itemModal').classList.remove('open');
    await recarregarCadastrosSupabase();await carregarEntradasSupabase();await carregarSaidasSupabase();
  }catch(e){console.error(e);alert('Erro ao salvar item: '+(e.message||e));}
};

document.getElementById('itemSearch').addEventListener('input',renderItems);
document.getElementById('itemCategoryFilter').addEventListener('change',renderItems);



let editingEntradaIndex=null;

function hojeISO(){
  const d=new Date();
  const off=d.getTimezoneOffset();
  return new Date(d.getTime()-off*60000).toISOString().slice(0,10);
}

function formatDateBR(v){
  if(v===null || v===undefined || v==='') return '';

  // Data já em ISO: 2026-08-20
  if(typeof v==='string' && /^\d{4}-\d{2}-\d{2}$/.test(v)){
    const [y,m,d]=v.split('-');
    return `${d}/${m}/${y}`;
  }

  // Data já em formato brasileiro
  if(typeof v==='string' && /^\d{2}\/\d{2}\/\d{4}$/.test(v)){
    return v;
  }

  // Serial de data do Excel
  const n=Number(v);
  if(Number.isFinite(n) && n>20000 && n<80000){
    const excelEpoch=Date.UTC(1899,11,30);
    const dt=new Date(excelEpoch+n*86400000);
    const d=String(dt.getUTCDate()).padStart(2,'0');
    const m=String(dt.getUTCMonth()+1).padStart(2,'0');
    const y=dt.getUTCFullYear();
    return `${d}/${m}/${y}`;
  }

  return String(v);
}

function populateEntradaProdutos(){
  const sel=document.getElementById('entradaProduto');
  const atual=sel.value;
  sel.innerHTML='<option value="">Selecione...</option>'+
    items.slice().sort((a,b)=>a.nome.localeCompare(b.nome,'pt-BR'))
      .map(i=>`<option value="${i.nome}">${i.nome}</option>`).join('');
  if(items.some(i=>i.nome===atual)) sel.value=atual;
  updateEntradaRules();
}

function updateEntradaRules(){
  const nome=document.getElementById('entradaProduto').value;
  const meta=itemByName(nome);
  const variationField=document.getElementById('entradaVariacaoField');
  const caField=document.getElementById('entradaCaField');
  const info=document.getElementById('entradaInfo');

  const temVariacao=(meta.possuiVariacao||'').toUpperCase()==='SIM';
  variationField.style.display=temVariacao?'grid':'none';
  if(!temVariacao) document.getElementById('entradaVariacao').value='';

  const categoria=(meta.categoria||'').toUpperCase();
  const isEpi=categoria==='EPI';
  caField.style.display='grid';
  document.getElementById('entradaCA').placeholder=isEpi?'Informe o CA':'N/A para item sem CA';

  if(!nome){
    info.innerHTML='Selecione um produto para ver as regras de entrada.';
    return;
  }

  info.innerHTML=
    `<b>${meta.categoria||'Item'}</b> · ${meta.tipo||''}<br>`+
    `Variação: <b>${temVariacao?'OBRIGATÓRIA':'NÃO'}</b> · `+
    `CA: <b>${isEpi?'OBRIGATÓRIO':'N/A quando não houver'}</b>`;
}


function normKey(v){
  return String(v||'').trim().toLocaleUpperCase('pt-BR');
}

function hasSaidaForEntrada(e){
  return saidas.some(s=>
    normKey(s.produto)===normKey(e.produto) &&
    normKey(s.variacao)===normKey(e.variacao) &&
    normKey(s.ca)===normKey(e.ca)
  );
}

window.editEntrada=(idx)=>{
  const e=entradas[idx];
  if(!e) return;

  if(hasSaidaForEntrada(e)){
    alert('Edição bloqueada. Este Produto + Variação + CA já possui saída registrada. Use ajuste/estorno para preservar o histórico.');
    return;
  }

  editingEntradaIndex=idx;
  document.getElementById('entradaData').value=e.data||hojeISO();
  document.getElementById('entradaProduto').value=e.produto||'';
  updateEntradaRules();
  document.getElementById('entradaVariacao').value=e.variacao||'';
  document.getElementById('entradaCA').value=(e.ca==='N/A'?'':e.ca)||'';
  document.getElementById('entradaQuantidade').value=e.quantidade||1;
  document.getElementById('entradaFornecedor').value=e.fornecedor||'';
  document.getElementById('entradaObservacao').value=e.observacao||'';

  document.getElementById('entradaSalvarBtn').textContent='Salvar alteração';
  document.getElementById('entradaLimparBtn').textContent='Cancelar edição';
  document.getElementById('entradaData').scrollIntoView({behavior:'smooth',block:'center'});
};

function clearEntradaForm(){
  editingEntradaIndex=null;
  document.getElementById('entradaSalvarBtn').textContent='Registrar entrada';
  document.getElementById('entradaLimparBtn').textContent='Limpar';
  document.getElementById('entradaData').value=hojeISO();
  document.getElementById('entradaProduto').value='';
  document.getElementById('entradaVariacao').value='';
  document.getElementById('entradaCA').value='';
  document.getElementById('entradaQuantidade').value='1';
  document.getElementById('entradaFornecedor').value='';
  document.getElementById('entradaObservacao').value='';
  updateEntradaRules();
}

function renderEntradas(){
  const q=document.getElementById('entradaSearch').value.trim().toLowerCase();
  const hoje=hojeISO();

  let rows=entradas.map((e,idx)=>({...e,_idx:idx}));

  if(q){
    rows=rows.filter(e=>{
      const dataBR=formatDateBR(e.data).toLowerCase();
      const hay=[dataBR,e.data,e.produto,e.variacao,e.ca,e.fornecedor,e.observacao]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }else{
    rows=rows.filter(e=>e.data===hoje);
  }

  rows.sort((a,b)=>(b.data||'').localeCompare(a.data||'') || b._idx-a._idx);

  document.getElementById('entradaBody').innerHTML=rows.length ? rows.map(e=>`
    <tr>
      <td>${formatDateBR(e.data)}</td>
      <td><b>${e.produto}</b></td>
      <td>${e.variacao||'—'}</td>
      <td>${e.ca||'N/A'}</td>
      <td>${e.quantidade}</td>
      <td>${e.fornecedor||'—'}</td>
      <td>
        <div class="actions">
          <button class="icon-btn" onclick="editEntrada(${e._idx})">Editar</button>
          <button class="icon-btn" onclick="deleteEntrada(${e._idx})">Excluir</button>
        </div>
      </td>
    </tr>`).join('') :
    `<tr><td colspan="7" class="empty">${
      q ? 'Nenhuma entrada encontrada para esta pesquisa.' : 'Nenhuma entrada registrada hoje.'
    }</td></tr>`;
}

window.deleteEntrada=async (idx)=>{
  const registro=entradas[idx];
  if(!registro) return;

  if(hasSaidaForEntrada(registro)){
    alert('Exclusão bloqueada. Este Produto + Variação + CA já possui saída registrada.');
    return;
  }

  if(!confirm('Excluir esta entrada?')) return;

  try{
    const {error}=await supabaseClient
      .from('epi_entradas')
      .delete()
      .eq('id',registro.id);

    if(error) throw error;

    await carregarEntradasSupabase();
  }catch(err){
    console.error(err);
    alert('Não foi possível excluir a entrada no Supabase: '+(err.message||err));
  }
};

document.getElementById('entradaProduto').addEventListener('change',updateEntradaRules);
document.getElementById('entradaSearch').addEventListener('input',renderEntradas);
document.getElementById('entradaLimparBtn').onclick=clearEntradaForm;

document.getElementById('entradaSalvarBtn').onclick=async ()=>{
  const data=document.getElementById('entradaData').value;
  const produto=document.getElementById('entradaProduto').value;
  const variacao=document.getElementById('entradaVariacao').value.trim();
  let ca=document.getElementById('entradaCA').value.trim();
  const quantidade=Number(document.getElementById('entradaQuantidade').value);
  const fornecedor=document.getElementById('entradaFornecedor').value.trim();
  const observacao=document.getElementById('entradaObservacao').value.trim();

  if(!data) return alert('Informe a data da entrada.');
  if(!produto) return alert('Selecione o produto.');
  if(!quantidade || quantidade<1) return alert('Informe uma quantidade válida.');

  const meta=itemByName(produto);
  const temVariacao=(meta.possuiVariacao||'').toUpperCase()==='SIM';
  const isEpi=(meta.categoria||'').toUpperCase()==='EPI';

  if(temVariacao && !variacao) return alert('Este item exige variação/tamanho.');
  if(isEpi && !ca) return alert('Informe o CA deste EPI.');
  if(!isEpi && !ca) ca='N/A';

  try{
    await carregarReferenciasSupabase();

    const itemId=supabaseItensPorNome.get(normKey(produto));
    if(!itemId){
      return alert(`O item "${produto}" não foi encontrado em epi_itens no Supabase.`);
    }

    const payload={
      empresa_id:supabaseEmpresaId,
      item_id:itemId,
      data_entrada:data,
      variacao:temVariacao?variacao:'',
      ca,
      quantidade,
      fornecedor:fornecedor||null,
      observacao:observacao||null
    };

    if(editingEntradaIndex!==null){
      const original=entradas[editingEntradaIndex];
      if(!original) return alert('Entrada original não encontrada.');

      if(hasSaidaForEntrada(original)){
        alert('Edição bloqueada. Este lote passou a possuir saída registrada.');
        clearEntradaForm();
        return;
      }

      const {error}=await supabaseClient
        .from('epi_entradas')
        .update(payload)
        .eq('id',original.id);

      if(error) throw error;
    }else{
      const {error}=await supabaseClient
        .from('epi_entradas')
        .insert(payload);

      if(error) throw error;
    }

    clearEntradaForm();
    await carregarEntradasSupabase();

  }catch(err){
    console.error('Erro ao salvar entrada no Supabase:',err);
    alert('Não foi possível salvar a entrada no Supabase: '+(err.message||err));
  }
};



function stockRows(){
  const map=new Map();

  entradas.forEach((e,idx)=>{
    const key=[normKey(e.produto),normKey(e.variacao),normKey(e.ca)].join('|');
    if(!map.has(key)){
      map.set(key,{
        produto:e.produto,
        variacao:e.variacao||'',
        ca:e.ca||'N/A',
        entradas:0,
        saidas:0,
        primeiraEntrada:e.data||'',
        primeiraIndex:idx
      });
    }
    const row=map.get(key);
    row.entradas+=Number(e.quantidade)||0;
    if((e.data||'') < (row.primeiraEntrada||'9999-99-99')){
      row.primeiraEntrada=e.data||'';
      row.primeiraIndex=idx;
    }
  });

  saidas.forEach(s=>{
    const key=[normKey(s.produto),normKey(s.variacao),normKey(s.ca)].join('|');
    if(map.has(key)){
      map.get(key).saidas+=Number(s.quantidade)||0;
    }
  });

  return [...map.values()].map(r=>({...r,saldo:r.entradas-r.saidas}));
}

function stockFor(produto,variacao=''){
  return stockRows().filter(r=>
    normKey(r.produto)===normKey(produto) &&
    normKey(r.variacao)===normKey(variacao) &&
    r.saldo>0
  ).sort((a,b)=>
    (a.primeiraEntrada||'').localeCompare(b.primeiraEntrada||'') ||
    a.primeiraIndex-b.primeiraIndex
  );
}


function renderEstoque(){
  const q=document.getElementById('estoqueSearch').value.trim().toLowerCase();
  const filtro=document.getElementById('estoqueFilter').value;

  const all=stockRows().sort((a,b)=>
    a.produto.localeCompare(b.produto,'pt-BR') ||
    String(a.variacao||'').localeCompare(String(b.variacao||''),'pt-BR') ||
    String(a.ca||'').localeCompare(String(b.ca||''),'pt-BR')
  );

  const unidades=all.reduce((s,r)=>s+Math.max(0,Number(r.saldo)||0),0);
  const positivas=all.filter(r=>r.saldo>0).length;
  const zeradas=all.filter(r=>r.saldo<=0).length;

  document.getElementById('estoqueUnidades').textContent=unidades;
  document.getElementById('estoquePositivas').textContent=positivas;
  document.getElementById('estoqueZeradas').textContent=zeradas;

  let rows=all.filter(r=>{
    if(filtro==='saldo' && r.saldo<=0) return false;
    if(filtro==='zerados' && r.saldo>0) return false;

    if(!q) return true;
    return [r.produto,r.variacao,r.ca].join(' ').toLowerCase().includes(q);
  });

  document.getElementById('estoqueBody').innerHTML=rows.length ? rows.map(r=>{
    const cls=r.saldo<=0 ? 'stock-zero' : (r.saldo<=2 ? 'stock-low' : 'stock-ok');
    return `<tr class="${cls}">
      <td><button class="link-like" onclick="openHistoricoItem('${r.produto.replace(/'/g,"\\'")}','${String(r.variacao||'').replace(/'/g,"\\'")}','${String(r.ca||'').replace(/'/g,"\\'")}')"><b>${r.produto}</b></button></td>
      <td>${r.variacao||'—'}</td>
      <td>${r.ca||'N/A'}</td>
      <td>${r.entradas}</td>
      <td>${r.saidas}</td>
      <td><b>${r.saldo}</b></td>
    </tr>`;
  }).join('') :
  `<tr><td colspan="6" class="empty">Nenhum item encontrado para este filtro.</td></tr>`;
}

document.getElementById('estoqueSearch').addEventListener('input',renderEstoque);
document.getElementById('estoqueFilter').addEventListener('change',renderEstoque);
document.getElementById('estoquePrintBtn').onclick=()=>{
  const agora=new Date();
  const data=agora.toLocaleDateString('pt-BR');
  const hora=agora.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  document.getElementById('printEmission').innerHTML=`<b>Emissão:</b> ${data} às ${hora}`;

  const unidades=document.getElementById('estoqueUnidades').textContent;
  const positivas=document.getElementById('estoquePositivas').textContent;
  const zeradas=document.getElementById('estoqueZeradas').textContent;
  const filtro=document.getElementById('estoqueFilter').selectedOptions[0].textContent;

  document.getElementById('printSummary').innerHTML=
    `${unidades} unidades em estoque &nbsp; | &nbsp; ${positivas} itens/lotes com saldo &nbsp; | &nbsp; ${zeradas} zerados`+
    ` &nbsp; | &nbsp; <span style="font-weight:400">Filtro: ${filtro}</span>`;

  window.print();
};



function historicoRows(){
  const mov=[];
  entradas.forEach((e,idx)=>mov.push({
    tipo:'ENTRADA',data:e.data||'',produto:e.produto||'',variacao:e.variacao||'',
    ca:e.ca||'N/A',quantidade:Number(e.quantidade)||0,pessoa:e.fornecedor||'—',
    detalhe:e.observacao||'',ordem:idx
  }));
  saidas.forEach((s,idx)=>mov.push({
    tipo:'SAÍDA',data:s.data||'',produto:s.produto||'',variacao:s.variacao||'',
    ca:s.ca||'N/A',quantidade:Number(s.quantidade)||0,pessoa:s.colaborador||'—',
    detalhe:[s.motivo,s.origem].filter(Boolean).join(' · '),ordem:100000+idx
  }));
  return mov.sort((a,b)=>(b.data||'').localeCompare(a.data||'') || b.ordem-a.ordem);
}

function populateHistoricoProdutos(){
  const sel=document.getElementById('historicoProduto');
  const atual=sel.value;
  const nomes=uniq([...entradas.map(e=>e.produto), ...saidas.map(s=>s.produto)]);
  sel.innerHTML='<option value="">Todos</option>'+nomes.map(n=>`<option value="${n}">${n}</option>`).join('');
  if(nomes.includes(atual)) sel.value=atual;
}

function renderHistorico(){
  const q=document.getElementById('historicoSearch').value.trim().toLowerCase();
  const tipo=document.getElementById('historicoTipo').value;
  const produto=document.getElementById('historicoProduto').value;

  let rows=historicoRows().filter(r=>{
    if(tipo && r.tipo!==tipo) return false;
    if(produto && r.produto!==produto) return false;
    if(!q) return true;
    return [formatDateBR(r.data),r.data,r.tipo,r.produto,r.variacao,r.ca,r.pessoa,r.detalhe]
      .join(' ').toLowerCase().includes(q);
  });

  const qtdEnt=rows.filter(r=>r.tipo==='ENTRADA').reduce((s,r)=>s+r.quantidade,0);
  const qtdSai=rows.filter(r=>r.tipo==='SAÍDA').reduce((s,r)=>s+r.quantidade,0);
  document.getElementById('historicoResumo').innerHTML=
    `Movimentos exibidos: <b>${rows.length}</b> · Entradas: <b>${qtdEnt}</b> · Saídas: <b>${qtdSai}</b> · Saldo no recorte: <b>${qtdEnt-qtdSai}</b>`;

  document.getElementById('historicoBody').innerHTML=rows.length ? rows.map(r=>`
    <tr>
      <td>${formatDateBR(r.data)}</td>
      <td><span class="badge ${r.tipo==='ENTRADA'?'badge-uniforme':'badge-epi'}">${r.tipo}</span></td>
      <td><b>${r.produto}</b></td>
      <td>${r.variacao||'—'}</td>
      <td>${r.ca||'N/A'}</td>
      <td>${r.tipo==='ENTRADA'?'+':'-'}${r.quantidade}</td>
      <td>${r.pessoa}</td>
      <td>${r.detalhe||'—'}</td>
    </tr>`).join('') :
    `<tr><td colspan="8" class="empty">Nenhuma movimentação encontrada.</td></tr>`;
}

window.openHistoricoItem=(produto,variacao,ca)=>{
  document.getElementById('historicoProduto').value=produto;
  document.getElementById('historicoTipo').value='';
  document.getElementById('historicoSearch').value=[variacao,ca].filter(v=>v && v!=='N/A').join(' ');
  renderHistorico();
  openPage('historico');
};

document.getElementById('historicoSearch').addEventListener('input',renderHistorico);
document.getElementById('historicoTipo').addEventListener('change',renderHistorico);
document.getElementById('historicoProduto').addEventListener('change',renderHistorico);
document.getElementById('historicoLimparBtn').onclick=()=>{
  document.getElementById('historicoSearch').value='';
  document.getElementById('historicoTipo').value='';
  document.getElementById('historicoProduto').value='';
  renderHistorico();
};



function populateAdmissaoColaboradores(){
  const sel=document.getElementById('admissaoColaborador');
  const atual=sel.value;
  sel.innerHTML='<option value="">Selecione...</option>'+
    collaborators.slice().sort((a,b)=>a.nome.localeCompare(b.nome,'pt-BR'))
      .map(c=>`<option value="${c.nome}">${c.nome}</option>`).join('');
  if(collaborators.some(c=>c.nome===atual)) sel.value=atual;
}

function admissaoItemOptions(produto,variacao=''){
  return stockFor(produto,variacao);
}

function renderAdmissao(){
  const nome=document.getElementById('admissaoColaborador').value;
  const body=document.getElementById('admissaoBody');
  const info=document.getElementById('admissaoInfo');

  if(!nome){
    info.innerHTML='Selecione um colaborador para carregar automaticamente a matriz do cargo.';
    body.innerHTML='<tr><td colspan="7" class="empty">Nenhum colaborador selecionado.</td></tr>';
    return;
  }

  const colab=collaborators.find(c=>c.nome===nome);
  if(!colab){
    body.innerHTML='<tr><td colspan="7" class="empty">Colaborador não encontrado.</td></tr>';
    return;
  }

  const itensCargo=matrix.filter(m=>m.cargo===colab.cargo);
  info.innerHTML=`<b>${colab.nome}</b> · Cargo: <b>${colab.cargo}</b> · Admissão: <b>${formatDateBR(colab.admissao)}</b>`;

  if(!itensCargo.length){
    body.innerHTML='<tr><td colspan="7" class="empty">Este cargo não possui itens vinculados na matriz.</td></tr>';
    return;
  }

  body.innerHTML=itensCargo.map((m,i)=>{
    const meta=itemByName(m.item);
    const temVar=(meta.possuiVariacao||'').toUpperCase()==='SIM';
    const disponiveis=stockRows().filter(r=>normKey(r.produto)===normKey(m.item) && r.saldo>0);
    const vars=uniq(disponiveis.map(r=>r.variacao).filter(Boolean));
    const saldoTotal=disponiveis.reduce((s,r)=>s+r.saldo,0);
    const ok=saldoTotal>=Number(m.quantidade||1);

    return `<tr data-adm-row="${i}" data-produto="${m.item.replace(/"/g,'&quot;')}" data-qtd="${m.quantidade||1}">
      <td><input type="checkbox" class="adm-check" ${ok?'checked':''}></td>
      <td><b>${m.item}</b></td>
      <td>${m.quantidade||1}</td>
      <td>${temVar
        ? `<select class="adm-var"><option value="">Selecione...</option>${vars.map(v=>`<option value="${v}">${v}</option>`).join('')}</select>`
        : '—'}</td>
      <td><select class="adm-ca"><option value="">${temVar?'Selecione a variação':'Carregando...'}</option></select></td>
      <td class="adm-saldo">${saldoTotal}</td>
      <td>${ok?'<b>Disponível</b>':'<b>Estoque insuficiente</b>'}</td>
    </tr>`;
  }).join('');

  syncAdmissaoSelecionarTodos();

  body.querySelectorAll('tr[data-adm-row]').forEach(tr=>{
    const produto=tr.dataset.produto;
    const meta=itemByName(produto);
    const temVar=(meta.possuiVariacao||'').toUpperCase()==='SIM';
    const varSel=tr.querySelector('.adm-var');
    const caSel=tr.querySelector('.adm-ca');
    const saldoCell=tr.querySelector('.adm-saldo');

    const refresh=()=>{
      const variacao=temVar ? varSel.value : '';
      const lotes=stockFor(produto,variacao);
      caSel.innerHTML=lotes.length
        ? lotes.map((r,i)=>`<option value="${r.ca}">${r.ca} · saldo ${r.saldo}${i===0?' · mais antigo':''}</option>`).join('')
        : '<option value="">SEM ESTOQUE</option>';
      saldoCell.textContent=lotes.reduce((s,r)=>s+r.saldo,0);
    };

    if(varSel) varSel.addEventListener('change',refresh);
    if(!temVar) refresh();
  });
}


function syncAdmissaoSelecionarTodos(){
  const master=document.getElementById('admissaoSelecionarTodos');
  const checks=[...document.querySelectorAll('#admissaoBody .adm-check')];
  if(!checks.length){
    master.checked=false;
    master.indeterminate=false;
    return;
  }
  const marcados=checks.filter(c=>c.checked).length;
  master.checked=marcados===checks.length;
  master.indeterminate=marcados>0 && marcados<checks.length;
}

document.getElementById('admissaoSelecionarTodos').addEventListener('change',function(){
  document.querySelectorAll('#admissaoBody .adm-check').forEach(c=>c.checked=this.checked);
  syncAdmissaoSelecionarTodos();
});

document.getElementById('admissaoBody').addEventListener('change',e=>{
  if(e.target.classList.contains('adm-check')) syncAdmissaoSelecionarTodos();
});

document.getElementById('admissaoColaborador').addEventListener('change',renderAdmissao);
document.getElementById('admissaoLimparBtn').onclick=()=>{
  document.getElementById('admissaoColaborador').value='';
  document.getElementById('admissaoData').value=hojeISO();
  renderAdmissao();
};

document.getElementById('admissaoConfirmarBtn').onclick=async ()=>{
  const colaborador=document.getElementById('admissaoColaborador').value;
  const data=document.getElementById('admissaoData').value;
  if(!colaborador)return alert('Selecione o colaborador.');
  if(!data)return alert('Informe a data da entrega.');
  const selecionados=[...document.querySelectorAll('#admissaoBody tr[data-adm-row]')].filter(tr=>tr.querySelector('.adm-check')?.checked);
  if(!selecionados.length)return alert('Nenhum item foi selecionado para entrega.');
  const pendentes=[],novos=[];
  for(const tr of selecionados){
    const produto=tr.dataset.produto,quantidade=Number(tr.dataset.qtd)||1,meta=itemByName(produto);
    const temVar=(meta.possuiVariacao||'').toUpperCase()==='SIM';
    const variacao=temVar?(tr.querySelector('.adm-var')?.value||''):'';
    const ca=tr.querySelector('.adm-ca')?.value||'';
    if(temVar&&!variacao){pendentes.push(`${produto}: informe a variação`);continue;}
    if(!ca){pendentes.push(`${produto}: sem CA/estoque selecionado`);continue;}
    const lote=stockFor(produto,variacao).find(r=>normKey(r.ca)===normKey(ca));
    if(!lote||lote.saldo<quantidade){pendentes.push(`${produto}: saldo insuficiente no CA ${ca}`);continue;}
    novos.push({produto,variacao,ca,quantidade});
  }
  if(pendentes.length)return alert('Não foi possível concluir:\n\n'+pendentes.join('\n'));
  try{
    await carregarReferenciasSupabase();await carregarColaboradoresSupabase();
    const colab=supabaseColabsPorNome.get(normKey(colaborador));
    if(!colab)throw new Error(`Colaborador "${colaborador}" não encontrado no Supabase.`);
    const payload=novos.map(n=>{
      const itemId=supabaseItensPorNome.get(normKey(n.produto));
      if(!itemId)throw new Error(`Item "${n.produto}" não encontrado no Supabase.`);
      return {empresa_id:supabaseEmpresaId,colaborador_id:colab.id,item_id:itemId,data_saida:data,
        variacao:n.variacao,ca:n.ca,quantidade:n.quantidade,motivo:'ENTREGA INICIAL',
        origem:'CARGA ADMISSÃO',observacao:null};
    });
    const {error}=await supabaseClient.from('epi_saidas').insert(payload);
    if(error)throw error;
    await carregarSaidasSupabase();
    alert(`Carga inicial registrada: ${payload.length} item(ns).`);
  }catch(err){console.error(err);alert('Não foi possível concluir a carga inicial: '+(err.message||err));}
};


function epiSaidasDoColaborador(nome){
  return saidas.filter(s=>{
    if(s.colaborador!==nome) return false;
    const meta=itemByName(s.produto);
    return (meta.categoria||'').toUpperCase()==='EPI';
  }).sort((a,b)=>(a.data||'').localeCompare(b.data||''));
}

function populateFichaColaboradores(){
  const sel=document.getElementById('fichaColaborador');
  const atual=sel.value;
  const nomes=uniq(saidas
    .filter(s=>(itemByName(s.produto).categoria||'').toUpperCase()==='EPI')
    .map(s=>s.colaborador));
  sel.innerHTML='<option value="">Selecione...</option>'+
    nomes.map(n=>`<option value="${n}">${n}</option>`).join('');
  if(nomes.includes(atual)) sel.value=atual;
}

function renderFichaEntregas(){
  const nome=document.getElementById('fichaColaborador').value;
  const body=document.getElementById('fichaBody');
  const info=document.getElementById('fichaInfo');

  if(!nome){
    info.innerHTML='Selecione um colaborador para visualizar os EPIs entregues.';
    body.innerHTML='<tr><td colspan="6" class="empty">Nenhum colaborador selecionado.</td></tr>';
    return;
  }

  const colab=collaborators.find(c=>c.nome===nome);
  const rows=epiSaidasDoColaborador(nome);

  info.innerHTML=`<b>${nome}</b>${colab?` · Cargo: <b>${colab.cargo}</b>`:''} · Entregas de EPI registradas: <b>${rows.length}</b>`;

  body.innerHTML=rows.length ? rows.map(s=>`
    <tr>
      <td>${formatDateBR(s.data)}</td>
      <td><b>${s.produto}</b></td>
      <td>${s.variacao||'—'}</td>
      <td>${s.ca||'N/A'}</td>
      <td>${s.quantidade}</td>
      <td>${s.motivo||'—'}</td>
    </tr>`).join('') :
    '<tr><td colspan="6" class="empty">Não há entregas de EPI registradas para este colaborador.</td></tr>';
}



const CAPA_ARTE = 'assets/capa.png';
const FICHA_ARTE = 'assets/ficha-epi.png';
const COLETIVA_ARTE = 'assets/ficha-coletiva.png';

function fichaCapa(colab){
  const cliente=(document.getElementById('clientName').value.trim()||'—').toUpperCase();
  return `
  <div class="doc-sheet art-page art-cover">
    <img class="art-bg" src="${CAPA_ARTE}" alt="">
    <div class="art-white art-cover-farm-mask"></div>
    <div class="art-farm-name">${cliente}</div>

    <div class="cover-field cover-name">${colab.nome||''}</div>
    <div class="cover-field cover-role">${colab.cargo||''}</div>
    <div class="cover-field cover-admission">${formatDateArte(colab.admissao)}</div>
  </div>`;
}

function formatDateArte(value){
  return formatDateBR(value) || '';
}

function motivoCodigo(motivo){
  const m=normKey(motivo||'');
  if(m.includes('ADMIS') || m.includes('ENTREGA INICIAL')) return 'A';
  if(m.includes('SUBSTIT')) return 'S';
  if(m.includes('PERDA')) return 'P';
  if(m.includes('DOLO')) return 'D';
  return motivo||'—';
}

function buildRows(rows, coletiva){
  const totalLinhas = coletiva ? 34 : 26;
  const preenchidas=rows.slice(0,totalLinhas);
  const vazias=Math.max(0,totalLinhas-preenchidas.length);

  const body=preenchidas.map(s=>`<tr>
    <td>${formatDateBR(s.data)}</td>
    <td>${s.quantidade}</td>
    ${coletiva?`<td>${s.produto}${s.variacao?` · ${s.variacao}`:''}</td>`:''}
    <td>${s.ca||'N/A'}</td>
    <td>${motivoCodigo(s.motivo)}</td>
    <td></td>
  </tr>`).join('');

  const blank=Array.from({length:vazias},()=>`<tr>
    <td></td><td></td>${coletiva?'<td></td>':''}<td></td><td></td><td></td>
  </tr>`).join('');

  return body+blank;
}

function fichaEpiIndividual(colab,produto,rows){
  const cliente=(document.getElementById('clientName').value.trim()||'—').toUpperCase();
  const caRef=rows.length ? (rows[rows.length-1].ca||'N/A') : 'N/A';

  // A arte original já possui 11 linhas. Não desenhamos bordas nem linhas novas.
  // Apenas posicionamos os registros existentes sobre as linhas da imagem.
  const registros=rows.slice(0,11).map((s,i)=>`
    <div class="individual-art-row" style="--row:${i}">
      <div class="art-date">${formatDateArte(s.data)}</div>
      <span>${Number(s.quantidade) > 0 ? Number(s.quantidade) : 1}</span>
      <span>${s.ca||'N/A'}</span>
      <span>${motivoCodigo(s.motivo)}</span>
      <span></span>
    </div>`).join('');

  return `
  <div class="doc-sheet art-page art-form individual-form">
    <img class="art-bg" src="${FICHA_ARTE}" alt="">
    <div class="art-white art-form-farm-mask"></div>
    <div class="art-farm-name art-form-farm">${cliente}</div>

    <div class="form-field form-product">${produto}</div>
    <div class="form-field form-ca-ref">${caRef}</div>

    <div class="individual-art-records">${registros}</div>
  </div>`;
}

function fichaEpiColetiva(colab,rows){
  const cliente=(document.getElementById('clientName').value.trim()||'—').toUpperCase();

  // A arte coletiva já possui a tabela completa. Apenas posicionamos os registros.
  const registros=rows.slice(0,34).map((s,i)=>`
    <div class="collective-art-row" style="--row:${i}">
      <div class="art-date">${formatDateArte(s.data)}</div>
      <span>${Number(s.quantidade) > 0 ? Number(s.quantidade) : 1}</span>
      <span>${s.ca||'N/A'}</span>
      <span>${s.produto}${s.variacao?` · ${s.variacao}`:''}</span>
      <span>${motivoCodigo(s.motivo)}</span>
      <span></span>
    </div>`).join('');

  return `
  <div class="doc-sheet art-page art-form collective-form">
    <img class="art-bg" src="${COLETIVA_ARTE}" alt="">
    <div class="art-white collective-farm-mask"></div>
    <div class="art-farm-name collective-farm-name">${cliente}</div>
    <div class="collective-art-records">${registros}</div>
  </div>`;
}

function imprimirDocumentos(html){
  const area=document.getElementById('printDocArea');
  area.innerHTML=html;
  document.body.classList.add('printing-docs');
  setTimeout(()=>{
    window.print();
    setTimeout(()=>document.body.classList.remove('printing-docs'),200);
  },100);
}

function gerarFichaColetiva(){
  const nome=document.getElementById('fichaColaborador').value;
  if(!nome) return alert('Selecione o colaborador.');
  const colab=collaborators.find(c=>c.nome===nome);
  const rows=epiSaidasDoColaborador(nome);
  if(!colab || !rows.length) return alert('Não há entregas de EPI registradas para este colaborador.');

  const html=fichaCapa(colab)+fichaEpiColetiva(colab,rows);
  document.getElementById('fichaPreview').innerHTML=html;
  imprimirDocumentos(html);
}

function gerarFichasIndividuais(){
  const nome=document.getElementById('fichaColaborador').value;
  if(!nome) return alert('Selecione o colaborador.');
  const colab=collaborators.find(c=>c.nome===nome);
  const rows=epiSaidasDoColaborador(nome);
  if(!colab || !rows.length) return alert('Não há entregas de EPI registradas para este colaborador.');

  const produtos=uniq(rows.map(r=>r.produto));
  const paginas=produtos.map(produto=>
    fichaEpiIndividual(colab,produto,rows.filter(r=>r.produto===produto))
  ).join('');

  const html=fichaCapa(colab)+paginas;
  document.getElementById('fichaPreview').innerHTML=html;
  imprimirDocumentos(html);
}

document.getElementById('fichaColaborador').addEventListener('change',renderFichaEntregas);
document.getElementById('fichaColetivaBtn').onclick=gerarFichaColetiva;
document.getElementById('fichaIndividualBtn').onclick=gerarFichasIndividuais;



const UNIFORMES_ARTE = 'assets/uniformes-outros.png';

function saidasOutrosDoColaborador(nome){
  return saidas.filter(s=>{
    if(s.colaborador!==nome) return false;
    const categoria=normKey(itemByName(s.produto).categoria||'');
    return categoria!=='EPI';
  }).sort((a,b)=>(a.data||'').localeCompare(b.data||''));
}

function populateOutrosFichaColaboradores(){
  const sel=document.getElementById('outrosFichaColaborador');
  if(!sel) return;

  const atual=sel.value;
  const nomes=uniq(saidas
    .filter(s=>normKey(itemByName(s.produto).categoria||'')!=='EPI')
    .map(s=>s.colaborador));

  sel.innerHTML='<option value="">Selecione...</option>'+
    nomes.map(n=>`<option value="${n}">${n}</option>`).join('');

  if(nomes.includes(atual)) sel.value=atual;
}

function renderOutrosFichaEntregas(){
  const sel=document.getElementById('outrosFichaColaborador');
  const body=document.getElementById('outrosFichaBody');
  const info=document.getElementById('outrosFichaInfo');
  if(!sel || !body || !info) return;

  const nome=sel.value;

  if(!nome){
    info.innerHTML='Selecione um colaborador para visualizar uniformes e outros itens entregues.';
    body.innerHTML='<tr><td colspan="5" class="empty">Nenhum colaborador selecionado.</td></tr>';
    return;
  }

  const colab=collaborators.find(c=>c.nome===nome);
  const rows=saidasOutrosDoColaborador(nome);

  info.innerHTML=`<b>${nome}</b>${colab?` · Cargo: <b>${colab.cargo}</b>`:''} · Registros: <b>${rows.length}</b>`;

  body.innerHTML=rows.length ? rows.map(s=>`
    <tr>
      <td>${formatDateBR(s.data)}</td>
      <td><b>${s.produto}</b></td>
      <td>${s.variacao||'—'}</td>
      <td>${s.quantidade}</td>
      <td>${s.motivo||'—'}</td>
    </tr>`).join('') :
    '<tr><td colspan="5" class="empty">Não há uniformes ou outros itens entregues para este colaborador.</td></tr>';
}

function fichaUniformesOutrosColetiva(colab,rows){
  const cliente=(document.getElementById('clientName').value.trim()||'—').toUpperCase();

  /* Sempre cria 15 linhas reais.
     As linhas sem registro continuam existindo e desenham a grade. */
  const registros=Array.from({length:15},(_,i)=>{
    const s=rows[i]||null;

    return `
      <div class="uniform-new-row" style="--row:${i}">
        <div class="uniform-new-date">${s?formatDateBR(s.data):''}</div>
        <div class="uniform-new-qtd">${s?(Number(s.quantidade)>0?Number(s.quantidade):1):''}</div>
        <div class="uniform-new-item">${s?(s.produto||''):''}</div>
        <div class="uniform-new-var">${s?(s.variacao||''):''}</div>
        <div class="uniform-new-motivo">${s?motivoCodigo(s.motivo):''}</div>
        <div class="uniform-new-sign"></div>
      </div>`;
  }).join('');

  return `
    <div class="doc-sheet uniform-art-page">
      <img class="uniform-art-bg" src="${UNIFORMES_ARTE}" alt="">
      <div class="uniform-subtitle-mask"></div>

      <div class="uniform-worker-name">${colab.nome||''}</div>
      <div class="uniform-worker-role">${colab.cargo||''}</div>
      <div class="uniform-worker-admission">${formatDateBR(colab.admissao)}</div>

      <div class="uniform-company-mask"></div>
      <div class="uniform-company-name">${cliente}</div>

      <div class="uniform-observation"></div>

      <div class="uniform-table-mask"></div>

      <div class="uniform-new-table">
        <div class="uniform-new-head">
          <div>Data</div>
          <div>Qtd.</div>
          <div>Item</div>
          <div>Variação /<br>Tamanho</div>
          <div>Motivo</div>
          <div>Assinatura do Colaborador</div>
        </div>

        <div class="uniform-new-records">
          ${registros}
        </div>
      </div>
    </div>`;
}

function gerarFichaUniformesOutros(){
  const nome=document.getElementById('outrosFichaColaborador').value;
  if(!nome) return alert('Selecione o colaborador.');

  const colab=collaborators.find(c=>c.nome===nome);
  const rows=saidasOutrosDoColaborador(nome);

  if(!colab || !rows.length){
    return alert('Não há uniformes ou outros itens entregues para este colaborador.');
  }

  const html=fichaUniformesOutrosColetiva(colab,rows);

  document.getElementById('outrosFichaPreview').innerHTML=html;
  imprimirDocumentos(html);
}

document.getElementById('outrosFichaColaborador')?.addEventListener('change',renderOutrosFichaEntregas);
document.getElementById('outrosFichaGerarBtn')?.addEventListener('click',gerarFichaUniformesOutros);


function populateSaidaColaboradores(){
  const sel=document.getElementById('saidaColaborador');
  const atual=sel.value;
  sel.innerHTML='<option value="">Selecione...</option>'+
    collaborators.slice().sort((a,b)=>a.nome.localeCompare(b.nome,'pt-BR'))
      .map(c=>`<option value="${c.nome}">${c.nome}</option>`).join('');
  if(collaborators.some(c=>c.nome===atual)) sel.value=atual;
}

function populateSaidaProdutos(){
  const sel=document.getElementById('saidaProduto');
  const atual=sel.value;

  const disponiveis=uniq(stockRows().filter(r=>r.saldo>0).map(r=>r.produto));
  sel.innerHTML='<option value="">Selecione...</option>'+
    disponiveis.map(nome=>`<option value="${nome}">${nome}</option>`).join('');

  if(disponiveis.includes(atual)) sel.value=atual;
  updateSaidaRules();
}

function updateSaidaRules(){
  const produto=document.getElementById('saidaProduto').value;
  const meta=itemByName(produto);
  const temVariacao=(meta.possuiVariacao||'').toUpperCase()==='SIM';
  const varField=document.getElementById('saidaVariacaoField');
  const varSel=document.getElementById('saidaVariacao');
  const caSel=document.getElementById('saidaCA');
  const info=document.getElementById('saidaInfo');

  varField.style.display=temVariacao?'grid':'none';

  if(!produto){
    varSel.innerHTML='<option value="">Selecione...</option>';
    caSel.innerHTML='<option value="">Selecione...</option>';
    info.innerHTML='Selecione um produto para consultar o estoque disponível.';
    return;
  }

  if(temVariacao){
    const vars=uniq(stockRows()
      .filter(r=>normKey(r.produto)===normKey(produto) && r.saldo>0)
      .map(r=>r.variacao)
      .filter(Boolean));

    const atual=varSel.value;
    varSel.innerHTML='<option value="">Selecione...</option>'+
      vars.map(v=>`<option value="${v}">${v}</option>`).join('');
    if(vars.includes(atual)) varSel.value=atual;
  }else{
    varSel.innerHTML='<option value=""></option>';
  }

  updateSaidaCA();
}

function updateSaidaCA(){
  const produto=document.getElementById('saidaProduto').value;
  const meta=itemByName(produto);
  const temVariacao=(meta.possuiVariacao||'').toUpperCase()==='SIM';
  const variacao=temVariacao ? document.getElementById('saidaVariacao').value : '';
  const caSel=document.getElementById('saidaCA');
  const info=document.getElementById('saidaInfo');

  if(!produto || (temVariacao && !variacao)){
    caSel.innerHTML='<option value="">Selecione...</option>';
    info.innerHTML=temVariacao
      ? 'Informe a variação/tamanho para consultar os CAs disponíveis.'
      : 'Selecione um produto.';
    return;
  }

  const lotes=stockFor(produto,variacao);
  caSel.innerHTML=lotes.length
    ? lotes.map((r,i)=>`<option value="${r.ca}">${r.ca} · saldo ${r.saldo}${i===0?' · mais antigo':''}</option>`).join('')
    : '<option value="">SEM ESTOQUE</option>';

  const saldoTotal=lotes.reduce((s,r)=>s+r.saldo,0);

  info.innerHTML=lotes.length
    ? `Saldo disponível para <b>${produto}${variacao?' · '+variacao:''}</b>: <b>${saldoTotal}</b>.<br>`+
      `CA sugerido: <b>${lotes[0].ca}</b> · saldo neste CA: <b>${lotes[0].saldo}</b> · entrada mais antiga: <b>${formatDateBR(lotes[0].primeiraEntrada)}</b>.`
    : `<b>Sem estoque disponível</b> para ${produto}${variacao?' · '+variacao:''}.`;
}

function clearSaidaForm(){
  document.getElementById('saidaData').value=hojeISO();
document.getElementById('admissaoData').value=hojeISO();
  document.getElementById('saidaColaborador').value='';
  document.getElementById('saidaProduto').value='';
  document.getElementById('saidaVariacao').innerHTML='<option value="">Selecione...</option>';
  document.getElementById('saidaCA').innerHTML='<option value="">Selecione...</option>';
  document.getElementById('saidaQuantidade').value='1';
  document.getElementById('saidaMotivo').value='ENTREGA INICIAL';
  document.getElementById('saidaOrigem').value='MANUAL';
  document.getElementById('saidaObservacao').value='';
  updateSaidaRules();
}

function renderSaidas(){
  const q=document.getElementById('saidaSearch').value.trim().toLowerCase();
  const hoje=hojeISO();

  let rows=saidas.map((s,idx)=>({...s,_idx:idx}));

  if(q){
    rows=rows.filter(s=>{
      const hay=[
        formatDateBR(s.data),s.data,s.colaborador,s.produto,s.variacao,
        s.ca,s.motivo,s.origem,s.observacao
      ].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }else{
    rows=rows.filter(s=>s.data===hoje);
  }

  rows.sort((a,b)=>(b.data||'').localeCompare(a.data||'') || b._idx-a._idx);

  document.getElementById('saidaBody').innerHTML=rows.length ? rows.map(s=>`
    <tr>
      <td>${formatDateBR(s.data)}</td>
      <td><b>${s.colaborador}</b></td>
      <td>${s.produto}</td>
      <td>${s.variacao||'—'}</td>
      <td>${s.ca||'N/A'}</td>
      <td>${s.quantidade}</td>
      <td>${s.motivo||'—'}</td>
    </tr>`).join('') :
    `<tr><td colspan="7" class="empty">${
      q ? 'Nenhuma entrega encontrada para esta pesquisa.' : 'Nenhuma entrega registrada hoje.'
    }</td></tr>`;
}

document.getElementById('saidaProduto').addEventListener('change',updateSaidaRules);
document.getElementById('saidaVariacao').addEventListener('change',updateSaidaCA);
document.getElementById('saidaSearch').addEventListener('input',renderSaidas);
document.getElementById('saidaLimparBtn').onclick=clearSaidaForm;

document.getElementById('saidaSalvarBtn').onclick=async ()=>{
  const data=document.getElementById('saidaData').value;
  const colaborador=document.getElementById('saidaColaborador').value;
  const produto=document.getElementById('saidaProduto').value;
  const meta=itemByName(produto);
  const temVariacao=(meta.possuiVariacao||'').toUpperCase()==='SIM';
  const variacao=temVariacao?document.getElementById('saidaVariacao').value:'';
  const ca=document.getElementById('saidaCA').value;
  const quantidade=Number(document.getElementById('saidaQuantidade').value);
  const motivo=document.getElementById('saidaMotivo').value;
  const origem=document.getElementById('saidaOrigem').value;
  const observacao=document.getElementById('saidaObservacao').value.trim();
  if(!data)return alert('Informe a data da entrega.');
  if(!colaborador)return alert('Selecione o colaborador.');
  if(!produto)return alert('Selecione o produto.');
  if(temVariacao&&!variacao)return alert('Selecione a variação/tamanho.');
  if(!ca)return alert('Nenhum CA disponível para esta entrega.');
  if(!quantidade||quantidade<1)return alert('Informe uma quantidade válida.');
  const lote=stockFor(produto,variacao).find(r=>normKey(r.ca)===normKey(ca));
  if(!lote||quantidade>lote.saldo)return alert(`Saldo insuficiente neste CA. Disponível: ${lote?lote.saldo:0}.`);
  try{
    await carregarReferenciasSupabase(); await carregarColaboradoresSupabase();
    const itemId=supabaseItensPorNome.get(normKey(produto));
    const colab=supabaseColabsPorNome.get(normKey(colaborador));
    if(!itemId)throw new Error(`Item "${produto}" não encontrado no Supabase.`);
    if(!colab)throw new Error(`Colaborador "${colaborador}" não encontrado no Supabase.`);
    const {error}=await supabaseClient.from('epi_saidas').insert({
      empresa_id:supabaseEmpresaId,colaborador_id:colab.id,item_id:itemId,data_saida:data,
      variacao,ca,quantidade,motivo,origem,observacao:observacao||null
    });
    if(error)throw error;
    await carregarSaidasSupabase(); clearSaidaForm();
  }catch(err){console.error(err);alert('Não foi possível registrar a saída: '+(err.message||err));}
};


let cargoMode='new';

function openCargoModal(mode) {{
  const atual=cargoSelect.value;
  cargoMode=mode;
  const modal=document.getElementById('cargoModal');
  const title=document.getElementById('cargoModalTitle');
  const label=document.getElementById('cargoNameLabel');
  const input=document.getElementById('cargoNameInput');
  const sourceField=document.getElementById('cargoSourceField');
  const source=document.getElementById('cargoSource');
  const info=document.getElementById('cargoModalInfo');

  input.value='';
  source.value=atual;
  sourceField.style.display=mode==='duplicate' ? 'grid' : 'none';

  if(mode==='new') {{
    title.textContent='Novo cargo';
    label.textContent='Nome do novo cargo';
    info.innerHTML='O novo cargo será criado vazio. Depois você adiciona apenas os itens que ele precisa receber.';
  }} else if(mode==='duplicate') {{
    title.textContent='Duplicar cargo';
    label.textContent='Nome do novo cargo';
    info.innerHTML=`Todos os itens e quantidades de <b>${atual}</b> serão copiados. Depois disso, os dois cargos serão independentes.`;
  }} else {{
    title.textContent='Renomear cargo';
    label.textContent='Novo nome';
    input.value=atual;
    info.innerHTML=`O nome será atualizado na matriz e também nos colaboradores atualmente vinculados a <b>${atual}</b>.`;
  }}
  modal.classList.add('open');
  setTimeout(()=>input.focus(),50);
}}

document.getElementById('newCargoBtn').onclick=()=>openCargoModal('new');
document.getElementById('duplicateCargoBtn').onclick=()=>openCargoModal('duplicate');
document.getElementById('renameCargoBtn').onclick=()=>openCargoModal('rename');

document.getElementById('saveCargoBtn').onclick=async ()=>{
  const nome=document.getElementById('cargoNameInput').value.trim(),atual=cargoSelect.value;
  if(!nome)return alert('Informe o nome do cargo.');
  try{
    if(cargoMode==='new'){
      const {error}=await supabaseClient.from('epi_cargos').insert({empresa_id:supabaseEmpresaId,nome,ativo:true});if(error)throw error;
    }else if(cargoMode==='duplicate'){
      const {data:novo,error}=await supabaseClient.from('epi_cargos').insert({empresa_id:supabaseEmpresaId,nome,ativo:true}).select('id').single();if(error)throw error;
      const rel=matrix.filter(x=>normKey(x.cargo)===normKey(atual));
      if(rel.length){const payload=rel.map(x=>({cargo_id:novo.id,item_id:supabaseItensPorNome.get(normKey(x.item)),quantidade_inicial:x.quantidade}));
        const {error:e2}=await supabaseClient.from('epi_cargo_itens').insert(payload);if(e2)throw e2;}
    }else if(cargoMode==='rename'){
      const id=supabaseCargosPorNome.get(normKey(atual));if(!id)throw new Error('Cargo não encontrado.');
      const {error}=await supabaseClient.from('epi_cargos').update({nome}).eq('id',id);if(error)throw error;
    }
    document.getElementById('cargoModal').classList.remove('open');await recarregarCadastrosSupabase();cargoSelect.value=nome;renderMatrix();
  }catch(e){console.error(e);alert('Erro ao salvar cargo: '+(e.message||e));}
};

document.getElementById('matrixItemSelect').addEventListener('change',updateMatrixInfo);
document.getElementById('addMatrixBtn').onclick=()=>document.getElementById('matrixModal').classList.add('open');
document.getElementById('saveMatrixItem').onclick=async ()=>{
  const cargo=cargoSelect.value,item=document.getElementById('matrixItemSelect').value,quantidade=Math.max(1,Number(document.getElementById('matrixQty').value)||1);
  try{
    const cargoId=supabaseCargosPorNome.get(normKey(cargo)),itemId=supabaseItensPorNome.get(normKey(item));
    if(!cargoId||!itemId)throw new Error('Cargo ou item não encontrado.');
    const {error}=await supabaseClient.from('epi_cargo_itens').upsert({cargo_id:cargoId,item_id:itemId,quantidade_inicial:quantidade},{onConflict:'cargo_id,item_id'});if(error)throw error;
    document.getElementById('matrixModal').classList.remove('open');await recarregarCadastrosSupabase();
  }catch(e){console.error(e);alert('Erro ao salvar matriz: '+(e.message||e));}
};


function renderColabs() {
  const q=document.getElementById('colabSearch').value.trim().toLowerCase();
  const rows=collaborators.filter(c=>!q || [c.nome,c.cpf,c.cargo].join(' ').toLowerCase().includes(q));
  document.getElementById('colabBody').innerHTML=rows.length ? rows.map(c=>`
    <tr>
      <td><b>${c.nome}</b></td><td>${c.cpf}</td><td>${c.cargo}</td>
      <td>${c.tipoCadastro||'INICIAL'}</td>
      <td>${(c.tipoCadastro||'').toUpperCase()==='ADMISSÃO' ? '<span class="badge badge-uniforme">Preparar carga inicial</span>' : '<span class="muted">Sem ação automática</span>'}</td>
    </tr>`).join('') : `<tr><td colspan="5" class="empty">Nenhum colaborador encontrado.</td></tr>`;
}

document.getElementById('newColabBtn').onclick=()=>document.getElementById('colabModal').classList.add('open');
document.getElementById('saveColab').onclick=async ()=>{
  const nome=document.getElementById('colabName').value.trim(),cpf=document.getElementById('colabCpf').value.trim(),
    cargo=document.getElementById('colabCargo').value,admissao=document.getElementById('colabDate').value,tipoCadastro=document.getElementById('colabType').value;
  if(!nome)return alert('Informe o nome do colaborador.');if(!cpf)return alert('Informe o CPF.');if(!cargo)return alert('Selecione o cargo.');if(!admissao)return alert('Informe a data de admissão.');
  try{
    const cargoId=supabaseCargosPorNome.get(normKey(cargo));if(!cargoId)throw new Error('Cargo não encontrado.');
    const {error}=await supabaseClient.from('epi_colaboradores').insert({empresa_id:supabaseEmpresaId,cargo_id:cargoId,nome,cpf,data_admissao:admissao,tipo_cadastro:tipoCadastro,ativo:true});if(error)throw error;
    document.getElementById('colabModal').classList.remove('open');await recarregarCadastrosSupabase();
  }catch(e){console.error(e);alert('Erro ao salvar colaborador: '+(e.message||e));}
};

document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.close).classList.remove('open'));

/* =========================================================
   V80 — PROGRAMAÇÃO DE TROCAS DE EPI
========================================================= */
let programacaoAtual=[];
let programacaoModalColaborador='';

function progParseISO(iso){
  const [y,m,d]=(iso||'').split('-').map(Number);
  return new Date(y,m-1,d,12,0,0,0);
}
function progISO(date){
  const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,'0'),d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function progAdicionarMeses(iso,meses){
  const d=progParseISO(iso);
  const dia=d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth()+meses);
  const ultimo=new Date(d.getFullYear(),d.getMonth()+1,0,12).getDate();
  d.setDate(Math.min(dia,ultimo));
  return progISO(d);
}
function progAjustarDiaUtil(iso){
  const d=progParseISO(iso);
  if(d.getDay()===6)d.setDate(d.getDate()+2);
  else if(d.getDay()===0)d.setDate(d.getDate()+1);
  return progISO(d);
}
function progMesesVidaUtil(txt){
  const t=(txt||'').trim().toLowerCase();
  if(!t || t.includes('uso único') || t.includes('uso unico') || t.includes('em uso')) return null;
  const m=t.match(/(\d+(?:[.,]\d+)?)\s*m[eê]s/);
  if(!m)return null;
  const n=Number(m[1].replace(',','.'));
  return Number.isFinite(n)&&n>0?n:null;
}
function progProximaTroca(data,vidaUtil){
  const meses=progMesesVidaUtil(vidaUtil);
  if(!meses)return null;
  if(Number.isInteger(meses))return progAjustarDiaUtil(progAdicionarMeses(data,meses));
  const d=progParseISO(data);
  d.setDate(d.getDate()+Math.round(meses*30.4375));
  return progAjustarDiaUtil(progISO(d));
}
function populateProgramacaoColaboradores(){
  const sel=document.getElementById('progColaborador');
  if(!sel)return;
  const atual=sel.value;
  sel.innerHTML='<option value="">Todos os colaboradores</option>'+
    collaborators.map(c=>`<option value="${c.id}">${c.nome}</option>`).join('');
  if([...sel.options].some(o=>o.value===atual))sel.value=atual;
}
function gerarProgramacaoTrocas(){
  const ate=document.getElementById('progAte').value;
  const colabId=document.getElementById('progColaborador').value;
  const hoje=hojeISO();
  if(!ate)return alert('Informe até qual data deseja projetar as trocas.');
  if(ate<hoje)return alert('A data final da projeção deve ser igual ou posterior à data atual.');

  const colabs=colabId?collaborators.filter(c=>String(c.id)===String(colabId)):collaborators.slice();
  const resultado=[];

  for(const c of colabs){
    const epiSaidas=saidas.filter(s=>s.colaborador===c.nome && (itemByName(s.produto).categoria||'').toUpperCase()==='EPI');
    const grupos=new Map();
    epiSaidas.forEach(s=>{
      const key=normKey(s.produto);
      if(!grupos.has(key))grupos.set(key,[]);
      grupos.get(key).push(s);
    });

    const linhas=[];
    for(const arr of grupos.values()){
      arr.sort((a,b)=>(b.data||'').localeCompare(a.data||''));
      const ultima=arr[0];
      const meta=itemByName(ultima.produto);
      const meses=progMesesVidaUtil(meta.vidaUtil);
      if(!meses)continue;

      let prevista=progProximaTroca(ultima.data,meta.vidaUtil);
      let guarda=0;
      while(prevista && prevista<=ate && guarda<120){
        linhas.push({
          colaborador:c.nome,cargo:c.cargo||'',admissao:c.admissao||'',
          produto:ultima.produto,ca:ultima.ca||'N/A',variacao:ultima.variacao||'',
          ultimaSaida:ultima.data,vidaUtil:meta.vidaUtil,qtd:Number(ultima.quantidade)||1,
          prevista,situacao:prevista<hoje?'ATRASADA':'PROGRAMADA'
        });
        prevista=progProximaTroca(prevista,meta.vidaUtil);
        guarda++;
      }
    }
    linhas.sort((a,b)=>a.prevista.localeCompare(b.prevista)||a.produto.localeCompare(b.produto,'pt-BR'));
    if(linhas.length)resultado.push({colaborador:c,linhas});
  }

  programacaoAtual=resultado;
  renderProgramacaoTrocas(ate);
}
function renderProgramacaoTrocas(ate){
  const box=document.getElementById('progResultado');
  const info=document.getElementById('progInfo');
  const total=programacaoAtual.reduce((n,g)=>n+g.linhas.length,0);
  info.innerHTML=`Projeção até <b>${formatDateBR(ate)}</b> · ${programacaoAtual.length} colaborador(es) · ${total} troca(s) prevista(s). <b>Estoque ainda não validado.</b>`;

  if(!programacaoAtual.length){
    box.innerHTML='<div class="prog-empty">Nenhuma troca periódica encontrada até a data informada.</div>';
    return;
  }

  const empresa=window.SUPABASE_EMPRESA_NOME_ATUAL||supabaseEmpresaNome||'';
  let html=`<div class="prog-doc-title">
    <h2 style="margin:0">PROGRAMAÇÃO DE TROCAS DE EPI</h2>
    <div style="margin-top:6px"><b>Empresa/Fazenda:</b> ${empresa} &nbsp; | &nbsp; <b>Projeção até:</b> ${formatDateBR(ate)} &nbsp; | &nbsp; <b>Emissão:</b> ${formatDateBR(hojeISO())}</div>
  </div>`;

  const resumo=new Map();

  for(const grupo of programacaoAtual){
    const c=grupo.colaborador;
    html+=`<div class="prog-colab-card" data-prog-colab="${c.id}">
      <div class="prog-colab-head">
        <div><h3>${c.nome}</h3><div class="prog-colab-meta"><b>Função:</b> ${c.cargo||'—'} &nbsp; · &nbsp; <b>Admissão:</b> ${formatDateBR(c.admissao)||'—'}</div></div>
        <div class="prog-colab-meta">${grupo.linhas.length} troca(s)</div>
      </div>
      <div class="table-wrap"><table><thead><tr>
        <th>EPI</th><th>CA</th><th>Última saída</th><th>Vida útil</th><th>Troca prevista</th><th>Qtd.</th><th>Situação</th>
      </tr></thead><tbody>`;

    grupo.linhas.forEach(l=>{
      html+=`<tr>
        <td>${l.produto}${l.variacao?`<div class="muted" style="font-size:11px">${l.variacao}</div>`:''}</td>
        <td>${l.ca}</td><td>${formatDateBR(l.ultimaSaida)}</td><td>${l.vidaUtil}</td>
        <td><b>${formatDateBR(l.prevista)}</b></td><td>${l.qtd}</td>
        <td><span class="prog-status ${l.situacao==='ATRASADA'?'prog-atrasada':'prog-programada'}">${l.situacao}</span></td>
      </tr>`;
      const rk=normKey(l.produto)+'|'+normKey(l.ca);
      if(!resumo.has(rk))resumo.set(rk,{produto:l.produto,ca:l.ca,qtd:0});
      resumo.get(rk).qtd+=l.qtd;
    });

    html+=`</tbody></table></div>
      <div class="prog-colab-foot">
        <b>Total de EPIs previstos: ${grupo.linhas.reduce((n,l)=>n+l.qtd,0)}</b>
        <button class="btn btn-primary prog-gerar-saida" type="button" data-colab-id="${c.id}">Gerar saídas deste colaborador</button>
      </div>
    </div>`;
  }

  html+=`<div class="prog-summary"><h3>Resumo para Separação</h3>
    <div class="table-wrap"><table><thead><tr><th>EPI</th><th>CA</th><th>Quantidade necessária</th></tr></thead><tbody>`;
  [...resumo.values()].sort((a,b)=>a.produto.localeCompare(b.produto,'pt-BR')).forEach(r=>{
    html+=`<tr><td>${r.produto}</td><td>${r.ca}</td><td><b>${r.qtd}</b></td></tr>`;
  });
  html+=`</tbody></table></div>
    <div class="prog-colab-foot"><span>Total de colaboradores: <b>${programacaoAtual.length}</b></span><span>Total de entregas previstas: <b>${total}</b></span></div>
  </div>
  <div class="muted" style="font-size:11px;margin:12px 2px">Programação elaborada com base na última entrega registrada e na vida útil cadastrada para cada EPI. Datas previstas em sábado ou domingo são transferidas para a segunda-feira seguinte.</div>`;

  box.innerHTML=html;
}
function abrirModalSaidasProgramadas(colabId){
  const grupo=programacaoAtual.find(g=>String(g.colaborador.id)===String(colabId));
  if(!grupo)return;
  programacaoModalColaborador=String(colabId);
  document.getElementById('progSaidaTitulo').textContent=`Gerar saídas — ${grupo.colaborador.nome}`;
  const body=document.getElementById('progSaidaBody');
  body.innerHTML=grupo.linhas.map((l,i)=>`<tr data-prog-modal-row="${i}">
    <td><input type="checkbox" class="prog-modal-check" checked></td>
    <td>${l.produto}${l.variacao?`<div class="muted" style="font-size:11px">${l.variacao}</div>`:''}</td>
    <td>${l.ca}</td><td>${l.qtd}</td>
    <td><input type="date" class="prog-modal-data" value="${hojeISO()}"></td>
    <td>TROCA PROGRAMADA</td>
  </tr>`).join('');
  document.getElementById('progSaidaAviso').innerHTML='Agora o estoque será validado. Desmarque os itens que não serão entregues e ajuste as datas se necessário.';
  document.getElementById('progSaidaModal').classList.add('open');
}
async function confirmarSaidasProgramadas(){
  const grupo=programacaoAtual.find(g=>String(g.colaborador.id)===programacaoModalColaborador);
  if(!grupo)return;
  const rows=[...document.querySelectorAll('#progSaidaBody tr[data-prog-modal-row]')];
  const escolhidas=[];
  const erros=[];

  for(const tr of rows){
    if(!tr.querySelector('.prog-modal-check')?.checked)continue;
    const idx=Number(tr.dataset.progModalRow);
    const l=grupo.linhas[idx];
    const data=tr.querySelector('.prog-modal-data')?.value;
    if(!data){erros.push(`${l.produto}: informe a data da saída`);continue;}

    const lotes=stockFor(l.produto,l.variacao).filter(r=>Number(r.saldo)>0);
    let lote=lotes.find(r=>normKey(r.ca)===normKey(l.ca));
    if(!lote)lote=lotes[0];
    if(!lote || Number(lote.saldo)<Number(l.qtd)){
      erros.push(`${l.produto}: saldo insuficiente${l.variacao?' para '+l.variacao:''}`);
      continue;
    }
    escolhidas.push({linha:l,data,ca:lote.ca});
  }
  if(erros.length){
    document.getElementById('progSaidaAviso').innerHTML='<b>Não foi possível confirmar:</b><br>'+erros.join('<br>');
    return;
  }
  if(!escolhidas.length)return alert('Nenhum item selecionado para saída.');

  try{
    await carregarReferenciasSupabase();
    const payload=escolhidas.map(x=>{
      const itemId=supabaseItensPorNome.get(normKey(x.linha.produto));
      if(!itemId)throw new Error(`Item "${x.linha.produto}" não encontrado.`);
      return {
        empresa_id:supabaseEmpresaId,
        colaborador_id:grupo.colaborador.id,
        item_id:itemId,
        data_saida:x.data,
        variacao:x.linha.variacao||'',
        ca:x.ca,
        quantidade:x.linha.qtd,
        motivo:'TROCA PROGRAMADA',
        origem:'PROGRAMAÇÃO DE TROCAS',
        observacao:`Troca prevista originalmente para ${formatDateBR(x.linha.prevista)}`
      };
    });
    const {error}=await supabaseClient.from('epi_saidas').insert(payload);
    if(error)throw error;
    document.getElementById('progSaidaModal').classList.remove('open');
    await carregarSaidasSupabase();
    gerarProgramacaoTrocas();
    alert(`${payload.length} saída(s) registrada(s) com sucesso.`);
  }catch(e){
    console.error(e);
    document.getElementById('progSaidaAviso').innerHTML='<b>Erro ao gerar saídas:</b> '+(e.message||e);
  }
}

document.getElementById('progGerarBtn').onclick=gerarProgramacaoTrocas;
document.getElementById('progImprimirBtn').onclick=()=>{
  if(!programacaoAtual.length)return alert('Gere a programação antes de imprimir.');
  document.body.classList.add('printing-programacao');
  window.print();
  setTimeout(()=>document.body.classList.remove('printing-programacao'),500);
};
document.getElementById('progResultado').addEventListener('click',e=>{
  const btn=e.target.closest('.prog-gerar-saida');
  if(btn)abrirModalSaidasProgramadas(btn.dataset.colabId);
});
document.getElementById('progSaidaFechar').onclick=()=>document.getElementById('progSaidaModal').classList.remove('open');
document.getElementById('progSaidaCancelar').onclick=()=>document.getElementById('progSaidaModal').classList.remove('open');
document.getElementById('progSaidaConfirmar').onclick=confirmarSaidasProgramadas;
document.getElementById('progAte').value=(()=>{
  const d=new Date(); d.setMonth(d.getMonth()+3); return progISO(d);
})();
populateProgramacaoColaboradores();


document.querySelectorAll('.nav-parent').forEach(btn=>btn.onclick=()=>{
  const group=btn.closest('.nav-group');
  const willOpen=!group.classList.contains('open');
  document.querySelectorAll('.nav-group').forEach(g=>g.classList.remove('open'));
  if(willOpen) group.classList.add('open');
});

const PAGE_CFG={
  matriz:['Matriz Cargo × Itens','Defina o que cada cargo precisa receber.'],
  itens:['Cadastro de Itens','Inclua e edite a base de EPIs, uniformes e outros itens.'],
  colaboradores:['Colaboradores','Cadastre e identifique admissões para preparar a carga inicial.'],
  entrada:['Entrada de Estoque','Registre o que entrou no estoque, com CA e variação quando aplicável.'],
  saida:['Entrega / Saída','Registre quem recebeu o item e dê baixa no estoque disponível.'],
  estoque:['Estoque Atual','Consulte rapidamente o saldo disponível por produto, variação e CA.']
,
  historico:['Histórico','Rastreie entradas e saídas para saber quando, quanto e para quem cada item foi entregue.']
,
  admissao:['Carga Inicial','Carregue automaticamente os itens previstos para o cargo do colaborador.']
,
  fichas:['Fichas de EPI','Gere fichas individuais por EPI ou uma ficha coletiva do colaborador.'],
  fichasOutros:['Uniformes e Outros Itens','Gere a ficha coletiva de uniformes, itens pessoais e outros itens do colaborador.'],
  programacaoTrocas:['Programação de Trocas','Projete trocas futuras de EPI e gere as saídas por colaborador.']
};

function openPage(page, updateHash=true){
  if(!PAGE_CFG[page] || !document.getElementById(page)) page='matriz';

  document.querySelectorAll('.nav-child[data-page]').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-group').forEach(g=>g.classList.remove('open'));
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));

  const btn=document.querySelector(`.nav-child[data-page="${page}"]`);
  if(btn){
    btn.classList.add('active');
    btn.closest('.nav-group').classList.add('open');
  }

  document.getElementById(page).classList.add('active');
  document.getElementById('pageTitle').textContent=PAGE_CFG[page][0];
  document.getElementById('pageSubtitle').textContent=PAGE_CFG[page][1];

  if(updateHash && location.hash!==`#${page}`) location.hash=page;
}

document.querySelectorAll('.nav button[data-page]').forEach(btn=>{
  btn.onclick=()=>openPage(btn.dataset.page);
});

window.addEventListener('hashchange',()=>{
  openPage((location.hash||'#matriz').slice(1),false);
});

cargoSelect.addEventListener('change',renderMatrix);
matrixSearch.addEventListener('input',renderMatrix);
document.getElementById('colabSearch').addEventListener('input',renderColabs);

const client=document.getElementById('clientName');
client.value='';
client.readOnly=true;
client.title='Empresa vinculada ao banco de dados';

renderCargoOptions();
populateItemSelect();
populateEntradaProdutos();
populateSaidaColaboradores();
populateAdmissaoColaboradores();
populateFichaColaboradores();
populateSaidaProdutos();
renderItemCategoryFilter();
renderMatrix();
renderItems();
renderColabs();
document.getElementById('entradaData').value=hojeISO();
document.getElementById('saidaData').value=hojeISO();
document.getElementById('admissaoData').value=hojeISO();
async function carregarEmpresasAtivasLogin(session){
  const select=document.getElementById('authEmpresa');

  select.disabled=true;
  select.innerHTML='<option value="">Carregando empresas...</option>';

  const usuarioId=session?.user?.id;
  if(!usuarioId){
    select.innerHTML='<option value="">Sessão inválida</option>';
    throw new Error('Não foi possível identificar o usuário autenticado.');
  }

  // Primeiro identifica quais empresas este usuário pode acessar.
  const {data:vinculos,error:vinculosError}=await supabaseClient
    .from('usuario_empresas')
    .select('empresa_id,papel')
    .eq('usuario_id',usuarioId)
    .eq('ativo',true);

  if(vinculosError){
    console.error(vinculosError);
    select.innerHTML='<option value="">Não foi possível carregar</option>';
    throw new Error(
      'Login realizado, mas não foi possível consultar as empresas autorizadas para este usuário.'
    );
  }

  const empresaIds=[...new Set((vinculos||[]).map(v=>v.empresa_id).filter(Boolean))];

  if(!empresaIds.length){
    select.innerHTML='<option value="">Nenhuma empresa autorizada</option>';
    throw new Error('Seu usuário não possui acesso a nenhuma empresa ativa.');
  }

  // Depois carrega somente os dados das empresas autorizadas.
  const {data:empresas,error:empresasError}=await supabaseClient
    .from('empresas')
    .select('id,nome')
    .in('id',empresaIds)
    .eq('ativo',true)
    .order('nome');

  if(empresasError){
    console.error(empresasError);
    select.innerHTML='<option value="">Não foi possível carregar</option>';
    throw new Error(
      'As permissões foram encontradas, mas não foi possível carregar os dados das empresas.'
    );
  }

  const lista=empresas||[];

  select.innerHTML=
    '<option value="">Selecione...</option>'+
    lista.map(e=>`<option value="${e.id}">${e.nome}</option>`).join('');

  select.disabled=false;

  if(!lista.length){
    throw new Error('Nenhuma empresa ativa autorizada foi encontrada.');
  }

  return lista;
}

async function prepararSelecaoEmpresa(session){
  document.getElementById('authScreen').style.display='flex';
  document.getElementById('mainApp').classList.add('auth-hidden');

  document.getElementById('authEmailField').style.display='none';
  document.getElementById('authPasswordField').style.display='none';
  document.getElementById('authEmpresaField').style.display='block';
  document.getElementById('authTrocarUsuarioBtn').style.display='block';

  const btn=document.getElementById('authLoginBtn');
  btn.textContent='Entrar na empresa';

  const errorBox=document.getElementById('authError');
  errorBox.textContent='Selecione a empresa/fazenda.';

  await carregarEmpresasAtivasLogin(session);
}

async function iniciarSistemaAutenticado(session,empresaId,empresaNome){
  if(!empresaId){
    throw new Error('Selecione a empresa/fazenda.');
  }

  document.getElementById('authError').textContent='';
  document.getElementById('authUserLabel').textContent=session?.user?.email||'';

  supabaseEmpresaId=empresaId;
  supabaseEmpresaNome=empresaNome||'Empresa';
  window.SUPABASE_EMPRESA_NOME_ATUAL=supabaseEmpresaNome;
  supabaseItensPorNome=new Map();

  const client=document.getElementById('clientName');
  if(client){
    client.value=supabaseEmpresaNome;
  }

  document.getElementById('authScreen').style.display='none';
  document.getElementById('mainApp').classList.remove('auth-hidden');

  await recarregarCadastrosSupabase();
  updateEntradaRules();
  updateSaidaRules();
  renderEntradas();
  await carregarEntradasSupabase();
  renderSaidas();
  await carregarSaidasSupabase();
  renderEstoque();
  populateHistoricoProdutos();
  renderHistorico();
  renderAdmissao();
  renderFichaEntregas();

  if(typeof populateOutrosFichaColaboradores==='function'){
    populateOutrosFichaColaboradores();
  }
  if(typeof renderOutrosFichaEntregas==='function'){
    renderOutrosFichaEntregas();
  }

  openPage((location.hash||'#matriz').slice(1),false);
}

function mostrarLogin(){
  document.getElementById('mainApp').classList.add('auth-hidden');
  document.getElementById('authScreen').style.display='flex';

  document.getElementById('authEmailField').style.display='block';
  document.getElementById('authPasswordField').style.display='block';
  document.getElementById('authEmpresaField').style.display='none';
  document.getElementById('authTrocarUsuarioBtn').style.display='none';

  document.getElementById('authEmpresa').innerHTML=
    '<option value="">Selecione...</option>';

  document.getElementById('authLoginBtn').textContent='Entrar';
  document.getElementById('authUserLabel').textContent='';
  document.getElementById('authError').textContent='';

  supabaseEmpresaId=null;
  supabaseEmpresaNome='';
  supabaseItensPorNome=new Map();
}

document.getElementById('authLoginBtn').onclick=async ()=>{
  const errorBox=document.getElementById('authError');

  const {data:{session}}=await supabaseClient.auth.getSession();

  /* ETAPA 2: usuário já autenticado, escolhe a empresa */
  if(session){
    const select=document.getElementById('authEmpresa');
    const empresaId=select.value;
    const empresaNome=select.options[select.selectedIndex]?.text||'';

    if(!empresaId){
      errorBox.textContent='Selecione a empresa/fazenda.';
      return;
    }

    errorBox.textContent='Carregando empresa...';

    try{
      await iniciarSistemaAutenticado(
        session,
        empresaId,
        empresaNome
      );
    }catch(e){
      console.error(e);
      errorBox.textContent=e.message||String(e);
    }

    return;
  }

  /* ETAPA 1: autenticação */
  const email=document.getElementById('authEmail').value.trim();
  const password=document.getElementById('authPassword').value;

  if(!email||!password){
    errorBox.textContent='Informe e-mail e senha.';
    return;
  }

  errorBox.textContent='Entrando...';

  const {data,error}=await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if(error){
    errorBox.textContent='Não foi possível entrar. Verifique e-mail e senha.';
    return;
  }

  try{
    await prepararSelecaoEmpresa(data.session);
  }catch(e){
    console.error(e);
    errorBox.textContent=e.message||String(e);
  }
};

document.getElementById('authPassword').addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    document.getElementById('authLoginBtn').click();
  }
});

document.getElementById('authEmpresa').addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    document.getElementById('authLoginBtn').click();
  }
});

document.getElementById('authTrocarUsuarioBtn').onclick=async ()=>{
  await supabaseClient.auth.signOut();
  document.getElementById('authEmail').value='';
  document.getElementById('authPassword').value='';
  mostrarLogin();
};

document.getElementById('authLogoutBtn').onclick=async ()=>{
  await supabaseClient.auth.signOut();
  mostrarLogin();
};

(async ()=>{
  const {data:{session}}=await supabaseClient.auth.getSession();

  if(session){
    try{
      await prepararSelecaoEmpresa(session);
    }catch(e){
      console.error(e);
      document.getElementById('authError').textContent=e.message||String(e);
      document.getElementById('authScreen').style.display='flex';
    }
  }else{
    mostrarLogin();
  }
})();
