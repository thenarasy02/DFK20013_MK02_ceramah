document.getElementById("tempahanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data borang
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const telefon = document.getElementById("telefon").value;
  const kategori = document.getElementById("kategori").value;
  const slot = parseInt(document.getElementById("slot").value);

  const hargaSlot = 250;
  const jumlahYuran = hargaSlot * slot;

  // Buka page baru
  const printPage = window.open("", "_blank");

  // Tulis content page baru
  printPage.document.write(`
    <!DOCTYPE html>
    <html lang="ms">
    <head>
      <title>Pengesahan Pendaftaran</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="p-4">

      <h2 class="text-center mb-4">Pengesahan Pendaftaran</h2>

      <table class="table table-bordered text-center">
        <thead class="table-primary">
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>No Telefon</th>
            <th>Kategori</th>
            <th>Slot</th>
            <th>Harga / Slot (RM)</th>
            <th>Jumlah (RM)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${nama}</td>
            <td>${email}</td>
            <td>${telefon}</td>
            <td>${kategori}</td>
            <td>${slot}</td>
            <td>${hargaSlot.toFixed(2)}</td>
            <td><strong>${jumlahYuran.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>

      <p class="text-success fw-bold text-center">
        Pendaftaran Berjaya
      </p>

      <div class="text-center mt-4">
        <button class="btn btn-primary" onclick="window.print()">
          Cetak / Print
        </button>
      </div>

    </body>
    </html>
  `);

  printPage.document.close();
});
