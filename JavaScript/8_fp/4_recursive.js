// REKURSI
/*
    Rekursi (recursive) banyak digunakan dalam pemrograman fungsional karena merupakan cara yang alami dan satu-satunya untuk melakukan perulangan atau mengiterasi data. 
    
    Rekursi dapat menghasilkan solusi yang lebih elegan untuk menyelesaikan banyak masalah.
    
    Rekursi adalah teknik sebuah fungsi memanggil dirinya sendiri sehingga operasi dalam fungsi tersebut terus berulang sampai mencapai kondisi tertentu untuk ia keluar dari perulangannya.
*/

// Contoh 
// function generateArray(n) {
//   const result = [];
//   for (let counter = 0; counter <= n; counter += 1) {
//     result.push(counter);
//   }
//   return result;
// }

// console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]
/*
    Dengan cara di atas, masalah memang dapat terselesaikan, tetapi sekali lagi dalam FP tidak ada memperbolehkan perubahan data sehingga kita tidak bisa mengubah nilai dari variabel counter.
*/
function generateArray(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArray(n - 1), n];
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]