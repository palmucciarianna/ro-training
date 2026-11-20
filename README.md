<div align="center">

# 📐 RO Training

**Piattaforma interattiva per la preparazione dell'esame di Ricerca Operativa.**  
*Riconosci la famiglia del problema, ricostruisci il metodo, supera l'esame con sicurezza.*

<br/>

[![Demo Live](https://img.shields.io/badge/Demo%20Live-Apri%20Web%20App-7c3aed?style=for-the-badge&logo=githubpages&logoColor=white)](https://palmucciarianna.github.io/ro-training/)
[![Stack](https://img.shields.io/badge/Frontend-Pure%20HTML%20%2F%20JS-10b981?style=for-the-badge&logo=javascript&logoColor=white)](index.html)
[![AI Backend](https://img.shields.io/badge/AI%20Tutor-Node.js%20Ready-6366f1?style=for-the-badge&logo=openai&logoColor=white)](backend/)
[![Dati](https://img.shields.io/badge/Privacy-100%25%20Locale-0ea5e9?style=for-the-badge&logo=databricks&logoColor=white)](#-dati-privacy-e-backup)

<br/>

### 🚀 [👉 Accedi subito alla Web App Live](https://palmucciarianna.github.io/ro-training/) 👈

*Nessuna registrazione richiesta • Zero dipendenze pesanti • Pronta all'uso nel browser*

</div>

---

## ⚡ In sintesi

Negli esami di **Ricerca Operativa** il problema principale non è quasi mai calcolare a mano, ma **riconoscere al volo il modello corretto**, impostare le variabili e motivare formalmente gli algoritmi. 

**RO Training** trasforma lo studio noioso in un percorso interattivo e pratico:

<br/>

| 🎯 **Percorso Guidato 31 Giorni** | 🎲 **Generatore di Esercizi** | 👁️ **Sfida Cieca** |
| :--- | :--- | :--- |
| Piano strutturato con sessioni da 60 min e tracking automatico dei progressi in locale. | Esercizi procedurali a dati casuali per Simplesso, Dualità, Knapsack, Reti e B&B. | Allena il colpo d'occhio: riconosci la tipologia di problema prima di vedere il metodo. |

| 🧪 **Laboratori Visuali** | ⏱️ **Simulazione d'Esame** | 🤖 **AI Tutor Integrato** |
| :--- | :--- | :--- |
| Animazioni passo-passo per comprendere gli algoritmi (Dijkstra, Kruskal, Zaino). | Prove da 90 min con cronometro, foglio note e confronto finale con la soluzione. | Correzione automatica delle risposte aperte con microservizio Node.js o prompt 1-click. |

---

## 🚀 Avvio Rapido

### 🌐 Opzione 1: Online (Zero Installazione)
Apri direttamente l'app dal browser su GitHub Pages:  
👉 **[palmucciarianna.github.io/ro-training](https://palmucciarianna.github.io/ro-training/)**

### 💻 Opzione 2: In Locale
1. Clona la repository:
   ```bash
   git clone https://github.com/palmucciarianna/ro-training.git
   ```
2. Fai doppio clic su `index.html` con qualsiasi browser. Fatto!

---

## 📌 Dettagli e Approfondimenti

<details>
<summary><b>🗺️ Mappa dei 10 Moduli del Corso (Clicca per espandere)</b></summary>
<br/>

| Modulo | Metodi & Argomenti Chiave | Attività Disponibili |
| :--- | :--- | :---: |
| **01. Modellazione PL / PLI** | Variabili, vincoli di capacità, assegnamento, zaino | Tracce generate, quiz |
| **02. Geometria PL** | Poliedri, vertici, basi ammissibili, cono di recessione | Flashcard, richiamo attivo |
| **03. Simplesso** | Tableau, variabili entranti/uscenti, test di arresto | Percorsi guidati, teoria |
| **04. Dualità** | Teoremi di dualità debole/forte, scarti complementari | Esercizi a dati variabili |
| **05. Branch & Bound** | Rilassamento continuo, albero di branching, regole di pruning | Generatore, simulazioni |
| **06. Cammini Minimi** | Algoritmo di Dijkstra, Bellman-Ford, invarianti e complessità | Laboratorio visuale, quiz |
| **07. Alberi Ricoprenti (MST)** | Algoritmi di Kruskal e Prim, cicli e tagli | Laboratorio visuale, quiz |
| **08. Flusso Massimo** | Ford-Fulkerson, reti residue, teorema Max-Flow Min-Cut | Esercizi d'esame, teoria |
| **09. Programmazione Dinamica** | Problema dello Zaino (Knapsack), equazioni di Bellman | Simulatore interattivo |
| **10. Complessità** | Classi P, NP, NP-Hard, riduzioni polinomiali | Flashcard, professore cattivo |

</details>

<details>
<summary><b>🤖 Configurazione Backend AI (Opzionale)</b></summary>
<br/>

Il frontend è predisposto per la correzione automatica tramite il microservizio Node.js presente nella cartella `backend/`:

1. **Installa le dipendenze:**
   ```bash
   cd backend && npm install
   ```
2. **Configura `.env`** (non committarlo su GitHub!):
   ```env
   PORT=3000
   OPENAI_API_KEY=la_tua_api_key
   OPENAI_MODEL=gpt-4o-mini
   ALLOWED_ORIGINS=http://localhost:8080,https://palmucciarianna.github.io
   ```
3. **Avvia il microservizio:**
   ```bash
   npm start
   ```
4. **Collega il frontend**: in `config.js`, inserisci l'URL di backend su `window.RO_API_BASE`.

> *Nota: Se il backend non è avviato, puoi sempre usare il pulsante «Copia prompt per ChatGPT» per ottenere una correzione istantanea su ChatGPT senza costi né configurazioni.*

</details>

<details>
<summary><b>📂 Struttura del Progetto</b></summary>
<br/>

```text
ro-training/
├── index.html                 # Entry point dell'applicazione (GitHub Pages)
├── config.js                  # Configurazione endpoint API
├── backend/                   # Microservizio Node.js (OpenAI Responses API)
├── pdf/                       # 18 prove d'esame originali e soluzioni
├── materiali/                 # Dispense del corso ed esercitazioni
└── README.md                  # Documentazione ufficiale del repository
```

</details>

<details>
<summary><b>🔒 Dati, Privacy e Backup</b></summary>
<br/>

- **100% sul tuo browser**: Tutti i progressi (giorni completati, risposte, note, registro errori) sono memorizzati in `localStorage`.
- **Esporta / Importa**: Dal menu laterale dell'app puoi esportare in qualsiasi momento un file `.json` di backup per non perdere i tuoi dati o per passarli su un altro dispositivo.

</details>

<details>
<summary><b>⚖️ Disclaimer Didattico</b></summary>
<br/>

Progetto didattico open source a supporto dello studio individuale e collaborativo. Non è un prodotto ufficiale dell'Università di Bologna (UniBo) e non sostituisce le dispense, i libri di testo e le lezioni dei docenti.

</details>

---

<div align="center">

Creato per preparare al meglio l'esame di **Ricerca Operativa** 📐  
Se il progetto ti è utile, supportalo lasciando una **⭐ stella** su GitHub!

</div>
