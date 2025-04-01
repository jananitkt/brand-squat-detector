# 🕵️ Brand Squatting Domain Detector

Detect phishing-style domains that imitate popular brands using typo similarity, risky TLDs, and known deception patterns.

---

## 🚀 Features

- 🔍 Levenshtein distance-based brand matching
- ⚠️ Flags suspicious TLDs (like `.xyz`, `.top`)
- 🧠 Checks for "login", "secure", "verify" patterns
- 📊 Risk score with explanations (Low / Medium / High)

---

## 📸 Preview

<img src="https://github.com/jananitkt/brand-squat-detector/blob/main/brand-squat-detector.png" alt="brand-squat-detector UI Screenshot" width="100%" />

---

## 🔧 Run Locally

```bash
npm install express cors fast-levenshtein
node server.mjs
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🧪 Sample Input

```
secure-paypal.com
goog1e-login.net
facebo0k-security.biz
microsoft-support.online
apple-verify.co
amazonn-giftcard.com
```

---

## 🧠 Educational Takeaways

- String similarity algorithms
- Brand impersonation detection
- Cybersecurity UX and frontend reporting
- Real-world phishing defense simulation

---

Created by Janani for cybersecurity + AI threat intelligence projects.
