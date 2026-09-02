# Segurança e Privacidade — VK ORGANIZAÇÃO

**Status:** PLANEJADO; AINDA NÃO APROVADO  
**Princípio:** segurança, integridade dos dados e autorização server-side são prioridades superiores a conveniência visual.

## Modelo de defesa em profundidade

O cliente melhora a experiência, mas não decide acesso. O Supabase Auth identifica o usuário; o Worker valida entrada, sessão e contexto; o PostgreSQL aplica RLS; funções transacionais verificam permissões; logs registram mudanças relevantes. RLS e grants mínimos são obrigatórios para tabelas expostas [1].

| Vetor | Controle projetado | Evidência futura |
|---|---|---|
| Isolamento multi-guilda | `guild_id`, membership ativa, permission code, RLS e teste de chamada direta. | Teste Guilda A versus Guilda B. |
| IDOR | Identificador alvo sempre é confrontado com tenant, Line ou staff do evento. | Teste negativo por endpoint. |
| Escalada de privilégio | Cargo visual não basta; permissão é validada no banco e no Worker. | Matriz RBAC. |
| Sessões | Supabase Auth, expiração, refresh, logout e sessão persistente. | E2E Auth em preview. |
| CSRF e origem | Avaliação por tipo de sessão e mutação; allowlist de origem quando aplicável. | Testes de requisição. |
| XSS | Renderização segura, sanitização de conteúdo e URLs permitidas. | Teste de payload malicioso. |
| Upload | MIME, extensão, tamanho, dimensões, caminho controlado e Storage policy. | Teste Storage. |
| Abuso | Rate limits por rota, ação, IP e usuário; cooldown e logs. | Testes 429. |
| CAPTCHA | Turnstile somente para ações de risco, validado no servidor. | Teste Siteverify. |
| Segredos | Secrets no provedor, nunca no bundle, logs, Git ou respostas públicas. | Varredura e CI. |

## Dados públicos e privados

Perfis públicos podem exibir informações autorizadas pelo usuário. E-mail, telefone interno, advertências, notas administrativas, permissões, secrets e links privados não são campos de resposta pública. A mesma autorização vale para a interface, a API, exportação e Clipboard.

| Recurso | Acesso mínimo |
|---|---|
| Link geral da guilda | Somente membro aceito, quando a guilda assim configurar. |
| Link de Line | Membro da própria Line, capitão/vice ou liderança com permissão explícita. |
| Credencial de sala | Participante autorizado, somente na janela liberada. |
| Advertência | Liderança com permission code; nunca público. |
| Fila de denúncias | Super Admin autorizado. |
| Logs administrativos | Escopo de guilda e necessidade operacional; logs de plataforma só ao Super Admin. |

## Segredos e variáveis

| Variável | Classificação | Local de uso |
|---|---|---|
| `VITE_SUPABASE_URL` | Pública | Cliente. |
| `VITE_SUPABASE_ANON_KEY` | Pública com RLS obrigatório | Cliente. |
| `SUPABASE_SERVICE_ROLE_KEY` | Secreta | Worker e tarefas internas, nunca cliente. |
| `FREEFIRE_API_KEY` | Secreta | Worker Gateway VK. |
| `FREEFIRE_API_BASE_URL` | Configuração server-side | Worker Gateway VK. |
| `TURNSTILE_SECRET_KEY` | Secreta | Worker para Siteverify. |
| `VITE_TURNSTILE_SITE_KEY` | Pública | Cliente. |
| `CLOUDFLARE_API_TOKEN` | Secreta | CI/deploy com escopo mínimo. |

## Validação obrigatória

Antes de qualquer produção, testes automatizados e manuais devem provar que visitante não obtém link privado; membro de Line 1 não obtém link de Line 2; usuário da Guilda A não alcança dado administrativo da Guilda B; ADM sem permission code não muda meta; capitão não administra outra Line; organizador não altera evento alheio; e membro não acessa Super Admin. As tentativas usam interface e requisições diretas.

### Referências

[1]: https://supabase.com/docs/guides/database/postgres/row-level-security "Supabase Docs — Row Level Security"
