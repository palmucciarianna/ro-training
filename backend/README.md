# Backend AI di RO Training – v12

API Node.js/Express per le correzioni AI del sito. La chiave API resta esclusivamente nelle variabili d'ambiente del server.

## Requisiti
- Node.js 20 o superiore e npm
- Progetto API OpenAI con fatturazione/credito configurato
- Un modello Responses API effettivamente abilitato nel progetto

## Avvio locale (macOS)
Apri Terminale nella cartella `backend`:

```bash
node -v
npm -v
npm install
cp .env.example .env
```

Apri `.env` con un editor e inserisci `OPENAI_API_KEY`. Lascia `ALLOWED_ORIGINS` con la porta del server statico locale (Live Server, normalmente `http://127.0.0.1:5500` oppure `http://localhost:5500`). Non incollare la chiave in chat e non committare `.env`.

Avvia:

```bash
npm run dev
```

In un altro terminale controlla:

```bash
curl http://localhost:3000/health
```

Con chiave configurata deve comparire `"ok":true` e `"aiConfigured":true`. Senza chiave, il backend può avviarsi ma `/api/review` restituisce 503.

## Collegare il frontend locale
Servi la cartella principale del sito con VS Code Live Server o un server statico equivalente. In `config.js` imposta temporaneamente:

```js
window.RO_API_BASE = "http://localhost:3000";
```

Apri il sito tramite l'indirizzo HTTP del server statico, non con `file://`. La richiesta usa `POST /api/review` con JSON `{ "prompt": "..." }` e riceve `{ "review": "..." }`.

## Deploy
Pubblica SOLO la cartella `backend/` su un host Node.js. Imposta nel pannello del servizio queste variabili:

- `OPENAI_API_KEY`: segreto API, mai nel repository;
- `OPENAI_MODEL`: nome di un modello disponibile nel progetto API;
- `ALLOWED_ORIGINS`: origine esatta del sito, ad esempio `https://NOMEUTENTE.github.io` (non aggiungere il percorso `/ro-training`);
- `REVIEW_RATE_LIMIT`: numero massimo di richieste per IP in un'ora (default 20).

Il servizio deve eseguire `npm install` e `npm start`. Dopo il deploy, visita `https://URL-BACKEND/health`. Poi imposta in `config.js` l'URL HTTPS effettivo:

```js
window.RO_API_BASE = "https://URL-BACKEND";
```

## Limiti e sicurezza
- Il limite è per IP, non per singolo studente: NAT e reti condivise possono condividere il limite. Non è un sistema anti-abuso completo.
- CORS limita le origini browser, ma non è autenticazione: chiamate server-to-server possono aggirarlo. Prima di distribuire pubblicamente a molti utenti aggiungere un codice d'accesso/token, quote globali e monitoraggio costi.
- Il backend non salva prompt, risposte o progressi in un database. I progressi rimangono nel `localStorage` di ciascun browser.
- Le richieste inviate al modello sono soggette alle condizioni e impostazioni di conservazione del servizio API.
- Se il modello configurato non è abilitato, l'API restituirà un errore: impostare un modello supportato dal proprio progetto.
