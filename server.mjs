import express from "express";
import cors from "cors";
import levenshtein from "fast-levenshtein";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const knownBrands = ["google", "facebook", "amazon", "apple", "microsoft", "paypal", "netflix", "instagram", "twitter"];
const riskyTLDs = [".xyz", ".top", ".club", ".info", ".biz", ".online"];

function analyzeDomain(domain) {
  const cleaned = domain.replace(/^https?:\/\//, "").toLowerCase();
  const base = cleaned.split("/")[0];

  let score = 0;
  let reasons = [];

  knownBrands.forEach(brand => {
    const dist = levenshtein.get(base, brand);
    if (base.includes(brand) || dist <= 3) {
      score += 2;
      reasons.push(`Brand similarity: "${brand}" matched with distance ${dist}`);
    }
  });

  riskyTLDs.forEach(tld => {
    if (base.endsWith(tld)) {
      score += 1;
      reasons.push(`Suspicious TLD detected: "${tld}"`);
    }
  });

  if (base.includes("-login") || base.includes("secure") || base.includes("verify") || base.includes("account")) {
    score += 1;
    reasons.push("Suspicious keyword in domain");
  }

  let riskLevel = "Low";
  if (score >= 3 && score < 6) riskLevel = "Medium";
  else if (score >= 6) riskLevel = "High";

  return { domain, riskLevel, score, reasons };
}

app.post("/api/check-domains", (req, res) => {
  const { domains } = req.body;
  const results = domains.map(analyzeDomain);
  res.json({ results });
});

app.listen(PORT, () => {
  console.log(`🕵️ Brand Squat Detector running at http://localhost:${PORT}`);
});
