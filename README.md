# VK ORGANIZAÇÃO

Plataforma multi-guilda para gestão de comunidades de jogadores, comunidade social, recrutamento, Xtreinos, eventos, rankings e desempenho.

O projeto está em **fase de arquitetura e documentação**. Nenhuma publicação, ambiente de produção, migration Supabase ou configuração Cloudflare foi executada. O desenvolvimento seguirá a [especificação-mãe](docs/PRODUCT_SPEC.md), o [checklist rastreável](docs/IMPLEMENTATION_CHECKLIST.md) e os gates de qualidade registrados em [deploy](docs/DEPLOYMENT.md).

| Documento | Finalidade |
|---|---|
| [Arquitetura](docs/ARCHITECTURE.md) | Decisões de frontend, Worker, Supabase, RLS e Realtime. |
| [Banco](docs/DATABASE.md) | Domínios, migrations e isolamento multi-guilda. |
| [Segurança](docs/SECURITY.md) | Defesa em profundidade, links privados e secrets. |
| [API Free Fire](docs/API_FREEFIRE.md) | Contrato do gateway e integração externa. |
| [Checklist](docs/IMPLEMENTATION_CHECKLIST.md) | Estados verificáveis de cada requisito. |
| [Matriz UI](docs/UI_ACTION_MATRIX.md) | Registro de cada botão, link e resultado observado. |
| [Relatório de testes](docs/TEST_REPORT.md) | Evidências, falhas, correções e retestes. |

## Princípios de entrega

O repositório será privado. Secrets não são versionados. O acesso é decidido no banco e no backend, não apenas na interface. A produção permanece bloqueada até concluir contas de teste, RLS, permissões, Realtime, testes mobile/desktop, preview Cloudflare e reteste.
