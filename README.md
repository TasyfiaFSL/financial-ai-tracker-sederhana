# financial-ai-tracker-sederhana:

# 💸 Simple Budget Tracker

Aplikasi ini dibuat sebagai bagian dari capstone project **Code Generation and Optimization** untuk mendemonstrasikan pemanfaatan model AI IBM Granite dalam membantu proses pengembangan kode secara efisien dan terdokumentasi.

---

## 🎯 Project Objective

Aplikasi ini bertujuan untuk membantu pengguna dalam mencatat pemasukan, pengeluaran, serta memantau progress terhadap target tabungan yang ingin dicapai.

Cocok untuk pelajar, mahasiswa, atau siapa pun yang ingin memulai kebiasaan mengelola uang secara sederhana namun terstruktur.

---

## 🔧 Teknologi yang Digunakan

- HTML
- CSS (inline styling)
- JavaScript (vanilla)
- AI Model (IBM Granite Inspired Prompting)

---

## ⚙️ Tools AI yang Digunakan

- **IBM Granite Code Instruct** *(prompt-based AI code generation model)*
  
AI digunakan untuk menghasilkan struktur awal fungsi kalkulasi saldo, kemudian dioptimasi secara manual dan dikembangkan menjadi aplikasi interaktif berbasis web.

---

## 🧠 Prompt yang Digunakan

> “Buatkan aplikasi keuangan sederhana dalam JavaScript dan HTML yang mencatat pemasukan dan pengeluaran serta menghitung total saldo.”

---

## 🛠️ before.js

File `before.js` berisi kode awal hasil generate AI, berupa fungsi dasar kalkulasi saldo:

```javascript
let saldo = 0;

function tambahPemasukan(jumlah) {
  saldo += jumlah;
}

function tambahPengeluaran(jumlah) {
  saldo -= jumlah;
}

## after.js
Kode final yang digunakan untuk aplikasi web interaktif.

## Penggunaan AI
AI membantu menghasilkan struktur fungsi utama, mempercepat proses logika keuangan dasar. Saya mengembangkan antarmuka dan fitur tambahan secara mandiri.

## Cara Jalanin Kodingan 
python -m http.server 8000, : http://localhost:8000
