# Ponte de identidade para Realtime

## Estado atual

A fundação Supabase usa `auth.uid()` nas funções `is_guild_member` e `has_guild_permission`. A aplicação web, por sua vez, inicia autenticação pelo Manus OAuth e recebe a sessão no servidor do template. Essas identidades não são automaticamente o mesmo JWT aceito pelo Supabase Auth.

Por isso, a assinatura direta de um canal privado Realtime pelo navegador está deliberadamente bloqueada nesta etapa. Usar a chave `service_role` no browser ou assinar canais apenas pelo `guild_id` permitiria contornar as policies e violaria o requisito de isolamento.

## Contrato necessário

A implementação final deve escolher uma ponte única e auditável: autenticar o usuário também no Supabase Auth com uma identidade estável vinculada ao `profiles.id`, ou manter o Realtime atrás de um gateway server-side que valide a sessão Manus, membership, papel e permissão antes de encaminhar eventos. Em ambos os casos, o navegador nunca recebe `service_role`.

| Gate | Estado |
|---|---|
| Tabela `community_updates` | Aplicada |
| RLS de leitura por guilda | Testado com duas sessões |
| Publicação `supabase_realtime` | Verificada |
| Assinatura privada no browser | Pendente da ponte de identidade |
| Evento same-guild e bloqueio cross-guild | Pendente da ponte |

A pendência é intencional e está refletida em `todo.md`; não é considerada falha de conectividade do Supabase.
