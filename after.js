let saldo = 0;
let target = 0;

function updateTarget() {
  target = parseInt(document.getElementById("target").value) || 0;
  updateDisplay();
}

function tambahPemasukan() {
  const jumlah = parseInt(document.getElementById("amount").value);
  if (!isNaN(jumlah)) {
    saldo += jumlah;
    updateTarget();
  }
}

function tambahPengeluaran() {
  const jumlah = parseInt(document.getElementById("amount").value);
  if (!isNaN(jumlah)) {
    saldo -= jumlah;
    updateTarget();
  }
}

function updateDisplay() {
  document.getElementById("saldo").innerText = saldo;

  if (target > 0) {
    const progress = Math.min((saldo / target) * 100, 100);
    document.getElementById("progressFill").style.width = progress + "%";
    document.getElementById("progressText").innerText = `Progress: ${Math.floor(progress)}%`;
  } else {
    document.getElementById("progressFill").style.width = "0%";
    document.getElementById("progressText").innerText = "Progress: 0%";
  }
}
