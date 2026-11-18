# Pubblicare RO Training con GitHub Pages

Questa guida pubblica il sito con un indirizzo simile a:

`https://TUO-USERNAME.github.io/ro-training/`

## Prima di pubblicare: controlla i diritti sui PDF

GitHub Pages pubblica i file del repository sul web. Se nel repository sono presenti testi d'esame, soluzioni o dispense, chiunque potrebbe scaricarli.

- Verifica che la loro ridistribuzione sia consentita.
- Se non hai autorizzazione, rimuovi dal repository pubblico le cartelle `pdf/` e/o `materiali/` e distribuisci quei documenti separatamente alle persone autorizzate.
- Non caricare dati personali, credenziali o chiavi API.

Se rimuovi cartelle referenziate dal sito, le relative sezioni non potranno mostrare quei documenti finché non saranno resi disponibili in un percorso autorizzato.

## Metodo consigliato: GitHub Pages

### 1. Crea il repository
1. Vai su https://github.com/new
2. Nome consigliato: `ro-training`
3. Seleziona **Public** solo se vuoi che il codice e tutti i file inclusi siano pubblici.
4. Crea il repository.

### 2. Carica il progetto
Dal Mac, apri Terminale nella cartella `RO_Training_Completo` estratta dallo ZIP e lancia:

```bash
git init
git add .
git commit -m "Prima versione di RO Training"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/ro-training.git
git push -u origin main
```

Sostituisci `TUO-USERNAME` con il tuo username GitHub. Se il repository esiste già, non ripetere `git remote add origin`: controlla prima `git remote -v`.

### 3. Attiva GitHub Pages
1. Apri il repository su GitHub.
2. Vai in **Settings → Pages**.
3. In **Build and deployment**, scegli **Deploy from a branch**.
4. Seleziona branch `main` e cartella `/ (root)`.
5. Premi **Save**.

GitHub pubblicherà `index.html`. Dopo qualche minuto, l'indirizzo sarà:

`https://TUO-USERNAME.github.io/ro-training/`

### 4. Condividi il link
Invia il link ai tuoi amici. Ognuno avrà i propri progressi nel browser che usa.

## Collegare la correzione AI

GitHub Pages ospita solo il frontend statico: il backend Node.js va pubblicato separatamente su un servizio che esegua Node.js.

1. Segui `backend/README.md` per provare il backend in locale.
2. Pubblica la cartella `backend/` su un host Node.js.
3. Configura sul servizio la variabile segreta `OPENAI_API_KEY`, oltre a `OPENAI_MODEL` e `ALLOWED_ORIGINS`.
4. In `config.js`, imposta `window.RO_API_BASE` con l'URL HTTPS del backend.
5. Aggiorna il repository: il pulsante «Correggi con AI» contatterà il backend.

Non caricare mai `.env` su GitHub. Il backend applica un limite iniziale di richieste per IP, ma prima di diffonderlo a molte persone è opportuno configurare anche quote globali e monitoraggio dei costi.

## Aggiornare il sito

Dopo aver modificato i file:

```bash
git add .
git commit -m "Aggiorna RO Training"
git push
```

GitHub Pages pubblicherà la nuova versione automaticamente.

## Note importanti
- `index.html` deve rimanere nella cartella principale del repository.
- Non separare `index.html` da `pdf/` e `materiali/` se vuoi che i collegamenti relativi funzionino.
- I progressi sono salvati in `localStorage`: non vengono sincronizzati tra dispositivi o tra amici.
- Il backend AI è incluso come codice ma deve essere pubblicato separatamente e configurato prima di poter correggere direttamente dal sito.
- Non inserire segreti, token o chiavi API in file pubblici.
- Per una versione con account, sincronizzazione cloud e correzione AI integrata servirà progettare un backend separato.
