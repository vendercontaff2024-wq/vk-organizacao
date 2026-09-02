# Relatório de Testes — VK ORGANIZAÇÃO

**Situação inicial:** NÃO EXECUTADO. Não existe afirmação de funcionamento, integração ou aprovação antes da criação da infraestrutura, das contas de teste e das suites correspondentes.

| Área | Escopo de validação | Resultado | Defeito | Correção | Reteste | Estado |
|---|---|---|---|---|---|---|
| Build | Lint, typecheck, testes e build. | Não executado. | — | — | — | PENDENTE |
| Auth | Cadastro, e-mail, login, logout, recuperação e sessão. | Não executado. | — | — | — | PENDENTE |
| RLS | SELECT/INSERT/UPDATE/DELETE por papel e tenant. | Não executado. | — | — | — | PENDENTE |
| Multi-guilda | Guilda A isolada da Guilda B. | Não executado. | — | — | — | PENDENTE |
| Realtime | Duas sessões para Line, feed, candidatura e evento. | Não executado. | — | — | — | PENDENTE |
| UI | Todos os botões e links conforme matriz. | Não executado. | — | — | — | PENDENTE |
| API Free Fire | Sucesso, erros, cache, backoff e batch. | Não executado. | — | — | — | PENDENTE |
| Storage | Upload, política de bucket e links privados. | Não executado. | — | — | — | PENDENTE |
| Mobile/Desktop | Responsividade, teclado, menu, tabelas e modais. | Não executado. | — | — | — | PENDENTE |
| Preview | Worker, Supabase, PWA e redirects publicados. | Não executado. | — | — | — | PENDENTE |

## Registro de execução — 02/09/2026

| Área | Resultado | Evidência |
|---|---|---|
| Supabase Auth público | Aprovado | `server/supabase.credentials.test.ts` |
| Supabase Management API | Aprovado | `server/supabase.management.test.ts` |
| Foundation PostgreSQL | Aprovado | `server/supabase.foundation.test.ts` |
| RLS entre duas guildas | Aprovado | `server/supabase.isolation.test.ts` |
| `community_updates` cross-guild | Aprovado | `server/supabase.isolation.test.ts` |
| Publicação `supabase_realtime` | Aprovado estruturalmente | `server/supabase.foundation.test.ts` |
| Smoke test de navegação | Aprovado para CTAs cobertos | `scripts/e2e-smoke.mjs` |
| Typecheck e build local | Aprovados | `pnpm check`, `pnpm build` |
| Conector oficial Supabase | Pendente | Autorização recusada/interrompida; rota direta foi adotada |
| Realtime browser-to-browser | Pendente | Requer ponte de identidade Manus → Supabase Auth |
| Módulos completos de guilda | Pendente | Dashboard inicial ainda em expansão |
| Publicação | Bloqueada | Não executar antes da aprovação do checklist integral |

O smoke test navegou por clique para exploração, retornou ao início e confirmou a renderização protegida de `/app`. Os CTAs que iniciam login externo não são submetidos automaticamente a credenciais ou consentimentos; essa validação permanece um gate manual/assistido antes da publicação.
