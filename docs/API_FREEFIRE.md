# Contrato da API Free Fire

Esta página preserva o contrato recebido em `README.md` e define seu uso interno. O provedor é `https://valk.kl7z.space/`; a plataforma não o chama pelo navegador. A chave fornecida permanece em `FREEFIRE_API_KEY` no ambiente server-side e a base em `FREEFIRE_API_BASE_URL`.

| Recurso do provedor | Entrada | Saída normalizada no VK |
|---|---|---|
| `GET /api/v2/playerinfo/:region` | `key`, `player_id` e região | `playerId`, `nickname`, `region`, nível, avatar, último login e dados de clã. |
| `GET /api/v2/guildinfo/:region` | `key`, `guildID` e região | `guildId`, nome, proprietário, nível, membros, descrição, honra e atualização. |

O gateway interno será o único consumidor do provedor e exporá endpoints autenticados e validados definidos pela especificação-mãe. Ele aplicará cache, deduplicação, timeout, cooldown, retry com backoff e tratamento explícito para 400, 401, 429 e 500. A documentação original recebida está em `README.md` do material de entrada; nenhuma API substituta será adotada sem autorização.
