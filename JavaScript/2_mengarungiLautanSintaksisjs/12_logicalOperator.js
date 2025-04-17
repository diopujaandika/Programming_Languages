/*
 * OPERATOR 
 * Operator adalah simbol atau teks yang digunakan untuk melakukan sebuah operasi.
 * OPERAN
 * Operan adalah nilai yang menjadi target dari sebuah operasi
 */

//Contoh
let a = 5
let b = 10
    //1. AND[&&] Semua Operan True makan output True.
    console.log(true && true); // true
    console.log(false && true); // false
    console.log(true && false); // false
    console.log(false && false); // false
    console.log((5 === 5) && (3 < 5)); // true

    //2. OR[||] Salat Satu Operan True dan lainnya False maka Output True, dan sebaliknya.
    console.log(true || true); // true
    console.log(false || true); // true
    console.log(true || false); // true
    console.log(false || false); // false
    console.log((5 === 5) || (3 > 5)); // true

    //3. NOT[!] Ouput True akan False dan sebaliknya.
    console.log(!true); // false
    console.log(!false); // true