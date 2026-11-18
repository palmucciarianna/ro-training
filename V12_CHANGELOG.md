# RO Training v10–v12 · registro modifiche

Questa consegna integra la base v9 in un pacchetto v12. Le versioni v10 e v11 sono tappe logiche documentate qui, non tre deploy indipendenti.

## v10 – Training frontend
- Aggiunta sezione Training avanzato senza rimuovere le sezioni preesistenti.
- Diario errori categorizzato per argomento e tipologia.
- XP e livelli locali; i tentativi non vengono marcati automaticamente come corretti.
- Ripasso dilazionato con intervalli 1/3/7/14 giorni.
- Laboratori guidati aggiuntivi: pivot del simplesso, Prim, flusso massimo, schema Branch & Bound e Knapsack dinamico.
- Generatore parametrico di esercizi per argomento e sei livelli, con correzione AI opzionale.
- Interrogazione orale progressiva con feedback AI opzionale.
- I dati aggiuntivi sono salvati nel localStorage separato `roTrainingV12`.

## v11 – Backend
- Backend Express aggiornato, chiave solo lato server, Helmet, CORS allowlist, limite JSON, rate limit per IP, timeout e gestione errori API.
- Endpoint `/health` e `/api/review`.
- Prompt tutor più rigoroso e limite output.
- `.env.example` e README operativo aggiornati.

## v12 – Integrazione e test statici
- Collegato il nuovo modulo frontend al backend esistente tramite `RO_API_BASE`.
- Aggiornate istruzioni di sviluppo locale e deploy.
- Nessuna chiave API inclusa nel pacchetto.
- Conservati i PDF originali senza modificarne il contenuto.

## Limiti dichiarati
- La correzione AI reale richiede una chiave API valida e un modello abilitato, poi test locale e deploy: non è possibile certificare queste operazioni senza le credenziali del proprietario.
- I laboratori aggiunti sono ambienti guidati con tracce didattiche, non solver matematici generici né implementazioni complete certificate degli algoritmi.
- Il generatore crea tracce parametriche per le famiglie implementate; non è ancora una banca illimitata verificata rispetto a tutte le dispense.
- I punti premiano il completamento di attività, non certificano correttezza matematica. Il punteggio AI resta feedback testuale e non alimenta automaticamente la padronanza.
- Non sono presenti account, sincronizzazione cloud, autenticazione studenti o database.
- Prima della condivisione pubblica del backend aggiungere codice di accesso, quote globali e monitoraggio dei costi. CORS e rate limit per IP da soli non impediscono abusi.
