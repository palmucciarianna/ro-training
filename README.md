# RO Training

**Piattaforma di allenamento per l'esame di Ricerca Operativa.**

RO Training trasforma lo studio in un percorso interattivo: riconoscere il tipo di problema, scegliere il metodo, svolgere i passaggi, motivarli e imparare dagli errori. Il progetto è pensato per essere usato da soli o condiviso con compagni di corso.

> Il progetto è uno strumento didattico indipendente. Non è un prodotto ufficiale dell'Università di Bologna e non garantisce un voto d'esame.

## Avvio rapido

### In locale
1. Scarica o clona il repository.
2. Estrai la cartella, se hai scaricato uno ZIP.
3. Apri `index.html` con un browser moderno (Chrome, Firefox, Safari o Edge).
4. Per consultare gli appelli, mantieni intatte le cartelle `pdf/` e `materiali/`: i percorsi sono relativi.

### Online
Il sito è statico e può essere pubblicato gratuitamente con **GitHub Pages**. Vedi [PUBBLICAZIONE.md](PUBBLICAZIONE.md).

## Cosa trovi nel sito

### 1. Percorso di studio
- Moduli e roadmap per organizzare lo studio.
- Percorso intensivo di 31 giorni, con attività giornaliere e spunte salvate localmente.
- Sezioni di teoria, pseudocodice, dimostrazioni e flashcard.
- Tracciamento locale degli argomenti affrontati.

### 2. Allenamento
- Quiz e domande vero/falso.
- Domande aperte e formulazione di modelli.
- Percorsi guidati iniziali per metodi selezionati.
- Esercizi generati con dati variabili per modellazione, cammini minimi, alberi ricoprenti, Knapsack, dualità e Branch & Bound.
- Sfida cieca: prova a riconoscere la famiglia del problema prima di vedere il percorso.
- Professore cattivo: domande orali e richieste di approfondimento.
- Interrogazione casuale da 10 domande.

Gli esercizi generati sono varianti didattiche: non sono tracce ufficiali e non sostituiscono lo studio delle dispense e degli appelli.

### 3. Appelli originali
- Archivio dei testi PDF disponibili nel pacchetto.
- Soluzioni PDF consultabili separatamente.
- I PDF originali sono mantenuti come documenti, non riscritti come esercizi inventati.

**Nota sui materiali:** prima di rendere pubblico il repository, verifica di avere il diritto di ridistribuire i PDF delle prove, delle soluzioni e gli altri materiali del corso. Se non hai l'autorizzazione, pubblica il sito senza quei file oppure distribuiscili separatamente solo alle persone autorizzate. Rendere pubblico un repository rende pubblici anche i file PDF inclusi.

### 4. Laboratori visuali
Sono presenti dimostrazioni passo-passo per alcuni algoritmi (Dijkstra, Kruskal e Knapsack). Non tutti i metodi del corso hanno ancora un simulatore interattivo completo: in particolare il simplesso, Branch & Bound e flusso massimo richiedono ulteriori laboratori dedicati.

### 5. Progressi e ripasso
- Registrazione di tentativi, esiti e ripassi.
- Dashboard indicativa per argomento.
- Suggerimento della prossima attività sulla base dei dati registrati.
- Esportazione e importazione dei progressi in JSON per trasferirli tra browser o dispositivi.

## Come funziona la correzione

Il sito può verificare direttamente alcune risposte strutturate (per esempio quiz con opzioni). Per risposte aperte, dimostrazioni e svolgimenti lunghi, prepara una richiesta contestualizzata da copiare in ChatGPT.

**Integrazione AI predisposta.** Il sito include ora il pulsante «Correggi con AI» e la cartella `backend/` con un servizio Node.js basato sulla Responses API. Per renderlo operativo bisogna installare le dipendenze, configurare la chiave API come variabile segreta sul server, pubblicare il backend e impostare l'URL in `config.js`. Fino a quel momento resta disponibile la copia della richiesta per ChatGPT. Non inserire mai chiavi API nel codice HTML o in un repository pubblico.

Le rubriche e le percentuali sono strumenti di autovalutazione, non voti ufficiali del docente e non certificano da sole la preparazione.

## Dati, privacy e sincronizzazione

- I progressi sono memorizzati nel `localStorage` del browser e del dispositivo in uso.
- Non esiste sincronizzazione automatica tra amici o dispositivi.
- Cancellare i dati del sito o usare un browser diverso può far perdere i progressi locali.
- Usa **Esporta progressi** per salvare una copia JSON e **Importa progressi** per ripristinarla.
- Non inserire dati personali o credenziali nel sito.

Ogni persona che apre il sito nel proprio browser ha il proprio archivio locale di progressi. Condividere il link non condivide automaticamente i risultati degli altri.

## Struttura del progetto

```text
RO_Training_Completo/
├── index.html                 # ingresso per GitHub Pages
├── ro_training.html           # copia apribile in locale
├── README.md                  # questa guida
├── PUBBLICAZIONE.md            # istruzioni GitHub Pages
├── LEGGIMI.txt                 # guida breve
├── config.js                   # URL del backend AI (nessun segreto)
├── backend/                    # servizio Node.js per la correzione AI
├── pdf/
│   ├── testi/                  # prove originali
│   └── soluzioni/              # soluzioni originali
└── materiali/                  # materiali di studio inclusi
```

## Compatibilità

- Browser moderno con JavaScript abilitato.
- Connessione Internet necessaria per aprire il sito ospitato e per usare ChatGPT; il nucleo statico, una volta caricato, non richiede un server applicativo.
- Alcune funzioni e risorse esterne possono richiedere connessione.
- Non è un'applicazione multiutente con account o database condiviso.

## Contribuire

Per proporre miglioramenti:
1. crea un fork del repository;
2. modifica il codice;
3. prova le funzionalità nel browser;
4. apri una Pull Request descrivendo cosa hai cambiato e come hai testato.

Per segnalare un errore, indica browser, sezione, passaggi per riprodurlo e risultato atteso.

## Stato del progetto

RO Training è in evoluzione. Alcune funzioni sono complete a livello introduttivo, altre sono prototipi didattici o parziali. In particolare, non dichiarare come completati un correttore AI autonomo, un simplesso interattivo completo, una certificazione rigorosa della padronanza o una sincronizzazione cloud: non sono ancora presenti in questa versione.


## Versione v12

Consulta `V12_CHANGELOG.md` per le funzionalità aggiunte e i limiti verificati. Per avviare l’AI in locale segui `backend/README.md`. La chiave API non è inclusa: va configurata solo in `backend/.env` (locale) o nelle variabili segrete dell’host.
