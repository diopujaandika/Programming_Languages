/**
 * COMMENT
 * Comment adalah catatan yang ditulis dalam program dan diabaikan ketika di jalankan.
 * Terdapat dua cara menuliskan comment pada JavaScript yaitu Single Line Comment dan Multiple Line Comment. 
 */


//Single Line Comment => Comment satu baris!

/**
 * Multiple Line Comment => Comment banyak baris!
 * 1. Comment 1
 * 2. Comment 2
 * 3. Comment 3
 */

console.log('Hai, Readers!');
console.log('Hai, JavaScript');
console.log("Dio Puja Andika");

const PI = '3.14';
console.log(PI);

//Ada yang menarik di JavaScript yaitu JSDoc
/**
 * JSDoc adalah cara untuk menulis dokumentasi langsung diatas kode JS menggunakan komentar khusus.
 * Fungsinya:
 * 1. Membuat kode lebih mudah dipahami.
 * 2. VSCode bisa menampilkan informasi parameter dan return value saat autocomplete.
 * 3. Membantu saat maintenance ketika proyek sudah besar
 */

/**
 * CONTOH JSDoc
 * Menjumlahkan dua ankka.
 * @param {number} a - Angka pertama
 * @param {number} b - Angka kedua
 */

function tambah(a, b){
    console.log(`Hasil dari ${a} + ${b} adalah ${a+b}`)}
tambah(3, 4)
