<div align="center">

# 📐 RO Training
### Piattaforma Interattiva per la Preparazione dell'Esame di Ricerca Operativa

*Dalla formulazione alla complessità computazionale: riconosci il problema, ricostruisci il metodo, supera l'esame con sicurezza.*

<br/>

[![Live Demo](https://img.shields.io/badge/Demo%20Live-GitHub%20Pages-2ea44f?style=for-the-badge&logo=github)](https://palmucciarianna.github.io/ro-training/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/it/docs/Web/JavaScript)
[![Node.js Backend](https://img.shields.io/badge/Node.js-AI%20Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)](backend/)
[![Storage](https://img.shields.io/badge/Dati-100%25%20Locale%20(LocalStorage)-blue?style=for-the-badge&logo=databricks&logoColor=white)](#-dati-privacy-e-sincronizzazione)
[![Status](https://img.shields.io/badge/Versione-v12%20(Stabile)-orange?style=for-the-badge)](#-stato-del-progetto)

<br/>

[🚀 Prova la Web App Live](https://palmucciarianna.github.io/ro-training/) • [⚡ Avvio Rapido](#-avvio-rapido) • [📚 Funzionalità](#-cosa-trovi-nella-piattaforma) • [🤖 Integrazione AI](#-correzione-intelligente-con-ai) • [🗺️ Moduli](#-moduli-didattici)

</div>

---

## 💡 Perché RO Training?

Spesso negli esami di **Ricerca Operativa** lo scoglio principale non è solo applicare una formula, ma:
1. **Riconoscere** la famiglia corretta del problema (PL, PLI, Cammini Minimi, Flussi, Dualità, Branch & Bound).
2. **Formulare** correttamente modelli matematici e variabili decisionali.
3. **Motivare** formalmente ogni passaggio (invarianti, condizioni di ottimalità, basi ammissibili).
4. **Allenarsi sotto pressione** senza poter sbirciare la soluzione.

**RO Training** è una web application didattica indipendente progettata per trasformare lo studio teorico in un percorso pratico ad alto impatto: esercizi a dati variabili, simulazioni con timer, laboratori visuali e correzione automatica.

---

## ✨ Cosa trovi nella piattaforma

### 🎯 1. Percorso & Roadmap Strutturata
- **Roadmap completa**: guida passo-passo per coprire l'intero programma d'esame.
- **Percorso intensivo in 31 giorni**: sessioni quotidiane da ~60 minuti calibrate per arrivare pronti all'appello.
- **Tracking locale**: spunte salvate automaticamente sul tuo browser senza bisogno di registrazioni.

### 🧠 2. Allenamento Intelligente & Attivo
- **🎲 Generatore procedurale di esercizi**: infinite varianti inedite con dati casuali per *Knapsack, Cammini Minimi, Alberi Ricoprenti, Dualità, Branch & Bound e Modellazione*.
- **👁️ Sfida Cieca**: leggi la traccia senza titolo e metti alla prova la tua capacità di individuare il metodo giusto prima di riceverne la conferma.
- **😈 Modalità "Professore Cattivo"**: domande orali insidiose, richieste di dimostrazione e approfondimenti teorici.
- **🃏 Flashcard con Spaced Repetition**: oltre 30 schede concettuali per consolidare definizioni, teoremi e proprietà algebriche.
- **📝 Percorsi Guidati**: risoluzione interattiva passo dopo passo con suggerimenti dedicati per ogni step.

### 📑 3. Archivio Esami & Simulazione Reale
- **18 coppie di PDF originali**: testi d'esame completi e soluzioni ufficiali consultabili separatamente.
- **⏱️ Simulatore d'Esame a Tempo (90 min)**: prova cronometrata senza aiuti, con spazio per appunti e confronto guidato con la soluzione ufficiale al termine.

### 🧪 4. Laboratori Visuali Algoritmici
- Dimostrazioni interattive passo-passo di algoritmi cardine:
  - **Dijkstra** (cammini minimi su grafi orientati/non orientati)
  - **Kruskal** (alberi ricoprenti minimi e gestione insiemi disgiunti)
  - **Knapsack** (programmazione dinamica e tabelle ottime)

### 🤖 5. Correzione con AI Integrata
- **Pulsante «Correggi con AI»**: analizza le risposte a domande aperte e impostazioni di modelli tramite backend Node.js (OpenAI Responses API).
- **Fallback 1-click**: generazione immediata di prompt contestualizzati pronti da incollare su ChatGPT.

### 📊 6. Dashboard Progressi & Registro Errori
- Monitoraggio della padronanza per singolo argomento.
- Algoritmo di calcolo delle revisioni in scadenza.
- **Registro errori dedicato**: per focalizzarsi sui propri bias e non ripetere gli stessi sbagli.
- **Backup JSON**: esporta e importa i tuoi dati per non perderli tra browser o dispositivi diversi.

---

## 🗺️ Moduli Didattici

| Modulo | Metodi & Argomenti Principali | Attività Disponibili |
| :--- | :--- | :---: |
| **01. Modellazione PL / PLI** | Variabili, vincoli di capacità, assegnamento, zaino | Tracce generate, quiz, sfide |
| **02. Geometria & Teoria PL** | Poliedri, vertici, basi ammissibili, cono di recessione | Flashcard, domande aperte |
| **03. Metodo del Simplesso** | Tableau, variabili entranti/uscenti, test di arresto | Percorsi guidati, teoria |
| **04. Dualità & Scarti Complementari** | Problema duale, relazioni primale-duale, ottimalità | Esercizi a dati variabili |
| **05. Branch & Bound** | Rilassamento continuo, albero di branching, pruning | Generatore, simulazioni |
| **06. Cammini Minimi** | Algoritmo di Dijkstra, Bellman-Ford, invarianti | Laboratorio visuale, quiz |
| **07. Alberi Ricoprenti (MST)** | Algoritmo di Kruskal, Prim, cicli e tagli | Laboratorio visuale, esercizi |
| **08. Flusso Massimo & Min-Cut** | Ford-Fulkerson, reti residue, teorema Max-Flow Min-Cut | Esercizi d'esame, teoria |
| **09. Programmazione Dinamica** | Problema dello Zaino (Knapsack), equazioni di Bellman | Laboratorio interattivo |
| **10. Complessità & NP-Completezza** | Classi P, NP, NP-Hard, riduzioni polinomiali | Flashcard, professore cattivo |

---

## 🚀 Avvio Rapido

### 🌐 Utilizzo Online (Consigliato)
La piattaforma è interamente fruibile dal browser tramite **GitHub Pages**:
👉 **[Apri RO Training](https://palmucciarianna.github.io/ro-training/)**

### 💻 Esecuzione in Locale
Non richiede compilazione o installazioni complesse:

1. **Clona la repository**:
   ```bash
   git clone https://github.com/palmucciarianna/ro-training.git
   cd ro-training
   ```
2. **Apri la piattaforma**:
   - Apri semplicemente il file `index.html` con qualsiasi browser moderno (Chrome, Firefox, Safari, Edge).
   - Oppure avvia un server locale veloce:
     ```bash
     npx serve .
     # oppure
     python3 -m http.server 8080
     ```

---

## 🤖 Correzione con AI (Opzionale)

Il frontend supporta nativamente la correzione automatica tramite backend Node.js:

1. Entra nella cartella del backend:
   ```bash
   cd backend
   npm install
   ```
2. Crea il file `.env` (non committarlo mai!):
   ```env
   PORT=3000
   OPENAI_API_KEY=your_api_key_here
   OPENAI_MODEL=gpt-4o-mini
   ALLOWED_ORIGINS=http://localhost:8080,https://palmucciarianna.github.io
   ```
3. Avvia il server:
   ```bash
   npm start
   ```
4. In `config.js`, assicurati che l'URL punti al tuo backend:
   ```javascript
   window.RO_API_BASE = "http://localhost:3000"; // oppure URL di produzione
   ```

> *Se il backend non è configurato, puoi comunque cliccare su «Copia prompt per ChatGPT» per ricevere una correzione istantanea su chatgpt.com.*

---

## 📂 Struttura del Progetto

```text
ro-training/
├── index.html                 # Entry point principale dell'applicazione (GitHub Pages)
├── ro_training.html           # Copia per consultazione / backup offline
├── config.js                  # Configurazione endpoint API backend (zero segreti)
├── v12-enhancements.js        # Script di arricchimento dinamico e gestione stato v12
├── backend/                   # Microservizio Node.js per correzioni AI
│   ├── index.js               # Server Express + OpenAI integration
│   ├── package.json           # Dipendenze Node.js
│   └── README.md              # Documentazione specifica del backend
├── pdf/                       # Documenti d'esame originali
│   ├── testi/                 # Testi delle prove d'esame
│   └── soluzioni/             # Soluzioni ufficiali per verifica
├── materiali/                 # Dispense didattiche ed esercitazioni
├── PUBBLICAZIONE.md           # Guida per il deployment con GitHub Pages
└── README.md                  # Documentazione ufficiale del repository
```

---

## 🔒 Dati, Privacy e Sincronizzazione

- **Nessun database remoto obbligatorio**: tutti i tuoi progressi, spunte, risposte e note del Registro Errori sono salvati nel `localStorage` del tuo browser.
- **Esportazione & Backup**: puoi salvare un file `.json` dei tuoi dati in qualsiasi momento dal pannello laterale cliccando su **"Esporta progressi"** e reimportarlo su un altro computer o dispositivo.
- **Privacy garantita**: non viene memorizzato alcun dato personale.

---

## 🤝 Contribuire

I contributi sono benvenuti! Se hai trovato un refuso, vuoi aggiungere nuovi quiz o proporre un miglioramento visuale:

1. Fai un **Fork** del progetto.
2. Crea un branch dedicato (`git checkout -b feature/MiglioriaAlgoritmo`).
3. Effettua le modifiche e committa (`git commit -m 'Aggiunta spiegazione simplesso duale'`).
4. Esegui il push sul tuo branch (`git push origin feature/MiglioriaAlgoritmo`).
5. Apri una **Pull Request**.

---

## ⚖️ Disclaimer Accademico

> **Nota:** Questo progetto è uno strumento di supporto didattico open source e indipendente. Non è un prodotto ufficiale dell'Università di Bologna (UniBo) né di altri atenei. L'uso della piattaforma è pensato per potenziare la preparazione e l'autovalutazione, ma non sostituisce la frequenza delle lezioni, lo studio delle dispense ufficiali e la consultazione della bibliografia d'esame.

---

<div align="center">

Realizzato con cura per tutti gli studenti alle prese con la Ricerca Operativa 📐  
Se questo progetto ti è stato utile, lascia una **⭐ stella** su GitHub!

</div>
