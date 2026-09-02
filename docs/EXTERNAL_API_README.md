# API v2 - Guild Info & Player Info

API para consultar informações de guildas e jogadores do Free Fire.

**API Key:** `VK` (obrigatória via parâmetro `key`)

**Rate Limit:** 100 requisições por minuto por API Key.

---

## `/api/v2/guildinfo/<region>`

**Parâmetros:** `key` (obrigatório), `guildID` (obrigatório), `region` (obrigatório: `br`/`ind`/`sg`)

```
GET /api/v2/guildinfo/br?key=VK&guildID=123456
```

**Resposta 200 (exemplo fictício):**
```json
{
  "id": "100123",
  "nome": "GAMERS_CLUB",
  "criadoEm": "1550000000",
  "donoId": "500001",
  "nivel": 10,
  "limiteMembros": 80,
  "membrosAtuais": 72,
  "descricao": "Clube dos gamers",
  "regiao": "BR",
  "viceLideres": "[700002,700003]",
  "atualizadoEm": "1700000000",
  "totalHonra": "5550000",
  "honraSemanal": "8000"
}
```

**Erros:**
- `400` `{"status":"error","message":"Invalid region"}`
- `401` `{"status":"error","message":"Invalid API key"}`
- `400` `{"status":"error","message":"Missing guildID"}`
- `429` `{"status":"error","message":"Rate limit exceeded. Try again later."}`
- `500` `{"status":"error","message":"Failed to get JWT token"}`

---

## `/api/v2/playerinfo/<region>`

**Parâmetros:** `key` (obrigatório), `player_id` (obrigatório), `region` (obrigatório)

```
GET /api/v2/playerinfo/br?key=VK&player_id=123456789
```

**Resposta 200 (exemplo fictício):**
```json
{
  "basicInfo": {
    "accountId": "123456789",
    "nickname": "PlayerExemplo",
    "region": "BR",
    "level": 42,
    "exp": "1234567",
    "bannerId": "900000001",
    "rank": 250,
    "rankingPoints": 5400,
    "badgeCnt": 30,
    "badgeId": "900000000",
    "seasonId": 40,
    "liked": 5000,
    "lastLoginAt": "1699999999",
    "csRank": 200,
    "csRankingPoints": 3000,
    "maxRank": 260,
    "csMaxRank": 210,
    "createAt": "1500000000",
    "title": "900000000",
    "releaseVersion": "OB54"
  },
  "profileInfo": {
    "avatarId": "900000001",
    "clothes": ["900000010", "900000011"],
    "equipedSkills": [{"slotId": 1, "skillId": 900}]
  },
  "clanBasicInfo": {
    "clanId": "100123",
    "clanName": "GAMERS_CLUB",
    "clanLevel": 10,
    "memberNum": 72
  }
}
```

**Erros:**
- `400` `{"status":"error","message":"Invalid region: xx"}`
- `401` `{"status":"error","message":"Invalid or missing API key"}`
- `400` `{"status":"error","message":"Missing or invalid 'player_id'"}`
- `429` `{"status":"error","message":"Rate limit exceeded. Try again later."}`
- `500` `{"status":"error","message":"Failed to retrieve JWT token"}`

---

## Erros comuns

**Falha na API da Garena** (com detalhes):
```json
{
  "status": "error",
  "message": "API request failed: 400",
  "error_detail": {
    "proto_decoded": "...",
    "text_decoded": "...",
    "raw_hex": "...",
    "response_headers": {},
    "content_length": 0
  },
  "timestamp": "2026-08-31 12:00:00"
}
```

**Erro inesperado:**
```json
{
  "status": "error",
  "message": "Unexpected error: ...",
  "timestamp": "2026-08-31 12:00:00"
}
```
