const khodamNames = [
  "Ultraman Hijau",
  "Rangger Pink",
  "Ikan Kepala Ultraman",
  "Rangger Hitam",
  "Ayam Kampung",
  "Rangger Merah",
  "Neymar Bogor",
  "Ikan Sepat",
  "Ayam Warna Kuning",
  "Tahu Gejrot",
  "Lele Kurus",
  "Es Batu",
  "Kunti Berjigong",
  "haryono ngesot",
  "hartono merangkak",
  "eko tunggal",
  "Bagas dribble",
  "suster ngesot",
  "kuntilanak perawan",
  "dedi capung",
  "harimau logam",
  "tape ketan",
  "Agus ikan",
  "Tutup Panci",
  "Pisang Goreng",
  "Mas Faiz",
  "Ultraman Mewing",
  "Alok",
  "Nasi Padang",
  "Genderuwo Cilacap",
  "Keju Joget",
  "Sendal Jepit",
  "Beat Mber",
  "Agus Kopling",
  "Stella Jeruk",
  "Rawa Rontek",
  "Telur Emas",
  "Undur-Undur",
  "Bebek Madura",
  "Spak bor mio",
  "Gunting kuku",
  "Payung",
  "Ban dalam",
  "Tanah liat",
  "Kabel wifi",
  "Kabel data",
  "Lem vox",
  "Pisang godok",
  "Pisang bakar",
  "Oli samping",
  "Kopling supra",
  "Sen kanan",
  "Sen kiri",
  "Singa standing",
  "Guru mtk",
  "Bunga sepatu",
  "Tali sepatu",
  "Ban bocor",
  "Kompor listrik",
  "Kompor",
  "Banyuwangi",
  "Spion kanan",
  "Spion kiri",
  "Velg",
  "Tidak ada",
  "Tiang listrik",
  "Pasir ajaib",
  "Kuntilanak",
  "Pocong",
  "Genderuwo",
  "Tuyul",
  "Nyiblorong",
  "Nyi rorokidol",
  "Tongkat besi",
  "Suster ngesot",
  "Vampir",
  "Gak ada",
  "Kosong",
  "Blum ada",
  "Tidak punya",
  "Jet",
  "Rapi ahmat",
  "Gigi",
  "Temper glas",
  "Minyak tanah",
  "Bensin",
  "Pertamax",
  "Pertalite",
  "Pertamin",
  "Sendok",
  "Garpu",
  "Panel surya",
  "Casing",
  "Modem wifi",
  "Jok motor",
  "Standard supra",
  "Kursi duduk",
  "Gajah duduk",
  "Wadimor",
  "Piring kaca",
  "Piring keramix",
  "Piring atom",
  "Keyboard",
  "Mouse pc",
  "Kartu sd",
  "Usb",
  "Hdd",
  "Chrome",
  "Kak Gem",
  "Bagas Dribel",
  "Badut Seram"
];

function cekKhodam() {
  const randomIndex = Math.floor(
    Math.random() * khodamNames.length
  );
  const randomKhodam = khodamNames[randomIndex];
  const nama = document
    .getElementById("nama")
    .value.trim();

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  const resultElement =
    document.getElementById("result");
  resultElement.innerHTML = `<h3>Hasil Chek:</h3><h2>${nama}: ${randomKhodam}</h2>`;

  const inputNama =
    document.getElementById("nama");
  inputNama.value = "";
}

const form = document.getElementById("danang");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  cekKhodam();
});
