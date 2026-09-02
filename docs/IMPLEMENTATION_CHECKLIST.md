# Checklist Rastreável de Implementação — VK ORGANIZAÇÃO

**Status global:** EM DESENVOLVIMENTO  
**Regra de atualização:** cada requisito só transita de `PENDENTE` para `EM DESENVOLVIMENTO`, `IMPLEMENTADO`, `EM TESTE`, `TESTADO` e `APROVADO`. Problemas usam `BLOQUEADO` ou `CORREÇÃO NECESSÁRIA`, seguidos de `RETESTE`. Nenhum item é aprovado apenas por ter código escrito.

| Código | Requisito da especificação-mãe | Estado | Evidência exigida |
|---|---|---|---|
| SP-001 | Manter a especificação-mãe como fonte normativa durante todo o desenvolvimento. | EM TESTE | `docs/PRODUCT_SPEC.md` preservado e revisado em cada módulo. |
| SP-002 | Entregar aplicação real, segura, multiusuário, multi-guilda, responsiva, modular e testada. | PENDENTE | Auditoria final e relatório. |
| SP-003 | Unir gestão de guildas, rede social, recrutamento, Xtreinos/eventos e desempenho. | PENDENTE | Módulos integrados. |
| SP-004 | Usar a arquitetura moderna definida para frontend, backend, banco, auth, Realtime, arquivos, anti-bot, testes e publicação. | PENDENTE | Repositório, configuração e preview. |
| SP-005 | Manter TypeScript estrito e evitar `any` desnecessário. | PENDENTE | Typecheck e revisão. |
| SP-006 | Usar soluções gratuitas quando possível, sem habilitar cobranças sem autorização. | PENDENTE | Relatório de custos. |
| SP-007 | Obter, otimizar e versionar externamente a logo oficial e suas variações autorizadas. | PENDENTE | Assets e revisão visual. |
| SP-008 | Extrair tokens de cor da marca e aplicá-los com uso moderado do dourado. | PENDENTE | Design tokens e screenshots. |
| SP-009 | Manter estética sofisticada, gamer, minimalista, profissional e sem excesso de efeitos. | PENDENTE | Revisão visual e responsividade. |
| SP-010 | Usar ícones consistentes e emojis somente quando informativos. | PENDENTE | Revisão de interface. |
| SP-011 | Implementar experiência mobile-first e desktop completa, sem conteúdo cortado ou botões ocultos. | PENDENTE | Matriz de viewports. |
| SP-012 | Implementar PWA instalável, manifest, ícones, service worker, fallback e atualização segura. | PENDENTE | Teste PWA e auditoria de cache. |
| SP-013 | Implantar multi-tenancy desde a primeira migration e isolar dados privados por guilda. | PENDENTE | Schema, RLS e testes entre tenants. |
| SP-014 | Separar conta, perfil, jogador FF, guilda, vínculo, cargo, permissão, Premium e perfil público. | PENDENTE | Modelo de dados e testes. |
| SP-015 | Suportar visitante, membro sem guilda, membro, Premium, em teste, capitão/vice, ADM, líder, organizador e Super Admin. | PENDENTE | Contas de teste e matriz. |
| SP-016 | Permitir a um membro sem guilda usar perfil, social, feed, pesquisa, eventos, candidaturas, convites e status procurando guilda. | PENDENTE | E2E de membro sem guilda. |
| SP-017 | Implementar permissões granulares, distintas de cargos visuais. | PENDENTE | Tabelas, policies e testes diretos. |
| SP-018 | Implementar Supabase Auth com cadastro, e-mail, login, logout, recuperação, troca de senha, sessão e erros. | PENDENTE | Teste Auth em preview. |
| SP-019 | Cadastrar jogador por e-mail, senha e UID FF, consultar nick, confirmar e impedir reivindicação duplicada. | PENDENTE | Fluxo E2E e constraint. |
| SP-020 | Criar username VK permanente e independente do nick Free Fire. | PENDENTE | Profile schema e teste. |
| SP-021 | Criar perfil público de jogador sem vazar e-mail, notas, permissões ou dados privados. | PENDENTE | Policies e teste de visitante. |
| SP-022 | Tornar avatar, nick e username clicáveis para perfil nos contextos apropriados. | PENDENTE | Matriz de links. |
| SP-023 | Criar perfil público de guilda com abas e campos configuráveis autorizados. | PENDENTE | Teste de perfil público. |
| SP-024 | Tornar nome e logo da guilda clicáveis nos contextos apropriados. | PENDENTE | Matriz de links. |
| SP-025 | Exibir e copiar ID público de guilda sem substituir a ação por compartilhamento. | PENDENTE | Teste Clipboard. |
| SP-026 | Implementar links de guilda com tipo, visibilidade, estado e proteção de endpoint. | PENDENTE | RLS e testes de links privados. |
| SP-027 | Implementar links privados de Line e atualizar acesso ao mover membro. | PENDENTE | Teste Line A/Line B. |
| SP-028 | Implementar perfil de Line com exposição pública configurável e sem links privados. | PENDENTE | Teste de visibilidade. |
| SP-029 | Implementar links sociais de perfil opcionais, validados e sanitizados. | PENDENTE | Validação e matriz de links. |
| SP-030 | Implementar todas as ações de copiar listadas na especificação com autorização equivalente. | PENDENTE | Matriz de ações e Clipboard fallback. |
| SP-031 | Criar área pública com menu, rotas e acesso contínuo após login. | PENDENTE | Teste de navegação pública. |
| SP-032 | Criar home profissional com apresentação, benefícios e conteúdo real ou estados vazios. | PENDENTE | Teste visual e dados reais. |
| SP-033 | Criar feed central com filtros Para Você, Seguindo, Guildas, Jogadores e Eventos. | PENDENTE | Testes de consulta/paginação. |
| SP-034 | Implementar posts pessoais e oficiais com mídia, edição, exclusão, arquivo, hashtags e cursor pagination. | PENDENTE | E2E social. |
| SP-035 | Permitir publicação em nome de guilda somente com permissão e registrar o autor interno. | PENDENTE | RBAC e audit log. |
| SP-036 | Implementar curtidas, descurtidas, contador, UI otimista e sincronização. | PENDENTE | Teste unitário e Realtime. |
| SP-037 | Implementar comentários, respostas limitadas, exclusão própria, moderação, denúncia e menções. | PENDENTE | E2E e moderação. |
| SP-038 | Implementar seguir/deixar de seguir jogadores e guildas com notificações. | PENDENTE | E2E e Realtime. |
| SP-039 | Implementar bloqueio e respeitá-lo em feed, comentários, menções e interações. | PENDENTE | Testes de isolamento social. |
| SP-040 | Implementar denúncias de perfil, guilda, post, comentário e evento para fila Super Admin. | PENDENTE | Teste de fila e autorização. |
| SP-041 | Criar explorar com guildas, jogadores, eventos, recrutamentos e publicações sem algoritmo inicial complexo. | PENDENTE | Teste de listagens. |
| SP-042 | Criar busca global indexada, com debounce, paginação e sem chamada externa por tecla. | PENDENTE | Teste de rede e índices. |
| SP-043 | Exibir guilda não reivindicada e permitir solicitar reivindicação sem criar administração falsa. | PENDENTE | E2E de busca/claim. |
| SP-044 | Exibir jogador não reivindicado com dados públicos disponíveis. | PENDENTE | Teste de perfil externo. |
| SP-045 | Implementar reivindicação segura de guilda por ID, UID do líder e validações. | PENDENTE | Fluxo de claim e auditoria. |
| SP-046 | Implementar transferência segura de liderança com autenticação recente, confirmação e log. | PENDENTE | Teste transacional. |
| SP-047 | Suportar todos os estados de membro e preservar histórico. | PENDENTE | Schema e testes de transição. |
| SP-048 | Implementar período de teste com efetivação, rejeição e encerramento. | PENDENTE | E2E recrutamento. |
| SP-049 | Criar dashboard do membro com resumo de meta, Line, agenda, eventos e notificações. | PENDENTE | Teste de painel. |
| SP-050 | Criar dashboard do membro sem guilda com descobertas e convites. | PENDENTE | Teste de painel. |
| SP-051 | Preparar Premium por entitlements, sem vender vantagem competitiva. | PENDENTE | Schema e testes. |
| SP-052 | Exibir gestão da guilda ao ADM apenas conforme permissões. | PENDENTE | Matriz RBAC. |
| SP-053 | Dar ao líder gestão total apenas da própria guilda. | PENDENTE | Teste multi-guilda. |
| SP-054 | Limitar capitão/vice a permissões da própria Line quando aplicável. | PENDENTE | Teste de Line. |
| SP-055 | Criar central de pendências com solicitações, metas, Lines e sincronizações. | PENDENTE | Teste de consultas. |
| SP-056 | Criar ficha completa de membros com campos permitidos e histórico. | PENDENTE | RBAC e UX. |
| SP-057 | Incluir funções iniciais e permitir personalização futura. | PENDENTE | Schema e interface. |
| SP-058 | Criar, editar, reordenar, desativar e movimentar Lines preservando histórico. | PENDENTE | E2E e audit log. |
| SP-059 | Alertar composição de Line sem bloquear arbitrariamente. | PENDENTE | Regras e teste UI. |
| SP-060 | Permitir membro informar disponibilidade e liderança consultar. | PENDENTE | RBAC e E2E. |
| SP-061 | Permitir ausência com período, motivo opcional e retorno previsto. | PENDENTE | E2E. |
| SP-062 | Implementar presença com todos os estados definidos. | PENDENTE | E2E e Realtime. |
| SP-063 | Implementar metas geral, Honra, Guerra, individual, exceções e períodos. | PENDENTE | Testes de domínio. |
| SP-064 | Registrar resultado semanal com todos os cálculos e posição. | PENDENTE | Teste de cálculo. |
| SP-065 | Fechar semana com snapshot e correção auditada. | PENDENTE | Teste transacional. |
| SP-066 | Criar rankings internos individuais e por Line com filtros temporais. | PENDENTE | Consultas e UI. |
| SP-067 | Exibir desempenho público do jogador somente quando permitido. | PENDENTE | RLS e teste de privacidade. |
| SP-068 | Exibir desempenho público da guilda somente quando permitido. | PENDENTE | RLS e teste de privacidade. |
| SP-069 | Comparar guildas com origem de cada dado identificada. | PENDENTE | Teste de comparação. |
| SP-070 | Preservar temporadas semanais, mensais, VK e históricas. | PENDENTE | Migrations e testes. |
| SP-071 | Implementar conquistas de jogador e guilda, distinguindo verificadas/manuais. | PENDENTE | Testes de entidade. |
| SP-072 | Implementar advertências privadas com níveis, responsável e histórico. | PENDENTE | RLS e RBAC. |
| SP-073 | Criar área pública de recrutamento para guildas e jogadores. | PENDENTE | Navegação e consultas. |
| SP-074 | Criar anúncio de recrutamento com todos os campos e status. | PENDENTE | Formulário e RBAC. |
| SP-075 | Implementar todos os estados de candidatura. | PENDENTE | Máquina de estados. |
| SP-076 | Implementar convite a jogador sem guilda com aceitar/recusar. | PENDENTE | E2E e transação. |
| SP-077 | Criar arquitetura unificada de eventos para Xtreino, CS/Campeonato e outros. | PENDENTE | Schema e fluxos. |
| SP-078 | Implementar papéis por evento sem exigir ADM da guilda. | PENDENTE | RBAC de evento. |
| SP-079 | Implementar fases de evento com data, quedas e regras. | PENDENTE | E2E de evento. |
| SP-080 | Implementar slots configuráveis, padrão 12, com roster e status. | PENDENTE | Teste de slots. |
| SP-081 | Implementar inscrições SOLO e LINE/SQUAD com estados definidos. | PENDENTE | E2E inscrição. |
| SP-082 | Proteger ID e senha da sala por autorização e momento de liberação. | PENDENTE | Teste de endpoint. |
| SP-083 | Registrar colocação, kills, pontos, penalidade e ajuste. | PENDENTE | Testes de score. |
| SP-084 | Implementar quedas e somatória automática. | PENDENTE | Testes de cálculo. |
| SP-085 | Incluir dados individuais, MVP e top fragger quando houver. | PENDENTE | Teste de resultados. |
| SP-086 | Atualizar ranking ao vivo entre dispositivos sem F5. | PENDENTE | Teste Realtime. |
| SP-087 | Implementar OCR Gemini com prévia e confirmação humana antes de salvar. | PENDENTE | Teste integrado e feature flag. |
| SP-088 | Preservar histórico completo de eventos. | PENDENTE | Consultas e retenção. |
| SP-089 | Criar página clicável de evento com dados públicos autorizados. | PENDENTE | Matriz de links. |
| SP-090 | Implementar calendário de guilda e agenda filtrada por membro. | PENDENTE | Testes de visibilidade. |
| SP-091 | Implementar mural com avisos normal, importante e fixado. | PENDENTE | RBAC e UI. |
| SP-092 | Implementar enquetes internas. | PENDENTE | RLS e E2E. |
| SP-093 | Implementar notificações social, guilda, eventos, administração e sistema. | PENDENTE | Realtime e testes. |
| SP-094 | Registrar log de atividades relevantes. | PENDENTE | Audit test. |
| SP-095 | Usar exclusivamente a API Free Fire recebida e seu README. | PENDENTE | Gateway e contratos. |
| SP-096 | Manter chave Free Fire exclusivamente em secret server-side. | PENDENTE | Varredura e configuração. |
| SP-097 | Implementar endpoints internos do Gateway VK e impedir chamada direta pelo frontend. | PENDENTE | Testes API. |
| SP-098 | Normalizar PlayerInfo para modelo interno. | PENDENTE | Testes de adapter. |
| SP-099 | Normalizar GuildInfo para modelo interno. | PENDENTE | Testes de adapter. |
| SP-100 | Respeitar rate limit da API com fila, cache, retry, backoff e tratamento de erro. | PENDENTE | Teste de erro/API. |
| SP-101 | Cachear consultas Free Fire, mostrar idade e aplicar cooldown de atualização. | PENDENTE | Teste de cache. |
| SP-102 | Atualizar membros em massa com progresso e sem travar UI. | PENDENTE | Teste batch. |
| SP-103 | Alertar possível saída de guilda sem remover automaticamente. | PENDENTE | Teste de sincronização. |
| SP-104 | Manter o sistema funcional em modo degradado quando a API Free Fire cair. | PENDENTE | Teste API offline. |
| SP-105 | Aplicar Realtime a mudanças importantes entre dispositivos. | PENDENTE | Duas sessões. |
| SP-106 | Construir performance desde início com lazy loading, cache, cursor, índices e subscriptions seletivas. | PENDENTE | Relatório de performance. |
| SP-107 | Garantir boa experiência em Android intermediário, sem efeitos/pesos excessivos. | PENDENTE | Teste mobile. |
| SP-108 | Investigar páginas críticas por Core Web Vitals, resposta e estabilidade. | PENDENTE | Medições registradas. |
| SP-109 | Implementar skeleton, loading local, estado vazio, erro e retry sem tela preta. | PENDENTE | Testes UI. |
| SP-110 | Usar UI otimista somente quando reversível e com rollback explicado. | PENDENTE | Testes de mutação. |
| SP-111 | Preservar contexto e rolagem na navegação quando apropriado. | PENDENTE | E2E navegação. |
| SP-112 | Modelar todas as entidades de banco listadas ou alternativa documentada sem remover requisitos. | PENDENTE | `docs/DATABASE.md`. |
| SP-113 | Reproduzir banco, roles e policies por migrations. | PENDENTE | Migrations aplicadas em preview. |
| SP-114 | Ativar e testar RLS em todas as tabelas expostas para todos os papéis e operações. | PENDENTE | Testes SQL/RLS. |
| SP-115 | Testar privacidade de links por Line, guilda, estado de membro e chamada direta. | PENDENTE | Testes negativos. |
| SP-116 | Tornar operações críticas atômicas. | PENDENTE | Testes transacionais. |
| SP-117 | Aplicar soft delete e preservação de histórico quando apropriado. | PENDENTE | Schema e testes. |
| SP-118 | Validar, comprimir e armazenar imagens sem Base64 no PostgreSQL. | PENDENTE | Testes Storage. |
| SP-119 | Proteger XSS, CSRF aplicável, abuso, spam, flood, uploads, IDOR, escalada e secrets. | PENDENTE | Relatório de segurança. |
| SP-120 | Usar Turnstile somente em ações sensíveis e validá-lo no servidor. | PENDENTE | Teste de validação. |
| SP-121 | Aplicar rate limit às ações públicas e sensíveis listadas. | PENDENTE | Testes de limite. |
| SP-122 | Criar área Super Admin isolada com todos os recursos de governança indicados. | PENDENTE | RBAC e matriz UI. |
| SP-123 | Preparar plans, subscriptions e entitlements sem cobrança obrigatória. | PENDENTE | Schema e feature flag. |
| SP-124 | Criar Termos de Uso reais na rota definida. | PENDENTE | Link e revisão. |
| SP-125 | Criar Política de Privacidade real na rota definida, sem prometer segurança absoluta. | PENDENTE | Link e revisão. |
| SP-126 | Registrar consentimento e versão de termos/privacidade quando apropriado. | PENDENTE | Teste de cadastro. |
| SP-127 | Criar rodapé global configurado, minimalista e sem URLs inventadas. | PENDENTE | Matriz de links. |
| SP-128 | Exibir rodapé discreto também em áreas autenticadas. | PENDENTE | Teste mobile/desktop. |
| SP-129 | Criar repositório privado `vk-organizacao` com estrutura profissional e sem secrets. | PENDENTE | Repositório GitHub. |
| SP-130 | Criar CI/CD com install, lint, typecheck, testes e build; bloquear deploy com falha. | PENDENTE | Workflow e execução verde. |
| SP-131 | Usar local, preview/staging e banco de desenvolvimento antes de produção. | PENDENTE | Registro de ambientes. |
| SP-132 | Criar todas as contas de teste e ao menos duas guildas de teste isoladas. | PENDENTE | Inventário de homologação. |
| SP-133 | Testar todos os botões, menus, formulários, cópias e trocas de contexto antes de publicar. | PENDENTE | `UI_ACTION_MATRIX.md`. |
| SP-134 | Registrar página, ação, conta, esperado, real, bug, correção e reteste na matriz UI. | PENDENTE | Documento preenchido. |
| SP-135 | Testar especificamente os links de jogador, guilda, Line e evento sem links quebrados. | PENDENTE | Matriz de links. |
| SP-136 | Testar permissões por requisições diretas, além da ocultação de UI. | PENDENTE | Testes API/RLS negativos. |
| SP-137 | Testar duas guildas de usuários diferentes e ausência de vazamento administrativo. | PENDENTE | Relatório multi-tenant. |
| SP-138 | Testar Realtime em duas sessões para Line, comentário, notificação, ranking, candidatura e follow. | PENDENTE | Evidência de duas sessões. |
| SP-139 | Testar múltiplos dispositivos/janelas e viewport mobile. | PENDENTE | Registro de homologação. |
| SP-140 | Automatizar os fluxos prioritários com Playwright. | PENDENTE | Suite E2E. |
| SP-141 | Testar API Free Fire para dados válidos, inválidos, falhas, cache, retry e batch. | PENDENTE | Suite de integração. |
| SP-142 | Testar conexão lenta, offline, retorno, reconexão e duplicidade. | PENDENTE | E2E de rede. |
| SP-143 | Testar duplo clique em comandos críticos sem dados duplicados. | PENDENTE | Testes idempotentes. |
| SP-144 | Medir e corrigir performance de bundles, consultas, imagens e subscriptions. | PENDENTE | `TEST_REPORT.md`. |
| SP-145 | Testar menu, rolagem, formulários, modais, tabelas, teclado e imagens em mobile. | PENDENTE | Matriz mobile. |
| SP-146 | Testar alinhamento, sidebar, tabelas, gráficos e modais em desktop. | PENDENTE | Matriz desktop. |
| SP-147 | Fazer lint, typecheck, testes e build passarem sem ignorar warnings relevantes. | PENDENTE | Logs CI. |
| SP-148 | Repetir testes críticos em Cloudflare preview antes de produção. | PENDENTE | Relatório preview. |
| SP-149 | Garantir que todo botão age, navega, abre interface ou explica desabilitação. | PENDENTE | Matriz UI completa. |
| SP-150 | Não exibir mocks, números, usuários, guildas ou resultados fictícios em produção. | PENDENTE | Revisão de produção. |
| SP-151 | Usar error boundaries e impedir tela preta. | PENDENTE | Testes de erro. |
| SP-152 | Registrar erros importantes e expor saúde segura ao Super Admin. | PENDENTE | Observabilidade. |
| SP-153 | Manter os oito documentos obrigatórios de arquitetura, API, banco, segurança, deploy, UI e testes. | EM DESENVOLVIMENTO | `docs/` e revisão. |
| SP-154 | Implementar fases 1 a 17 sem avançar por presunção. | EM DESENVOLVIMENTO | Checklist e gates por fase. |
| SP-155 | Automatizar operações possíveis e pedir intervenção somente para login, 2FA, CAPTCHA ou autorização inevitável. | PENDENTE | Registro de execução. |
| SP-156 | Não expor ou solicitar secrets em locais públicos. | PENDENTE | Revisão de segurança. |
| SP-157 | Projetar UX com poucos cliques, pendências claras, filtros e ferramentas adequadas a cada papel. | PENDENTE | Testes de usabilidade. |
| SP-158 | Manter dashboards como resumo e detalhes em módulos. | PENDENTE | Revisão de IA. |
| SP-159 | Agrupar menus com submenus, tabs e páginas internas, sem sobrecarga. | PENDENTE | Teste de navegação. |
| SP-160 | Comunicar claramente Comunidade VK versus Gerenciar Guilda. | PENDENTE | Teste UX. |
| SP-161 | Implementar as rotas públicas, privadas, gestão e Super Admin indicadas. | PENDENTE | Teste de rotas. |
| SP-162 | Preparar feature flags social, Premium, OCR e rankings públicos. | PENDENTE | Schema e interface administrativa. |
| SP-163 | Isolar falhas entre feed, gestão, Free Fire, eventos e OCR. | PENDENTE | Testes de modo degradado. |
| SP-164 | Só declarar conclusão após evidência de build, segurança, RLS, Auth, rotas, API, Realtime, Storage, UI e deploy. | PENDENTE | Auditoria final. |
| SP-165 | Entregar relatório final por módulo, funcionalidade, tipo de conta, erro, correção e reteste. | PENDENTE | `TEST_REPORT.md`. |
| SP-166 | Entregar relatório de performance com bundle, queries, índices, cache, imagens e correções. | PENDENTE | Relatório de performance. |
| SP-167 | Entregar relatório de segurança com RLS, secrets, autorização, rate limits, uploads, Turnstile e Super Admin. | PENDENTE | Relatório de segurança. |
| SP-168 | Entregar relatório de custos e confirmar recursos gratuitos, sem ativação automática paga. | PENDENTE | Relatório de custos. |
| SP-169 | Executar auditoria completa, contas de teste, UI, links, permissões, Realtime, multi-guilda, mobile, desktop, segurança, preview e reteste antes de produção. | PENDENTE | Gate de publicação assinado. |

## Gate de publicação

| Condição de bloqueio | Situação atual |
|---|---|
| Todos os itens críticos em `APROVADO` | BLOQUEADO — implementação ainda não iniciada. |
| Nenhum item em `BLOQUEADO` ou `CORREÇÃO NECESSÁRIA` | BLOQUEADO — auditoria futura obrigatória. |
| Testes de RLS, permissões e isolamento multi-guilda concluídos | BLOQUEADO — infraestrutura Supabase ainda não configurada. |
| Contas de teste e matriz UI completas | BLOQUEADO — serão criadas antes de preview. |
| Preview Cloudflare validado e retestado | BLOQUEADO — publicação não solicitada nem iniciada. |

> A ausência de aprovação neste documento é intencional. Código, interface ou documentação sem evidência de teste não recebem status `APROVADO`.
