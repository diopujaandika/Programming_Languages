/*
    FP menawarkan banyak manfaat, selain kode jadi lebih ringkas, kode yang ditulis juga akan lebih mudah untuk diuji karena fungsi yang dibuat hasilnya selalu terprediksi.
    Untuk mencapai itu dibutuhkan konsep pure function.

    Pure Function merupakan istilah bagi sebuah fungsi yang memiliki dua sifat berikut;
    1. Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama
    2. Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
    Jika tidak memenuhi kedua kriteria ini makan fungsi akan dikategorikan sebagai impure function.
*/

// Contoh Impure Function
let value = 0

function addWith(addingValue) {
    value += addingValue;
    console.log(`Current value is ${value}`);
    return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

// Mengubah nilai variabel global
let count = 0;
function increment() {
    count++;
}

// Mengakses waktu sistem
function getCurrentTime(){
    return new Date().toLocaleTimeString();
}
// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
    user.name = "Update Name";
}
// Menulis ke berkas
const fs = require('fs');

function writeToFile(date) {
    fs.writeFileSync('date.txt', data);
}