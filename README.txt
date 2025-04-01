
# 🕵️ Brand Squatting Domain Detector

A full-stack cybersecurity project to identify domains that imitate well-known brands — commonly used in phishing scams. Created by Janani as part of her Threat Intelligence portfolio.

---

## 🔍 What Is Brand Squatting?

**Brand squatting** is when attackers register domain names that are visually similar to trusted brands like `google.com`, `paypal.com`, or `amazon.com`, with the intention of deceiving users.

Examples:
- `g00gle-login.net` (uses zeroes)
- `facebo0k.biz` (uses `0` instead of `o`)
- `paypal-secure.xyz` (adds a keyword + suspicious TLD)

---

## 🎯 What This Tool Does

✅ Checks if suspicious domains:
- Are **similar** to known brands using typo-detection (Levenshtein Distance)
- Contain **keywords** often used in phishing: `login`, `secure`, `account`, `verify`
- Use **risky TLDs** like `.xyz`, `.top`, `.biz`, `.info`, `.online`

✅ Outputs:
- A **Risk Level**: Low, Medium, or High
- A **Score**
- A **detailed explanation of each detection reason**

---

## 🧪 Sample Input (Test Data)

Paste this in the text area:

```
secure-paypal.com
goog1e-login.net
facebo0k-security.biz
microsoft-support.online
apple-verify.co
amazonn-giftcard.com
```

---

## ✅ Sample Output

```
🔗 Domain: secure-paypal.com
Risk Level: Medium
Score: 4
Reasons:
- Brand similarity: "paypal" matched with distance 0
- Suspicious TLD detected: ".com"
- Suspicious keyword in domain

-------------------------

🔗 Domain: goog1e-login.net
Risk Level: High
Score: 6
Reasons:
- Brand similarity: "google" matched with distance 2
- Suspicious keyword in domain
```

---

## 📦 How to Run Locally

1. Unzip the folder
2. Open terminal inside it
3. Run the following:

```bash
npm install express cors fast-levenshtein
node server.mjs
```

4. Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Educational Goals

This project helps beginners learn:

- ✅ What phishing & brand squatting are
- ✅ How to use string similarity (Levenshtein Distance)
- ✅ Full-stack JS app with Express backend
- ✅ How to structure clean, secure user feedback

---

## 🖼️ Screenshot Guide

### 🧾 Step 1: Input Screen
![screenshot1](screenshots/input-screen.png)

### 📊 Step 2: Analysis Result (High Risk)
![screenshot2](screenshots/high-risk-output.png)

### ✅ Step 3: Low Risk Result
![screenshot3](screenshots/low-risk-output.png)

> Replace these with actual screenshots when pushed to GitHub

---

## 🧠 Hints for Further Learning

- Add WHOIS domain age detection
- Scan subdomains and DNS
- Build an AI model to auto-classify phishing domains

---

Created by **Janani Thamilarasu** as part of her cybersecurity and AI threat detection journey.
