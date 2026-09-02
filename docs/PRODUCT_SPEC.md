ESPECIFICAÇÃO-MÃE DEFINITIVA — VK ORGANIZAÇÃO

INSTRUÇÃO MAIS IMPORTANTE

Este documento inteiro é a ESPECIFICAÇÃO-MÃE OFICIAL do projeto VK ORGANIZAÇÃO.

Você deverá manter esta especificação durante TODO o desenvolvimento.

Não trate este texto apenas como uma mensagem inicial do chat.

Não reduza silenciosamente o escopo conforme a conversa ficar longa.

Não esqueça requisitos antigos quando começar módulos novos.

Não simplifique funcionalidades sem explicar.

Não substitua requisitos por soluções mais fáceis apenas para terminar mais rápido.

Não considere um requisito removido simplesmente porque ele deixou de ser citado nas mensagens seguintes.

Toda mudança futura deverá ser considerada uma alteração desta especificação-mãe.

Crie dentro do repositório:

"/docs/PRODUCT_SPEC.md"

com esta especificação completa.

Crie também:

"/docs/IMPLEMENTATION_CHECKLIST.md"

Transforme TODOS os requisitos deste documento em um checklist rastreável.

Utilize estados:

PENDENTE
→ EM DESENVOLVIMENTO
→ IMPLEMENTADO
→ EM TESTE
→ TESTADO
→ APROVADO

Quando houver problema:

BLOQUEADO

ou:

CORREÇÃO NECESSÁRIA

Depois:

RETESTE
→ APROVADO

Nenhuma funcionalidade pode receber status APROVADO apenas porque o código foi escrito.

APROVADO significa que:

- foi implementada;
- a lógica foi testada;
- as permissões foram testadas;
- a interface foi verificada;
- o banco foi verificado;
- os erros foram corrigidos;
- houve reteste;
- funciona no ambiente publicado.

Antes da publicação final faça uma comparação completa:

ESPECIFICAÇÃO-MÃE × SISTEMA IMPLEMENTADO

e corrija qualquer diferença encontrada.

---

1. PAPEL DA MANUS

Atue simultaneamente como:

- arquiteto de software sênior;
- engenheiro full-stack;
- especialista React;
- especialista TypeScript;
- especialista PostgreSQL;
- especialista Supabase;
- especialista Cloudflare Workers;
- especialista em sistemas multi-tenant;
- especialista em sistemas em tempo real;
- especialista em segurança;
- especialista em UX/UI;
- especialista em redes sociais;
- especialista em performance;
- especialista em PWA;
- especialista em testes;
- especialista em DevOps;
- especialista GitHub;
- especialista em LGPD e privacidade;
- especialista em QA.

Você deverá construir do zero uma aplicação web real chamada:

VK ORGANIZAÇÃO

Não quero apenas uma demonstração visual.

Não quero mockup fingindo ser aplicação.

Não quero botões sem funcionamento.

Não quero dados fictícios em produção.

Não quero telas que apenas exibam toast dizendo que algo funcionou.

Não quero lógica improvisada.

Quero uma aplicação:

- real;
- segura;
- multiusuário;
- multi-guildas;
- rápida;
- responsiva;
- em tempo real;
- modular;
- escalável;
- testada;
- preparada para usuários reais.

---

2. VISÃO DO PRODUTO

VK ORGANIZAÇÃO deverá ser ao mesmo tempo:

PLATAFORMA DE GESTÃO DE GUILDAS

+ 

REDE SOCIAL DO CENÁRIO DE GUILDAS

+ 

PLATAFORMA DE RECRUTAMENTO

+ 

PLATAFORMA DE XTREINOS E EVENTOS

+ 

PLATAFORMA DE RANKINGS E DESEMPENHO

Não transforme o projeto apenas em dashboard administrativo.

Não transforme o projeto apenas em rede social.

As duas partes são importantes.

A VALK será apenas uma das guildas usuárias.

O sistema deverá comportar muitas guildas e muitos usuários.

---

3. STACK PRINCIPAL

Utilize uma arquitetura moderna e profissional.

Frontend

Preferencialmente:

- React;
- TypeScript;
- Vite;
- React Router;
- TanStack Query;
- React Hook Form;
- Zod;
- componentes acessíveis;
- CSS moderno ou Tailwind CSS com design system próprio.

TypeScript em modo strict.

Evitar "any" desnecessário.

Backend

- Cloudflare Workers;
- TypeScript;
- API própria VK ORGANIZAÇÃO.

Banco

- Supabase PostgreSQL.

Autenticação

- Supabase Auth.

Realtime

- Supabase Realtime;
- Broadcast;
- Presence somente quando fizer sentido;
- mudanças de banco quando adequadas.

Arquivos

- Supabase Storage.

Anti-bot

- Cloudflare Turnstile.

Repositório

- GitHub.

Testes

- Vitest;
- React Testing Library;
- Playwright;
- testes SQL/RLS.

Publicação

- Cloudflare Workers + Static Assets;
- Cloudflare Vite Plugin;
- integração com GitHub.

IA

- Gemini apenas onde realmente agregar valor;
- principalmente OCR/interpretação de prints.

Todo o projeto deverá inicialmente utilizar apenas soluções gratuitas sempre que possível.

Não contratar serviço pago.

Não cadastrar cartão.

Não habilitar plano pago sem minha autorização.

---

4. IDENTIDADE VISUAL

Nome:

VK ORGANIZAÇÃO

Logo oficial:

https://ibb.co/6cLssbV9

Você deverá:

1. acessar a logo;
2. baixar a imagem;
3. guardar cópia otimizada nos assets;
4. não depender permanentemente do ImgBB;
5. criar versões apropriadas para:
   - header;
   - login;
   - homepage;
   - favicon;
   - PWA;
6. preservar proporções;
7. não alterar a logo sem autorização.

---

5. CORES

Utilizar as cores presentes na logo como identidade.

Direção:

- preto;
- grafite;
- amarelo/dourado;
- branco;
- cinzas auxiliares.

Extrair os valores reais e criar design tokens.

Exemplos:

"--background"

"--surface"

"--surface-elevated"

"--border"

"--primary"

"--primary-hover"

"--text-primary"

"--text-secondary"

"--success"

"--warning"

"--danger"

Não utilizar amarelo exageradamente.

Utilizar principalmente para:

- identidade;
- botão primário;
- seleção;
- foco;
- detalhes importantes;
- indicadores.

---

6. ESTÉTICA

Quero aparência:

- sofisticada;
- organizada;
- gamer;
- moderna;
- minimalista;
- profissional.

Não deixar com cara de site feito por IA.

Não utilizar excesso de:

- emojis;
- gradientes;
- cards desnecessários;
- efeitos brilhantes;
- animações;
- textos artificiais.

Utilize uma biblioteca consistente de ícones, como Lucide.

Emojis só quando tiverem função real na informação.

---

7. MOBILE E DESKTOP

Desenvolver mobile-first, mas NÃO mobile-only.

Testar:

- Android;
- celular pequeno;
- celular médio;
- tablet;
- notebook;
- desktop;
- telas largas.

No desktop:

- sidebar adequada;
- melhor utilização da largura;
- tabelas adaptadas;
- painéis organizados.

No mobile:

- menu drawer;
- áreas de toque confortáveis;
- nenhum conteúdo cortado;
- nenhum botão escondido;
- sem precisar usar zoom.

---

8. PWA

Transformar o VK ORGANIZAÇÃO em PWA instalável.

Criar:

- manifest;
- ícones;
- service worker;
- metadata;
- instalação Android;
- fallback adequado;
- atualização de versão.

Não cachear indevidamente dados privados.

---

9. PRINCÍPIO MULTI-GUILDA

O sistema deverá ser multi-tenant desde a primeira migration.

Uma guilda nunca poderá visualizar ou editar dados privados de outra.

Dados administrativos deverão ter relacionamento seguro com a guilda correspondente.

Não confiar apenas no frontend.

Utilizar:

- RLS;
- autorização backend;
- policies;
- validação server-side.

---

10. SEPARAÇÃO DE ENTIDADES

Nunca misturar:

- conta;
- perfil;
- Free Fire Player;
- guilda;
- vínculo com guilda;
- cargo;
- permissão;
- Premium;
- perfil público.

O perfil social pertence ao usuário.

A guilda possui seus próprios dados.

Posts pessoais pertencem ao usuário.

Dados administrativos pertencem à guilda.

Se a pessoa mudar de guilda, ela não perde:

- perfil;
- seguidores;
- posts;
- conquistas pessoais;
- histórico pessoal permitido.

---

11. TIPOS E ESTADOS DE USUÁRIO

Visitante

Sem login.

Membro sem guilda

Possui conta e perfil, mas nenhuma guilda atual.

Membro

Vinculado a guilda.

Membro Premium

Membro com recursos extras.

Membro em teste

Está passando por período de avaliação em guilda.

Capitão/Vice de Line

Possui pequenas permissões relacionadas à própria Line.

ADM

Membro com permissões administrativas.

Líder

Membro proprietário/gestor da guilda.

Organizador de Evento

Possui permissões específicas no evento.

Super Admin VK

Administração da plataforma inteira.

---

12. MEMBRO SEM GUILDA

Membro sem guilda continua usando a plataforma.

Pode:

- criar perfil;
- postar;
- curtir;
- comentar;
- seguir;
- possuir seguidores;
- usar feed;
- pesquisar;
- participar de eventos permitidos;
- visualizar rankings;
- candidatar-se;
- receber convite;
- ativar “Procurando Guilda”.

---

13. PERMISSÕES

Não implementar apenas:

"role = admin"

Utilizar permissões granulares.

Exemplos:

"can_manage_members"

"can_edit_members"

"can_manage_lines"

"can_manage_goals"

"can_manage_warnings"

"can_manage_recruitment"

"can_accept_members"

"can_manage_events"

"can_score_events"

"can_publish_as_guild"

"can_manage_guild_profile"

"can_view_internal_notes"

"can_manage_links"

"can_manage_roles"

O líder poderá criar cargos como:

- ADM Geral;
- Recrutador;
- Organizador;
- Gerente de Lines;
- Moderador;
- Analista;
- Capitão.

Cargo visual e permissão técnica são conceitos separados.

---

14. SUPABASE AUTH

Implementar:

- cadastro;
- login;
- logout;
- confirmação de e-mail;
- recuperação de senha;
- troca de senha;
- sessão persistente;
- refresh de token;
- expiração;
- tratamento de erro.

Não utilizar login Google neste momento.

Nunca permitir:

- botão Criar Conta sem resposta;
- rota quebrada;
- login travado;
- tela preta;
- mensagem genérica sem tratamento.

---

15. CADASTRO DO JOGADOR

Solicitar:

- e-mail;
- senha;
- UID Free Fire.

Consultar a API.

Mostrar nickname encontrado.

Usuário confirma.

UID deverá possuir proteção contra reivindicação duplicada.

Criar também username próprio do VK.

Exemplo:

"@malvada"

Nick Free Fire pode mudar.

Username VK permanece.

---

16. PERFIL PÚBLICO DO JOGADOR

Possuir:

- foto;
- capa;
- username;
- nick Free Fire;
- UID;
- bio;
- função;
- guilda atual;
- Line quando autorizada;
- cargo público quando aplicável;
- seguidores;
- seguindo;
- publicações;
- conquistas;
- desempenho;
- redes sociais;
- status Procurando Guilda.

Nunca mostrar:

- e-mail;
- telefone interno;
- advertências;
- notas administrativas;
- permissões;
- secrets;
- links privados.

---

17. PERFIL CLICÁVEL

Sempre que aparecer um jogador em local apropriado:

- avatar;
- nick;
- username;

deverão poder abrir o perfil público daquele jogador.

Exemplos:

- ranking;
- Line;
- guilda;
- evento;
- comentários;
- seguidores;
- recrutamento.

Utilizar navegação interna adequada.

Não transformar todo texto em link sem necessidade.

---

18. PERFIL PÚBLICO DA GUILDA

Criar perfil próprio.

Abas sugeridas:

- Início;
- Publicações;
- Desempenho;
- Membros;
- Lines;
- Eventos;
- Conquistas.

Mostrar conforme configuração:

- logo;
- capa;
- nome;
- ID da guilda;
- descrição;
- líder;
- membros atuais;
- limite;
- nível;
- honra;
- honra semanal;
- seguidores;
- recrutamento;
- redes sociais;
- eventos;
- conquistas;
- desempenho.

---

19. GUILDA CLICÁVEL

Sempre que o nome/logo da guilda aparecer em:

- perfil de jogador;
- ranking;
- recrutamento;
- evento;
- postagem;
- busca;
- comentários relacionados;

permitir abrir o perfil público da guilda.

---

20. ID DA GUILDA

Mostrar ID em locais adequados.

Possuir ação:

Copiar ID

Não transformar automaticamente em compartilhamento.

Não esconder o ID quando fizer parte das informações públicas autorizadas.

---

21. LINKS DA GUILDA

A guilda poderá possuir links configuráveis.

Exemplos:

- grupo geral da guilda;
- grupo de recrutamento;
- redes sociais;
- site externo;
- Discord se houver;
- WhatsApp se utilizado;
- outros links relevantes.

Cada link deverá possuir:

- nome;
- URL;
- tipo;
- visibilidade;
- ativo/inativo.

Visibilidades possíveis:

- público;
- membros;
- liderança;
- cargo específico.

O grupo geral da guilda poderá ser liberado somente depois que o membro for aceito.

Links privados jamais podem aparecer em endpoints públicos.

Todos os links apresentados na interface devem ser realmente clicáveis.

Links externos deverão abrir corretamente e com segurança.

---

22. LINKS DA LINE

Cada Line poderá ter:

- link do grupo da Line;
- link secundário quando necessário;
- observações;
- recursos internos.

O link principal da Line deverá aparecer somente para:

- membros daquela Line;
- capitão;
- vice;
- liderança autorizada.

Não mostrar publicamente.

Quando membro for movido de Line:

atualizar corretamente o acesso ao link.

---

23. PERFIL DA LINE

Criar estrutura própria para Line quando fizer sentido.

Poderá mostrar internamente:

- nome;
- integrantes;
- capitão;
- vice;
- reservas;
- funções;
- desempenho;
- metas;
- eventos;
- link privado do grupo.

Se a guilda permitir Line pública:

mostrar somente dados permitidos.

Nunca mostrar link privado.

---

24. LINKS EM PERFIS

Perfis pessoais poderão possuir redes sociais autorizadas pelo usuário.

Exemplos:

- Instagram;
- TikTok;
- outras redes aprovadas.

Os links deverão ser:

- clicáveis;
- validados;
- sanitizados;
- opcionais.

Nunca transformar telefone interno em informação pública.

---

25. COPIAR

Quero ações de COPIAR.

Não substituir por “Compartilhar”.

Utilizar Clipboard API com fallback.

Criar:

- Copiar Nick;
- Copiar ID;
- Copiar Nick + ID;
- Copiar ficha resumida;
- Copiar ficha completa;
- Copiar IDs selecionados;
- Copiar Nicks selecionados;
- Copiar Line;
- Copiar todas as Lines;
- Copiar ranking;
- Copiar metas;
- Copiar quem não bateu meta;
- Copiar Guerra;
- Copiar Honra;
- Copiar advertência;
- Copiar candidato;
- Copiar slots;
- Copiar evento;
- Copiar resultado;
- Copiar ID da guilda;
- Copiar nome + ID da guilda;
- Copiar dados da guilda.

Conteúdo copiado deve respeitar a mesma autorização da interface.

---

26. ÁREA PÚBLICA

Visitante poderá explorar bastante sem login.

Menu público:

- Início;
- Cenário;
- Guildas;
- Jogadores;
- Rankings;
- Recrutamento;
- Xtreinos;
- Eventos;
- Pesquisar.

Além de:

- Entrar;
- Criar conta.

Após login, a área pública continua disponível.

---

27. HOME

Página inicial profissional.

Mostrar:

- apresentação;
- benefícios;
- guildas;
- jogadores;
- publicações;
- recrutamentos;
- Xtreinos;
- eventos;
- chamadas de cadastro.

Não deixar carregada.

---

28. CENÁRIO VK

Criar feed social central.

Filtros:

- Para Você;
- Seguindo;
- Guildas;
- Jogadores;
- Eventos.

---

29. REDE SOCIAL

Permitir posts pessoais e posts oficiais de guildas.

Posts suportam:

- texto;
- foto;
- múltiplas imagens;
- curtidas;
- comentários;
- respostas;
- menções;
- hashtags;
- edição;
- exclusão;
- arquivamento.

Utilizar paginação por cursor.

---

30. PUBLICAÇÃO DE GUILDA

Somente usuário com permissão adequada poderá publicar em nome da guilda.

Público vê:

“VALK publicou...”

Sistema registra internamente quem fez a publicação.

---

31. CURTIDAS

Implementar:

- curtir;
- descurtir;
- impedir duplicidade;
- contador;
- optimistic UI;
- sincronização.

---

32. COMENTÁRIOS

Implementar:

- comentar;
- responder;
- excluir comentário próprio;
- moderar comentário em publicação própria;
- denunciar;
- mencionar.

Limitar profundidade de respostas.

---

33. SEGUIDORES

Usuário poderá:

- seguir jogador;
- deixar de seguir;
- seguir guilda;
- deixar de seguir.

Mostrar seguidores/seguindo.

Gerar notificações.

---

34. BLOQUEIO

Usuário poderá bloquear outro.

Respeitar bloqueio em:

- feed;
- comentários;
- seguidores;
- menções;
- interação.

---

35. DENÚNCIAS

Permitir denunciar:

- perfil;
- guilda;
- post;
- comentário;
- evento.

Super Admin recebe fila.

---

36. EXPLORAR

Criar áreas como:

- Guildas em alta;
- Jogadores em destaque;
- Xtreinos hoje;
- Recrutamentos;
- Eventos ao vivo;
- Publicações populares;
- Novas guildas.

Não criar algoritmo complexo inicialmente.

---

37. BUSCA GLOBAL

Pesquisar:

- username;
- nick;
- UID;
- nome da guilda;
- ID guilda;
- eventos;
- recrutamento.

Utilizar:

- debounce;
- paginação;
- índices;
- busca local primeiro.

Não chamar API externa a cada tecla digitada.

---

38. GUILDAS NÃO REIVINDICADAS

Ao pesquisar ID via API e encontrar guilda ainda sem conta VK:

mostrar:

“Guilda ainda não reivindicada no VK ORGANIZAÇÃO.”

Permitir solicitar reivindicação.

Não criar administração falsa.

---

39. JOGADORES NÃO REIVINDICADOS

Ao pesquisar UID válido de jogador sem conta:

mostrar dados públicos disponíveis.

Identificar:

“Este jogador ainda não reivindicou seu perfil no VK ORGANIZAÇÃO.”

---

40. REIVINDICAÇÃO DE GUILDA

Solicitar:

- ID da guilda;
- UID do líder;
- validações.

Consultar API.

Não conceder propriedade sem processo seguro.

---

41. TRANSFERÊNCIA DE LIDERANÇA

Implementar processo seguro.

Exigir:

- autenticação recente;
- confirmação;
- destinatário válido;
- log.

Guilda mantém todos os dados.

---

42. STATUS DE MEMBRO

Suportar:

- pendente;
- em teste;
- ativo;
- ausente;
- afastado;
- inativo;
- saiu;
- removido.

Preservar histórico.

---

43. PERÍODO DE TESTE

Candidato pode ficar:

EM TESTE.

Depois liderança pode:

- efetivar;
- rejeitar;
- encerrar teste.

---

44. DASHBOARD DO MEMBRO

Mostrar:

- meta;
- progresso;
- Line;
- posição;
- guilda;
- eventos;
- agenda;
- notificações;
- publicações;
- conquistas.

---

45. DASHBOARD DO MEMBRO SEM GUILDA

Mostrar:

- feed;
- Procurando Guilda;
- convites;
- recrutamentos;
- eventos;
- perfil;
- sugestões adequadas.

---

46. MEMBRO PREMIUM

Premium poderá ter:

- capa personalizada;
- temas;
- molduras;
- histórico analítico maior;
- gráficos;
- recordes;
- comparações pessoais;
- personalização.

Premium NÃO pode comprar:

- ranking;
- pontos;
- vantagem competitiva.

Utilizar entitlements.

---

47. ADM

ADM continua sendo membro.

Tem tudo do membro.

Além disso:

“Gestão da Guilda”

Mostrando somente o que as permissões permitem.

---

48. LÍDER

Líder possui:

- tudo do membro;
- gestão total da própria guilda;
- cargos;
- permissões;
- membros;
- Lines;
- metas;
- advertências;
- recrutamento;
- eventos;
- configurações;
- links;
- privacidade.

---

49. CAPITÃO E VICE

Não precisam ser ADM.

Poderão receber permissões limitadas à própria Line:

- presença;
- disponibilidade;
- escalação;
- reservas;
- acompanhamento.

---

50. CENTRAL DE PENDÊNCIAS

Criar área prática.

Exemplos:

- solicitações;
- membros sem Line;
- abaixo da meta;
- possíveis saídas;
- inscrições;
- candidatos em teste;
- advertências;
- sincronizações com problema.

---

51. MEMBROS

Ficha completa.

Campos possíveis:

- UID;
- nick;
- avatar;
- função;
- Line;
- status;
- login secundário;
- entrada;
- disponibilidade;
- redes;
- tags;
- notas;
- links permitidos;
- histórico.

---

52. FUNÇÕES

Iniciais:

- Curandeiro;
- Full Gás;
- Rush;
- Coringa.

Permitir personalização futura.

---

53. LINES

Permitir:

- criar;
- editar;
- excluir/desativar;
- enumerar;
- reorganizar;
- adicionar membro;
- remover;
- transferir;
- capitão;
- vice;
- reservas;
- link privado;
- observações;
- status.

Preservar histórico de movimentação.

---

54. COMPOSIÇÃO DA LINE

Alertar:

- incompleta;
- integrante demais;
- falta de função;
- falta de reserva.

Alertar, não bloquear arbitrariamente.

---

55. DISPONIBILIDADE

Membro informa horários/dias.

Liderança consulta.

---

56. AUSÊNCIA

Membro pode registrar:

- período;
- motivo opcional;
- retorno previsto.

---

57. PRESENÇA

Estados:

- Confirmado;
- Talvez;
- Não posso;
- Não respondeu.

---

58. METAS

Suportar:

- meta geral;
- meta de Honra;
- meta de Guerra;
- meta individual;
- exceções;
- metas por período.

---

59. RESULTADO SEMANAL

Registrar:

- inicial;
- atual;
- ganho;
- meta;
- percentual;
- bateu/não;
- posição.

---

60. FECHAMENTO SEMANAL

Encerrar semana criando snapshot.

Preservar:

- ranking;
- metas;
- resultados;
- posições.

Correção posterior exige:

- motivo;
- autor;
- antes;
- depois.

---

61. RANKINGS INTERNOS

Criar:

- individual Honra;
- individual Guerra;
- Line Honra;
- Line Guerra.

Filtros temporais.

---

62. DESEMPENHO PÚBLICO DO JOGADOR

Se permitido:

mostrar:

- meta semanal;
- pontuação;
- posição;
- posição na Line;
- sequência;
- histórico semanal;
- recordes;
- gráficos.

---

63. DESEMPENHO PÚBLICO DA GUILDA

Se permitido:

mostrar:

- honra;
- honra semanal;
- evolução;
- meta coletiva;
- percentual;
- membros que bateram meta;
- Lines;
- histórico.

---

64. COMPARAÇÃO DE GUILDAS

Permitir comparar dados públicos equivalentes.

Identificar claramente:

- dado vindo da API;
- dado calculado pelo VK;
- dado informado manualmente.

---

65. TEMPORADAS

Suportar:

- semanal;
- mensal;
- temporada VK;
- histórico.

Nunca apagar temporadas encerradas.

---

66. CONQUISTAS

Jogador:

- MVP;
- Top Guerra;
- sequência;
- recordes;
- campeão;
- capitão.

Guilda:

- campeonatos;
- metas coletivas;
- recordes;
- temporadas.

Diferenciar conquistas verificadas e manuais.

---

67. ADVERTÊNCIAS

Níveis iniciais:

Verde -1
Amarela -2
Vermelha -3

Registrar:

- jogador;
- motivo;
- observação;
- nível;
- data;
- responsável;
- contador;
- status;
- histórico.

Não tornar público.

---

68. RECRUTAMENTO

Área pública com:

Guildas recrutando

e:

Jogadores procurando guilda

---

69. ANÚNCIO DE RECRUTAMENTO

Campos:

- vagas;
- funções;
- horários;
- requisitos;
- competitivo/casual;
- descrição;
- regras;
- status.

---

70. CANDIDATURA

Estados:

- pending;
- viewed;
- under_review;
- trial;
- accepted;
- rejected;
- cancelled;
- expired.

---

71. CONVITE

Guilda pode convidar jogador sem guilda.

Usuário pode aceitar ou recusar.

---

72. EVENTOS

Arquitetura unificada.

Tipos:

- Xtreino;
- CS/Campeonato;
- Outro.

---

73. ORGANIZAÇÃO DE EVENTOS

Papéis:

- owner;
- manager;
- scorer;
- moderator.

Não exigir ADM da guilda.

---

74. FASES

Evento poderá possuir várias fases.

Cada fase:

- nome;
- data;
- horário;
- quantidade de quedas;
- regras.

---

75. SLOTS

Padrão:

12 slots.

Cada slot:

- Line;
- quatro jogadores;
- reservas;
- status.

Permitir configuração quando necessário.

---

76. INSCRIÇÃO

Tipos:

- SOLO;
- LINE/SQUAD.

Estados:

- pending;
- accepted;
- rejected;
- cancelled;
- waitlist.

---

77. ID E SENHA DA SALA

Nunca públicos.

Liberar somente:

- participantes autorizados;
- no momento adequado.

---

78. PONTUAÇÃO

Registrar:

- colocação;
- kills;
- pontos colocação;
- pontos kills;
- total;
- penalidade;
- ajuste.

---

79. QUEDAS

Cada fase possui quedas.

Pontuação individualizada por queda.

Somatória automática.

---

80. MVP

Quando houver dados individuais:

- kills;
- desempenho;
- MVP;
- top fragger.

---

81. RANKING AO VIVO

Resultado atualizado em uma sessão deverá aparecer nos outros dispositivos sem F5.

---

82. OCR GEMINI

Fluxo:

1. enviar print;
2. otimizar imagem;
3. backend chama Gemini;
4. IA retorna estrutura;
5. mostrar prévia;
6. humano confirma;
7. salvar.

Nunca salvar automaticamente sem confirmação.

---

83. HISTÓRICO DE EVENTOS

Preservar:

- participantes;
- fases;
- quedas;
- ranking;
- pontos;
- MVP;
- resultado.

---

84. PERFIL/PÁGINA DO EVENTO

Nome do evento deverá ser clicável em locais apropriados.

Página pública poderá mostrar:

- organizador;
- data;
- regras;
- vagas;
- inscritos;
- slots;
- status;
- classificação;
- resultado.

---

85. CALENDÁRIO

Guilda poderá registrar:

- Xtreino;
- Guerra;
- reunião;
- teste;
- campeonato;
- atividade.

---

86. AGENDA DO MEMBRO

Mostrar somente atividades pertinentes à pessoa.

---

87. MURAL

Avisos:

- normal;
- importante;
- fixado.

---

88. ENQUETES

Permitir enquetes internas.

---

89. NOTIFICAÇÕES

Categorias:

- Social;
- Guilda;
- Eventos;
- Administração;
- Sistema.

---

90. LOG DE ATIVIDADES

Registrar ações relevantes.

Exemplos:

“ADM X moveu jogador Y.”

“Líder alterou meta.”

“Jogador Z foi aceito.”

---

91. API FREE FIRE

API existente:

Base:

https://valk.kl7z.space/

Key atual:

"VK"

PlayerInfo:

"https://valk.kl7z.space/api/v2/playerinfo/br?key=VK&player_id=6400003656"

GuildInfo:

"https://valk.kl7z.space/api/v2/guildinfo/br?key=VK&guildID=2041650894"

Existe README fornecido contendo documentação.

Utilizar essa documentação.

Não substituir silenciosamente por outra API.

---

92. SEGREDO DA API

A chave:

"VK"

não deverá ficar no frontend.

Criar secret:

"FREEFIRE_API_KEY"

Base URL:

"FREEFIRE_API_BASE_URL"

Nunca colocar a key:

- no GitHub;
- no bundle React;
- no console;
- na resposta pública.

---

93. GATEWAY VK

Frontend NÃO chama diretamente "valk.kl7z.space".

Criar:

"GET /api/freefire/player/:uid"

"GET /api/freefire/guild/:guildId"

"POST /api/freefire/players/batch"

"POST /api/freefire/sync/member/:uid"

"POST /api/freefire/sync/guild/:guildId"

"POST /api/freefire/sync/guild-members"

Cloudflare Worker consulta o provedor.

---

94. PLAYERINFO NORMALIZADO

Criar adapter interno.

Campos úteis:

- playerId;
- nickname;
- region;
- level;
- avatarId;
- lastLogin;
- clanId;
- clanName;
- clanLevel;
- clanMemberCount;
- updatedAt.

---

95. GUILDINFO NORMALIZADO

Modelo interno:

- guildId;
- name;
- ownerId;
- level;
- memberLimit;
- currentMembers;
- description;
- region;
- viceLeaders;
- totalHonor;
- weeklyHonor;
- updatedAt.

---

96. RATE LIMIT

A documentação informa:

100 requisições/minuto por API Key.

Nunca utilizar todas simultaneamente.

Implementar margem de segurança.

Utilizar:

- fila;
- cache;
- deduplicação;
- cooldown;
- retry;
- exponential backoff;
- timeout;
- tratamento 429;
- tratamento 400;
- tratamento 401;
- tratamento 500.

---

97. CACHE

Não consultar Free Fire toda vez que uma página abrir.

Guardar resultado recente.

Mostrar:

“Atualizado há X minutos.”

Permitir “Atualizar agora” respeitando cooldown.

---

98. ATUALIZAÇÃO EM MASSA

Liderança poderá atualizar vários membros.

Mostrar progresso:

"18/55 atualizados"

"2 alterações"

"1 erro"

Não travar interface.

---

99. POSSÍVEL SAÍDA

Se API detectar jogador em outra guilda:

não remover automaticamente.

Gerar alerta.

Liderança confirma.

---

100. MODO DEGRADADO

Se API Free Fire cair:

o restante continua funcionando.

Não quebrar:

- login;
- guilda;
- Lines;
- metas;
- eventos;
- social;
- notificações.

---

101. REALTIME

Atualizações importantes deverão aparecer entre dispositivos.

Exemplos:

- mudança de Line;
- notificação;
- comentário;
- curtida;
- candidatura;
- evento;
- ranking;
- presença;
- contadores.

---

102. PERFORMANCE E OTIMIZAÇÃO — PRIORIDADE ALTA

A boa experiência do usuário é um requisito central.

Não considerar performance como otimização posterior.

Construir corretamente desde o início.

Implementar:

- code splitting por rota;
- lazy loading;
- TanStack Query cache;
- stale times adequados;
- prefetch seletivo;
- paginação por cursor;
- virtualização em listas muito grandes quando necessário;
- debounce;
- índices PostgreSQL;
- queries pequenas;
- evitar "SELECT *";
- evitar N+1;
- reduzir subscriptions realtime;
- assinar apenas canais necessários;
- desinscrever quando componente sair;
- memoização quando realmente útil;
- evitar rerender em cascata;
- imagens responsivas;
- WebP/AVIF;
- compressão;
- thumbnails;
- carregamento progressivo;
- cache HTTP;
- cache Worker;
- CDN Cloudflare;
- evitar JavaScript desnecessário;
- tree shaking;
- bundle analysis.

---

103. EXPERIÊNCIA EM CELULAR INTERMEDIÁRIO

Testar especialmente Android intermediário.

Não assumir dispositivo topo de linha.

Evitar:

- animações pesadas;
- blur excessivo;
- sombras enormes;
- arquivos de imagem gigantes;
- dependências enormes;
- tabelas impossíveis no celular;
- dezenas de chamadas simultâneas.

---

104. METAS DE UX/PERFORMANCE

Buscar excelente experiência real.

Como referência técnica, tentar manter páginas críticas dentro de bons limites de Core Web Vitals.

Priorizar principalmente:

- abertura rápida;
- interação rápida;
- estabilidade visual;
- resposta imediata ao toque;
- ausência de travamentos.

Não perseguir métricas de forma que quebre funcionalidade, mas investigar páginas lentas.

---

105. LOADING

Nunca utilizar tela preta.

Criar:

- skeleton;
- loading local;
- empty state;
- error state;
- retry.

Não bloquear o site inteiro por causa de um componente.

---

106. OTIMISTIC UI

Utilizar quando apropriado.

Exemplos:

- curtida;
- follow;
- ações simples.

Servidor continua autoridade.

Se falhar:

- reverter;
- explicar.

---

107. NAVEGAÇÃO RÁPIDA

Ao voltar de um perfil para:

- feed;
- ranking;
- lista;

tentar preservar contexto/scroll quando adequado.

Evitar recarregar tudo desnecessariamente.

---

108. BANCO

Modelar corretamente.

Entidades possíveis:

- profiles;
- ff_players;
- guilds;
- guild_claims;
- guild_memberships;
- guild_roles;
- guild_role_permissions;
- guild_member_roles;
- lines;
- line_members;
- line_links;
- guild_links;
- member_availability;
- member_absences;
- goal_cycles;
- member_goals;
- member_goal_results;
- line_goal_results;
- guild_weekly_snapshots;
- warnings;
- recruitments;
- recruitment_applications;
- guild_invites;
- events;
- event_staff;
- event_phases;
- event_slots;
- event_registrations;
- event_rosters;
- event_rounds;
- event_scores;
- event_player_scores;
- event_results;
- posts;
- post_media;
- comments;
- reactions;
- follows;
- hashtags;
- post_hashtags;
- mentions;
- blocks;
- reports;
- notifications;
- announcements;
- polls;
- poll_options;
- poll_votes;
- activity_logs;
- audit_logs;
- plans;
- subscriptions;
- entitlements;
- sync_jobs;
- sync_logs;
- feature_flags.

Pode melhorar modelagem se necessário.

Não remover requisitos.

---

109. MIGRATIONS

Todo banco reproduzível por migrations.

Não depender de configurações manuais esquecidas no dashboard.

---

110. RLS

Ativar RLS em todas as tabelas expostas.

Criar policies para:

- anon;
- authenticated;
- membro;
- ADM;
- líder;
- organizador;
- Super Admin.

Testar:

- SELECT;
- INSERT;
- UPDATE;
- DELETE.

---

111. PRIVACIDADE DE LINKS

Adicionar testes específicos:

Membro de LINE 1 não pode obter o link privado da LINE 2.

Visitante não pode obter link do grupo da guilda.

Membro não aceito não pode obter grupo interno.

Usuário de outra guilda não pode obter links privados.

Nem mesmo tentando chamar endpoint diretamente.

---

112. TRANSAÇÕES

Operações críticas devem ser atômicas.

Exemplo aceitar membro:

- candidatura;
- membership;
- atividade;
- notificação;
- permissões iniciais.

Não deixar operação pela metade.

---

113. SOFT DELETE

Preservar histórico quando apropriado.

---

114. IMAGENS

Uploads:

- avatar;
- capa;
- guilda;
- posts;
- eventos.

Validar:

- tamanho;
- MIME;
- extensão;
- dimensões.

Comprimir.

Não guardar Base64 no PostgreSQL.

---

115. SEGURANÇA

Proteger contra:

- XSS;
- CSRF quando aplicável;
- abuso;
- spam;
- flood;
- uploads maliciosos;
- IDOR;
- privilege escalation;
- mass assignment;
- vazamento de secrets.

---

116. TURNSTILE

Usar em ações sensíveis quando necessário.

Não colocar CAPTCHA a cada ação.

---

117. RATE LIMITING

Aplicar a:

- login complementar;
- cadastro;
- posts;
- comentários;
- follows;
- busca;
- denúncias;
- Free Fire API;
- inscrições;
- ações públicas sensíveis.

---

118. SUPER ADMIN

Área completamente separada.

Permitir:

- usuários;
- guildas;
- reivindicações;
- Premium;
- denúncias;
- suspensões;
- moderação;
- eventos;
- saúde;
- API;
- logs;
- erros;
- Storage;
- feature flags.

---

119. PLANOS

Preparar:

- plans;
- subscriptions;
- entitlements.

Nenhuma integração paga obrigatória agora.

---

120. TERMOS DE USO

Criar página real:

"/termos"

ou:

"/termos-de-uso"

Abordar:

- finalidade;
- contas;
- perfis;
- posts;
- fotos;
- comentários;
- seguidores;
- guildas;
- liderança;
- eventos;
- recrutamentos;
- rankings;
- APIs;
- indisponibilidade externa;
- conduta;
- spam;
- denúncias;
- moderação;
- suspensão;
- propriedade intelectual;
- responsabilidade;
- mudanças;
- contato.

---

121. POLÍTICA DE PRIVACIDADE

Criar:

"/privacidade"

Abordar:

- conta;
- e-mail;
- UID;
- Free Fire;
- guilda;
- posts;
- mídia;
- seguidores;
- eventos;
- dados administrativos;
- serviços utilizados;
- armazenamento;
- segurança;
- LGPD;
- direitos;
- exclusão;
- contato.

Nunca prometer segurança absoluta.

---

122. CONSENTIMENTO

Usuário deve conseguir acessar Termos e Privacidade no cadastro.

Guardar versão aceita quando apropriado.

---

123. RODAPÉ GLOBAL

Rodapé minimalista em todo o site.

Conteúdo:

VK ORGANIZAÇÃO

Termos de Uso

Política de Privacidade

Colaboradores

TikTok:

- @malvadattk
- @valkguilda

Instagram:

- @malvadattk
- @valkguilda

Links devem ser clicáveis quando URLs oficiais forem confirmados.

Não inventar URL.

Criar configuração central.

Não duplicar código em cada página.

---

124. FOOTER NO APP PRIVADO

Também deverá existir nas áreas autenticadas, de forma discreta.

Não cobrir:

- botão;
- menu;
- conteúdo;
- navegação mobile.

---

125. GITHUB

Criar repositório privado:

"vk-organizacao"

Organização profissional.

Criar:

- README.md;
- .gitignore;
- .env.example;
- docs;
- tests;
- supabase;
- migrations.

Nunca versionar secrets.

---

126. CI/CD

Pipeline:

- install;
- lint;
- typecheck;
- unit tests;
- integration tests;
- build.

Deploy somente se pipeline necessário passar.

---

127. AMBIENTE DE TESTE ANTES DA PRODUÇÃO

Não testar alterações diretamente na versão pública.

Utilizar:

- ambiente local;
- Cloudflare Preview/Staging quando possível;
- banco/seed de desenvolvimento apropriado.

Produção somente depois da auditoria.

---

128. CONTAS DE TESTE OBRIGATÓRIAS

Antes da publicação final criar contas de teste representando:

1. Visitante;
2. Membro sem guilda;
3. Membro comum;
4. Membro Premium;
5. Membro em teste;
6. Capitão;
7. ADM com poucas permissões;
8. ADM com muitas permissões;
9. Líder;
10. Organizador de evento;
11. Super Admin.

Criar pelo menos duas guildas de teste.

Isso é necessário para provar isolamento multi-guilda.

---

129. TESTE DE TODOS OS BOTÕES

ANTES DE PUBLICAR:

entrar com cada conta de teste.

Visitar TODAS as telas acessíveis.

Clicar em TODOS os botões.

Testar:

- links;
- menus;
- dropdowns;
- filtros;
- modais;
- formulários;
- copiar;
- excluir;
- editar;
- cancelar;
- aceitar;
- recusar;
- pesquisar;
- atualizar;
- tabs;
- paginação;
- upload;
- logout;
- troca de contexto.

Nenhum botão pode ser assumido como funcional sem ser testado.

---

130. MATRIZ DE TESTE DE BOTÕES

Criar documento:

"/docs/UI_ACTION_MATRIX.md"

Registrar:

- página;
- botão/ação;
- tipo de conta;
- resultado esperado;
- resultado real;
- status;
- bug;
- correção;
- reteste.

---

131. TESTE DE LINKS

Testar especificamente:

Jogador

- avatar;
- nick;
- guilda;
- redes sociais.

Guilda

- logo;
- nome;
- ID copiar;
- redes;
- links públicos;
- links privados.

Line

- abrir Line;
- membro;
- grupo da Line;
- autorização do link.

Evento

- página pública;
- organizador;
- guilda;
- participante.

Nenhum link quebrado.

---

132. TESTE DE PERMISSÕES

Não testar apenas se botão está escondido.

Utilizar requisições diretas.

Tentar:

- membro editar outra guilda;
- ADM sem permissão editar meta;
- capitão acessar outra Line;
- membro acessar advertências;
- visitante obter link privado;
- usuário de Guilda A acessar Guilda B;
- organizador editar evento que não administra;
- membro acessar Super Admin.

Tudo deve ser negado.

---

133. TESTE DE DUAS GUILDAS

Criar:

Guilda Teste A

Guilda Teste B

Com usuários diferentes.

Verificar que nenhuma informação administrativa privada atravessa o tenant.

---

134. TESTE REALTIME COM DUAS SESSÕES

Abrir duas sessões simultâneas.

Exemplo:

Sessão A:
Líder.

Sessão B:
Membro.

Mover membro de Line.

Sessão B deverá atualizar sem refresh.

Testar também:

- comentário;
- notificação;
- ranking de evento;
- candidatura;
- follow quando adequado.

---

135. TESTE DE MÚLTIPLOS DISPOSITIVOS

Quando possível testar:

- duas janelas;
- navegador desktop;
- viewport mobile.

Confirmar sincronização.

---

136. PLAYWRIGHT

Automatizar principais fluxos.

Visitante

- Home;
- busca;
- guilda;
- jogador;
- evento;
- recrutamento.

Membro sem guilda

- cadastro;
- perfil;
- post;
- follow;
- candidatura.

Membro

- guilda;
- Line;
- meta;
- evento.

ADM

- gestão permitida;
- gestão negada.

Líder

- aceitar membro;
- criar Line;
- meta;
- cargos;
- evento.

Organizador

- inscrição;
- slots;
- pontuação;
- ranking.

---

137. TESTE DE API

Testar:

- UID válido;
- UID inválido;
- Guild ID válido;
- inválido;
- timeout;
- 400;
- 401;
- 429;
- 500;
- API offline;
- cache;
- retry;
- batch.

---

138. TESTE DE INTERNET RUIM

Simular:

- conexão lenta;
- offline;
- retorno da conexão.

Verificar:

- reconexão;
- Realtime;
- ações duplicadas;
- refetch.

---

139. TESTE DE DUPLO CLIQUE

Testar:

- aceitar;
- recusar;
- excluir;
- criar;
- pontuar;
- enviar.

Nunca duplicar dados.

---

140. TESTE DE PERFORMANCE

Antes da publicação:

medir páginas importantes.

Investigar:

- bundles grandes;
- consultas lentas;
- imagens grandes;
- subscriptions excessivas;
- queries duplicadas;
- rerenders;
- carregamento lento.

Corrigir gargalos reais.

---

141. TESTE MOBILE

Testar manualmente/automatizado:

- menu;
- rolagem;
- formulários;
- modal;
- tabela;
- copiar;
- dropdown;
- footer;
- teclado virtual;
- imagens.

---

142. TESTE DESKTOP

Verificar:

- largura;
- alinhamento;
- sidebar;
- tabelas;
- gráficos;
- modais;
- espaços vazios;
- responsividade.

---

143. TESTE DE BUILD

Antes de publicar:

- lint passa;
- typecheck passa;
- tests passam;
- build passa.

Não ignorar warnings relevantes.

---

144. TESTE APÓS DEPLOY

IMPORTANTE:

Mesmo depois que tudo funcionar localmente, publicar primeiro em ambiente de preview/staging.

Depois:

REPETIR OS TESTES CRÍTICOS NA VERSÃO CLOUDFARE.

Porque algo que funciona localmente pode falhar no deploy.

Testar:

- cadastro;
- login;
- rotas;
- Worker;
- Supabase;
- RLS;
- Realtime;
- API Free Fire;
- Storage;
- links;
- PWA;
- redirects.

Somente depois considerar produção aprovada.

---

145. ZERO BOTÃO SEM AÇÃO

Regra absoluta.

Todo botão deve:

- executar ação válida;
- navegar;
- abrir algo;
- estar desabilitado explicando por quê.

Nunca deixar botão aparentemente funcional sem ação.

---

146. ZERO MOCK EM PRODUÇÃO

Nenhum número fictício.

Nenhum usuário fake.

Nenhuma guilda fake.

Nenhum resultado fake.

Mocks somente nos testes/dev.

---

147. ERROR BOUNDARIES

Criar tratamento para evitar tela preta.

---

148. MONITORAMENTO

Registrar erros importantes sem secrets.

Super Admin poderá visualizar:

- erros;
- status da API;
- última sincronização;
- 429;
- fila;
- saúde do sistema.

---

149. DOCUMENTAÇÃO

Criar:

"/docs/PRODUCT_SPEC.md"

"/docs/IMPLEMENTATION_CHECKLIST.md"

"/docs/ARCHITECTURE.md"

"/docs/API_FREEFIRE.md"

"/docs/DATABASE.md"

"/docs/SECURITY.md"

"/docs/DEPLOYMENT.md"

"/docs/UI_ACTION_MATRIX.md"

"/docs/TEST_REPORT.md"

---

150. IMPLEMENTAÇÃO EM FASES

Fase 1

Arquitetura.

Fase 2

Supabase e migrations.

Fase 3

Auth + RLS + permissões.

Fase 4

Guildas + jogadores + vínculos.

Fase 5

Membros + Lines + metas.

Fase 6

Área pública + rede social.

Fase 7

Recrutamento.

Fase 8

Eventos.

Fase 9

Rankings.

Fase 10

Premium.

Fase 11

Super Admin.

Fase 12

Performance.

Fase 13

Testes completos.

Fase 14

Auditoria.

Fase 15

Preview/staging.

Fase 16

Reteste publicado.

Fase 17

Produção.

Não avançar assumindo que a fase anterior funciona.

---

151. AUTOMAÇÃO DO TRABALHO

Faça praticamente tudo automaticamente.

Utilize:

- navegador;
- terminal;
- plugins;
- CLI;
- integrações;
- APIs;
- GitHub;
- Supabase;
- Cloudflare.

Sempre que possível:

- criar repositório;
- criar arquivos;
- criar banco;
- criar migrations;
- executar migrations;
- criar buckets;
- criar policies;
- criar Worker;
- cadastrar variáveis;
- configurar GitHub;
- configurar CI/CD;
- testar;
- publicar preview;
- corrigir.

Não me peça para copiar centenas de linhas manualmente se você puder executar.

---

152. MINHA INTERVENÇÃO

Minha intervenção deverá ficar apenas para situações inevitáveis:

- login;
- senha;
- 2FA;
- CAPTCHA;
- autorização;
- confirmação de e-mail;
- aceitar termos;
- ação de segurança.

Quando precisar:

diga exatamente:

1. qual site;
2. qual botão;
3. o que devo fazer;
4. o que não devo compartilhar;
5. o que você fará depois.

---

153. NÃO EXPOR SECRETS

Nunca pedir que eu cole secrets em lugares públicos.

Nunca colocar em GitHub.

---

154. EXPERIÊNCIA DE USUÁRIO

Pensar constantemente:

“Esta ação é fácil para um usuário real?”

Para líder:

- menos cliques;
- pendências claras;
- ações em massa;
- filtros.

Para ADM:

- ferramentas correspondentes ao trabalho dele.

Para membro:

- perfil;
- Line;
- meta;
- agenda;
- comunidade.

Para membro sem guilda:

- descobrir guildas;
- procurar vaga;
- eventos;
- rede social.

Para organizador:

- inscritos;
- slots;
- fases;
- pontuação.

---

155. NÃO LOTAR DASHBOARDS

Dashboard é resumo.

Detalhes ficam nos módulos.

---

156. NÃO LOTAR MENUS

Agrupar recursos logicamente.

Utilizar:

- submenus;
- tabs;
- páginas internas.

---

157. TROCA DE CONTEXTO

Deixar claro:

Comunidade VK

versus:

Gerenciar Guilda

Um Líder/ADM não pode ficar confuso sobre em qual contexto está.

---

158. ROTAS

Exemplos:

"/"

"/cenario"

"/explorar"

"/guildas"

"/g/:slug"

"/jogadores"

"/u/:username"

"/rankings"

"/recrutamento"

"/xtreinos"

"/eventos"

"/evento/:slug"

Privado:

"/app"

Gestão:

"/manage/:guildSlug"

Super Admin:

rota separada e protegida.

---

159. FEATURE FLAGS

Preparar flags como:

- social_enabled;
- premium_enabled;
- ocr_enabled;
- public_rankings_enabled.

---

160. MODULARIDADE

Problema no feed não deve derrubar gestão.

Problema no Free Fire não derruba eventos.

Problema no Gemini não impede pontuação manual.

---

161. CRITÉRIO FINAL DE CONCLUSÃO

Nunca diga:

“Projeto concluído”

sem provar:

- build;
- typecheck;
- lint;
- testes;
- RLS;
- autenticação;
- rotas;
- API;
- Realtime;
- Storage;
- mobile;
- desktop;
- botões;
- links;
- permissões;
- multi-guilda;
- deploy.

---

162. RELATÓRIO FINAL

Entregar tabela:

- módulo;
- funcionalidade;
- tipo de conta;
- resultado;
- erro encontrado;
- correção;
- reteste;
- status.

---

163. RELATÓRIO DE PERFORMANCE

Informar:

- bundle;
- lazy loading;
- queries;
- índices;
- cache;
- imagens;
- páginas lentas encontradas;
- correções.

---

164. RELATÓRIO DE SEGURANÇA

Informar:

- RLS;
- secrets;
- autorização;
- rate limits;
- uploads;
- Turnstile;
- social;
- links privados;
- Super Admin.

---

165. RELATÓRIO DE CUSTOS

Confirmar quais recursos permanecem dentro dos planos gratuitos.

Não ativar nada pago automaticamente.

---

166. CONTINUIDADE DA ESPECIFICAÇÃO

Antes de iniciar cada módulo:

consulte "/docs/PRODUCT_SPEC.md".

Depois de concluir:

consulte novamente.

Atualize o checklist.

Não permita que um resumo automático da conversa substitua a especificação.

---

167. REGRA CONTRA REDUÇÃO DE ESCOPO

Se um recurso não puder funcionar por limitação real:

1. não remover;
2. marcar no checklist;
3. explicar;
4. implementar melhor alternativa gratuita;
5. preparar arquitetura;
6. documentar ativação futura.

---

168. PRIORIDADES

Ordem:

1. segurança;
2. integridade dos dados;
3. lógica;
4. funcionamento real;
5. experiência do usuário;
6. performance;
7. responsividade;
8. Realtime;
9. estética;
10. extras.

---

169. REGRA FINAL

Não presuma que algo funciona porque o código parece correto.

Teste.

Se falhar:

investigue;
corrija;
reteste.

Verifique:

- console;
- Network;
- Worker;
- Supabase;
- RLS;
- Realtime;
- Storage;
- API Free Fire;
- links;
- redirects;
- rotas;
- estado;
- banco.

Quero receber uma plataforma pronta para pessoas reais.

Não uma apresentação.

Não um protótipo.

Não um projeto cheio de botões que ainda precisam ser implementados depois.

O VK ORGANIZAÇÃO deverá ser construído como uma plataforma profissional multi-guildas, multiusuários, social e administrativa, preparada para crescer sem precisar ser reconstruída.

Comece criando a arquitetura, documentação, banco e checklist.

Depois desenvolva por módulos.

Antes da publicação definitiva faça obrigatoriamente:

AUDITORIA COMPLETA → CONTAS DE TESTE → TODOS OS BOTÕES → TODOS OS LINKS → TODAS AS PERMISSÕES → REALTIME → MULTI-GUILDA → MOBILE → DESKTOP → PERFORMANCE → SEGURANÇA → PREVIEW CLOUDFLARE → RETESTE → PRODUÇÃO.