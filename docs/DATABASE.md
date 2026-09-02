# Banco de Dados e Multi-tenancy — VK ORGANIZAÇÃO

**Status:** PLANEJADO PARA MIGRATIONS SUPABASE  
**Fonte normativa:** [Especificação-mãe](./PRODUCT_SPEC.md) e [Arquitetura](./ARCHITECTURE.md).

O PostgreSQL do Supabase será a fonte de verdade de identidade de domínio, relações de guilda, autorização, comunidade e resultados. A identidade de autenticação permanece em `auth.users`; as tabelas de produto relacionam-se a ela por UUID. Nenhum segredo, conteúdo binário ou URL assinada persistente será gravado em tabelas de negócio.

## Modelo por domínio

| Domínio | Tabelas previstas | Invariantes principais |
|---|---|---|
| Identidade | `profiles`, `profile_settings`, `ff_players` | Um perfil por usuário e um UID FF reivindicado por no máximo um perfil ativo. |
| Guilda e acesso | `guilds`, `guild_claims`, `guild_memberships`, `guild_roles`, `guild_role_permissions`, `guild_member_roles` | Todo dado administrativo alcança uma única guilda; cargo e permissão são independentes. |
| Lines e pessoas | `lines`, `line_members`, `line_links`, `guild_links`, `member_availability`, `member_absences` | Line pertence a uma guilda; link de Line não é público. |
| Desempenho | `goal_cycles`, `member_goals`, `member_goal_results`, `line_goal_results`, `guild_weekly_snapshots`, `achievements`, `warnings` | Snapshots encerrados são preservados; correções possuem antes/depois, motivo e autor. |
| Recrutamento | `recruitments`, `recruitment_applications`, `guild_invites` | Aceite de candidatura é transacional e cria vínculo, log e notificação. |
| Eventos | `events`, `event_staff`, `event_phases`, `event_slots`, `event_registrations`, `event_rosters`, `event_rounds`, `event_scores`, `event_player_scores`, `event_results` | Credenciais de sala só aparecem a participantes autorizados no momento liberado. |
| Comunidade | `posts`, `post_media`, `comments`, `reactions`, `follows`, `hashtags`, `post_hashtags`, `mentions`, `blocks`, `reports` | Ações sociais consideram bloqueios; mídia é referência ao Storage. |
| Plataforma | `notifications`, `announcements`, `polls`, `poll_options`, `poll_votes`, `activity_logs`, `audit_logs`, `plans`, `subscriptions`, `entitlements`, `sync_jobs`, `sync_logs`, `feature_flags` | Logs não são expostos sem filtro; Premium usa entitlement e nunca altera ranking. |

## Convenções obrigatórias

| Convenção | Regra |
|---|---|
| Chaves | UUID v7/UUID do Postgres, chaves estrangeiras explícitas e `on delete` decidido por domínio. |
| Tempo | `timestamptz` em UTC, `created_at`, `updated_at` e, quando necessário, `deleted_at`. |
| Exclusão | Soft delete para registros que exigem histórico; hard delete somente para dados descartáveis ou obrigação legal. |
| Tenant | Coluna `guild_id` indexada em tabelas administrativas ou relação inequívoca via chave estrangeira. |
| Entrada | Funções/RPC validam autor, estado atual e permissão; não há mass assignment. |
| Saída | Views públicas são `security_invoker` ou expostas via função/endpoints que respeitam RLS. |

## Estratégia de RLS

Toda tabela exposta no schema de API terá RLS habilitado, grants mínimos e policies específicas. O acesso de visitante será limitado a dados explicitamente públicos. Usuários autenticados só acessam perfil próprio e informações públicas; dados internos exigem vínculo ativo e permission code. A regra do banco replica a autorização no Worker, de modo que uma chamada direta não contorne o controle.

| Escopo | Predicado de leitura/alteração esperado |
|---|---|
| Perfil pessoal | `profile.id = auth.uid()` para alteração; campos públicos liberados apenas quando publicados. |
| Guilda pública | Leitura pública de colunas permitidas; alteração somente por `has_guild_permission(guild_id, ...)`. |
| Membership | Usuário lê o próprio vínculo; liderança lê vínculos da própria guilda com permissão adequada. |
| Line | Usuário lê Line pública ou a própria Line; recursos internos exigem `is_line_member` ou liderança autorizada. |
| Evento | Leitura pública por configuração; escrita por `event_staff` com papel compatível. |
| Admin da plataforma | Papel de plataforma separado e auditado; nunca inferido de cargo de guilda. |

As funções de policy serão estáveis, pequenas, com `security definer` somente quando justificado e com `search_path` fixo. As tabelas de membership, permissões e filtros usados em policy recebem índices. Cada policy terá testes de `SELECT`, `INSERT`, `UPDATE` e `DELETE` para usuário autorizado e não autorizado.

## Sequência de migrations

| Migration | Conteúdo | Gate |
|---|---|---|
| `0001_foundation` | Extensões, tipos, profiles, consentimento, funções comuns, índices e RLS básico. | Auth e perfil. |
| `0002_guild_tenancy` | Guildas, claims, memberships, cargos, permissions, logs e policies. | Isolamento Guilda A/B. |
| `0003_lines_members` | Lines, membros, links, disponibilidade, ausência e funções de movimentação. | Privacidade de Line. |
| `0004_goals_performance` | Ciclos, metas, resultados, snapshots, rankings e conquistas. | Fechamento atômico. |
| `0005_recruitment` | Anúncios, candidaturas, convites e transações de aceite. | Recrutamento E2E. |
| `0006_events` | Eventos, equipe, fases, slots, rodadas, pontuação e resultados. | Ranking e Realtime. |
| `0007_social` | Posts, mídia, comentários, interações, follows, blocks e reports. | Social e moderação. |
| `0008_platform` | Notificações, mural, enquetes, planos, entitlements, flags, sync e telemetria. | Super Admin e observabilidade. |

Nenhuma migration será aplicada manualmente pelo painel como substituto do repositório. Antes de cada aplicação, ela será revisada, executada em desenvolvimento, testada em preview e registrada no relatório.

## Índices e consultas

Os índices iniciais cobrem `guild_id`, `user_id`, `line_id`, `event_id`, estados, slugs únicos, UID FF, timestamps de feed e colunas de filtros de RLS. Consultas são projetadas com projeção explícita e paginação por cursor. Antes de criar índices adicionais, a necessidade será confirmada com plano de execução e fluxo real, evitando índices redundantes.
