// HIGH ORDER FUNCTION (HOF)
/*
    HOF adalah fungsi yang menerima fungsi lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain. 
    
    HOF umumnya digunakan sebagai:
    1. Mengabstraksi fungsi aksi dari sebuah proses asynchronous dalam bentuk callback.
    2. Membuat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebgainya.
    3. Menerapkan teknik matematika, seperti currying dan function composistion.

    HOF memungkinkan kita untuk membuat fungsi yang fleksibel.
*/

// Contoh
function apply(operation, ...args) {
    // Kita bisa menambahkan kode lain sebelum operation dijalankan.

    return operation(...args);
}

function sum(a, b, c) {
    return a + b + c;
}

function discount(disc, value) {
    return value - ((disc/100)*value);
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log('Product price: ', productPrice);
console.log('With discount 25%: ', withDiscount);

// Contoh implementasi memoization pure function dengan teknik HOF
// Menerima argumen sebuah fungsi
function memoize(fn) {
  const cache = new Map();

  // Mengembalikan nilai berupa fungsi
  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

console.time('Memoized Sum First Call');
console.log('Total:', memoizedSumArray(largeArray));
console.timeEnd('Memoized Sum First Call');

console.time('Memoized Sum Second Call (Cached)');
console.log('Total:', memoizedSumArray(largeArray));
console.timeEnd('Memoized Sum Second Call (Cached)');

// Contoh teknik currying (fungsi tidak mengambil semua arguman secara langsung. Mengambil satu argumen dulu, lalu mengembalikan sebuah fungsi baru yang menerima argumen kedua, begitu seterusnya hingga seluruh argumen dimanfaatkan dan melalukan operasi secara utuh) pada fungsi adjectify dan multipleBy.
function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}.`;
  }
}

function multipleBy(x) {
  return function(y) {
    return x * y;
  }
}

const coolifier = adjectivfy('keren');
const funnifier = adjectivfy('seru');

const multipleByFive = multipleBy(5);

console.log(coolifier('Dicoding')); // Output: Dicoding keren.
console.log(funnifier('JavaScript')); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50

/*
    HOF juga bisa digunakan untuk komposisi fungsi, yaitu kita menggabungkan beberapa fungsi kecil menjadi satu fungsi yang lebih kompleks.
*/

function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function compose(f, g) {
  return (x) => {
    return f(g(x));
  }
}

const addOneAndSquare = compose(square, addOne);

console.log(addOneAndSquare(2)); // output: 9

/*
    Contoh di atas menunjukkan bahwa compose adalah HOF yang menggabungkan dua fungsi menjadi satu fungsi baru yang menjalankan g terlebih dahulu dan kemudian f.
*/

/*
    Secara tidak sadar, mungkin Anda juga sebetulnya sudah pernah memanfaatkan teknik HOF, tetapi belum mengenal namanya saja. Beberapa contoh HOF yang umum digunakan dalam JavaScript adalah penggunaan fungsi Array.map. Fungsi Array.map menerima sebuah fungsi sebagai argumen yang digunakan untuk memproses setiap elemen array. Fungsi Array.map mengembalikan array baru yang hasilnya adalah nilai dari pemanggilan fungsi pada setiap elemen array asli.
*/
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); //[2, 4, 6, 8, 10]