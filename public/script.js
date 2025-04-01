async function checkDomains() {
  const textarea = document.getElementById("domainInput");
  const resultsBox = document.getElementById("resultsBox");
  const domains = textarea.value.split("\n").map(d => d.trim()).filter(Boolean);

  resultsBox.classList.add("d-none");
  resultsBox.innerText = "Analyzing...";

  const res = await fetch("/api/check-domains", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ domains })
  });

  const data = await res.json();
  const output = data.results.map(result =>
    `🔗 Domain: ${result.domain}\nRisk Level: ${result.riskLevel}\nScore: ${result.score}\nReasons:\n- ${result.reasons.join("\n- ")}\n`
  ).join("\n-------------------------\n");

  resultsBox.innerText = output;
  resultsBox.classList.remove("d-none");
}
