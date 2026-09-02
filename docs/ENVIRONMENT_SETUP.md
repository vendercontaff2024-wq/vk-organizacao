# Registro Seguro de Variáveis — VK ORGANIZAÇÃO

Este documento lista somente **nomes e finalidades**. Valores reais são cadastrados por canal seguro no provedor correspondente e jamais são adicionados ao Git, ao bundle React, a logs ou ao chat.

| Nome | Classificação | Finalidade | Provedor de cadastro |
|---|---|---|---|
| `VITE_SUPABASE_URL` | Pública | URL do projeto Supabase no cliente. | Ambiente de build. |
| `VITE_SUPABASE_ANON_KEY` | Pública com RLS | Chave anônima do cliente; não substitui RLS. | Ambiente de build. |
| `SUPABASE_SERVICE_ROLE_KEY` | Secreta | Operações internas estritamente server-side. | Secret do Worker/CI. |
| `SUPABASE_PROJECT_REF` | Configuração | Referência do projeto para migrations/CI. | Secret ou variável protegida. |
| `FREEFIRE_API_BASE_URL` | Configuração server-side | Base do provedor recebido. | Secret do Worker. |
| `FREEFIRE_API_KEY` | Secreta | Chave da API Free Fire, nunca enviada ao cliente. | Secret do Worker. |
| `VITE_TURNSTILE_SITE_KEY` | Pública | Chave de site do desafio Turnstile. | Ambiente de build. |
| `TURNSTILE_SECRET_KEY` | Secreta | Verificação server-side do Turnstile. | Secret do Worker. |
| `CLOUDFLARE_ACCOUNT_ID` | Secreta | Conta Cloudflare usada por CI/deploy. | Secret do CI. |
| `CLOUDFLARE_API_TOKEN` | Secreta | Token Cloudflare com menor escopo possível. | Secret do CI. |

O template de `.env.example` solicitado na especificação será representado por este documento de nomes seguros, pois arquivos de ambiente são geridos pelo mecanismo seguro do projeto. Quando a integração estiver pronta, as variáveis reais serão registradas sem valores visíveis no repositório.

## Diagnóstico da conexão Supabase

O conector oficial Supabase permaneceu desativado porque o fluxo de autorização gerou uma sugestão de configuração que não foi aplicada: a operação foi recusada antes de alterar a configuração da sessão. Assim, a autorização do conector ainda está pendente e não deve ser marcada como concluída no checklist.

Como alternativa, foram configuradas credenciais protegidas diretamente no ambiente do projeto. A URL e a `anon/public key` correspondem ao projeto identificado pelo `SUPABASE_PROJECT_REF` cadastrado; os valores foram deliberadamente omitidos deste arquivo. O teste `server/supabase.credentials.test.ts` validou com sucesso o endpoint oficial `/auth/v1/settings`, sem imprimir URL completa, chave, token ou resposta sensível. Essa validação comprova o acesso básico à API Auth do projeto, mas não substitui a autorização do conector nem comprova ainda migrations, RLS, Storage ou Realtime.

O próximo gate é validar a chave administrativa server-side antes de executar migrations. A conexão oficial do conector só será considerada resolvida após uma autorização aceita e uma chamada de verificação bem-sucedida.
