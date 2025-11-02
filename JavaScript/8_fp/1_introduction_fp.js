/*
    FUNCTIONAL PROGRAMMING (FP)
    Functional Programming atau FP adalah paradigma pemrograman yang didasarkan pada fungsi matematika murni, yakni fungsi harus menghindari perubahan data sehingga selalu menghasilkan nilai sama ketika diberikan arguman sama.

    Dalam FP, fungsi adalah elemen utama yang digunakan untuk mecahkan kode dan membangun keselurahan program.

    Dengan menerapkan konsep-konsep dalam FP, kita dapat membangun aplikasi menggunakan kode yang deklaratif (lebih simpel, tagas, dan terprediksi)
*/

//Contoh Kode Imperatif
const name = ['Harry', 'Rony', 'Jeff', 'Thomas'];
const newNameWithExcMark = [];

for(let i = 0; i < name.length; i++){
    newNameWithExcMark.push(`${name[i]}!`);
}

console.log(newNameWithExcMark);

//Contoh Kode Deklaratif
const nama = ['Heri', 'Roni', 'Jepp', 'Tomas'];
const newNamaWithExcMark = nama.map((nama) => `${nama}!`)

console.log(newNamaWithExcMark)