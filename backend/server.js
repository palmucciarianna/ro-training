import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import OpenAI from "openai";

const app = express();
const port = Number(process.env.PORT || 3000);
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5500,http://127.0.0.1:5500")
  .split(",").map((value) => value.trim()).filter(Boolean);
const model = process.env.OPENAI_MODEL || "gpt-5.5";
app.disable("x-powered-by");
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(null, false);
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json({ limit: "32kb", strict: true }));
app.use((req, res, next) => { res.setHeader("Cache-Control", "no-store"); next(); });

const limiter = rateLimit({
  windowMs: 60 *  60 * 1000,
  limit: Number(process.env.REVIEW_RATE_LIMIT || 20),
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Hai raggiunto il limite temporaneo di richieste AI. Riprova più tardi." }
});
const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 60_000, maxRetries: 1 }) : null;
const tutorInstructions = [
  "Sei un tutor universitario rigoroso di Ricerca Operativa.",
  "Correggi il procedimento, non soltanto il risultato finale.",
  "Distingui errori concettuali, di impostazione, metodo, calcolo, segno, notazione, passaggi mancanti e presentazione.",
  "Valuta separatamente riconoscimento del problema, formulazione, scelta del metodo, correttezza dei passaggi e giustificazioni.",
  "Non inventare dati, soluzioni ufficiali o criteri di valutazione non presenti nella richiesta.",
  "Se mancano informazioni, dichiaralo. Non dichiarare padronanza sulla base di un solo tentativo.",
  "Rispondi in italiano, con formule e passaggi leggibili; usa tabelle quando migliorano la correzione."
].join("\n");

app.get("/health", (_req, res) => res.json({ ok: true, aiConfigured: Boolean(client), model: client ? model : null }));
app.post("/api/review", limiter, async (req, res) => {
  if (!client) return res.status(503).json({ error: "Backend avviato, ma OPENAI_API_KEY non è configurata sul server." });
  const prompt = typeof req.body?.prompt === "string" ? req.body.prompt.trim() : "";
  if (!prompt) return res.status(400).json({ error: "La richiesta è vuota." });
  if (prompt.length > 24000) return res.status(413).json({ error: "Richiesta troppo lunga: massimo 24.000 caratteri." });
  try {
    const response = await client.responses.create({ model, instructions: tutorInstructions, input: prompt, max_output_tokens: 2200 });
    res.json({ review: response.output_text || "Non è stato generato testo di correzione." });
  } catch (error) {
    console.error("OpenAI API error:", error?.status || "", error?.message || "Errore non specificato");
    const status = error?.status === 429 ? 429 : 502;
    res.status(status).json({ error: status === 429 ? "Limite o credito API raggiunto. Controlla la piattaforma API." : "Il servizio AI non è riuscito a completare la richiesta." });
  }
});
app.use((err, _req, res, _next) => {
  if (err instanceof SyntaxError && "body" in err) return res.status(400).json({ error: "JSON della richiesta non valido." });
  console.error("Backend error:", err?.message || err);
  res.status(500).json({ error: "Errore interno del backend." });
});
app.listen(port, () => console.log(`RO Training backend in ascolto sulla porta ${port}`));
