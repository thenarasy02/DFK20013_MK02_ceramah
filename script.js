document.getElementById("tempahanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    telefon: document.getElementById("telefon").value,
    kategori: document.getElementById("kategori").value,
    slot: parseInt(document.getElementById("slot").value),
    hargaSlot: 250
  };

  // Simpan data
  localStorage.setItem("tempahan", JSON.stringify(data));

  // Pergi ke page pengesahan
  window.location.href = "pengesahan.html";
});
