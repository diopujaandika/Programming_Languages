/**
 * VARIABLE
 * Variable adalah wadah untuk menampung sebuah nilai.
 * Value yang ditampung bisa berupa angka, teks, ataupun yang menghasilkan value (expression).
 * 
 * 4 Cara membuat varible pada JS
 *      1. automatically => Otomatis akan mengetahui nilainya
 *      2. var => keyword variable pada js yang tidak bisa diinisialisasi ulang dan boleh dikosongkan.
 *      3. let => masih bisa diinisialisasi ulang nilainya dan boleh dikosongkan.
 *      4. const => keyword variable pada js yang tidak bisa diinisialisasi ulang nilainya dan tidak boleh dikosongkan.
 * 
 * NOTE: Umumnya pembuatan variable dalam JS menggunakan sintaksis const dan let.
 */

//Automatically: otomatis mengetahui value dari variable.
    autoVarible = 23;
    console.log(autoVarible, 'adalah tipe data', typeof(autoVarible));      

//var: keyword variable pada js yang boleh di deklarasi ulang dalam scope yang sama dan value dapat di isi, di kosongkan, atau diinisialisasi ulang.
    var varVariable;
    varVariable = 'Dio';
    var varVariable = 'Puja';
    var varVariable = 'Andika';
    console.log(varVariable, 'adalah', typeof(varVariable));
    //Akibat hal ini dimana nilainya bisa diubah dan variablenya terlalu flexible penggunaan var sudah tidak dianjurkan lagi, kecuali digunakan untuk maintenance kode lama.

//let: keyword variable pada js yang tidak bisa dideklarasikan ulang dalam scope yang sama dengan value boleh di isi, dikosongkan, ataupun diinisialisasi ulang.
    let letVariable = true;
    letVariable = false;
    // let letVariable = false; //Ini akan error karena penggunaan let dalam scope yang sama tidak bisa.
    console.log(letVariable, 'adalah', typeof(letVariable))

//const: keyword variable pada js yang tidak boleh dideklarasikan dan value tidak boleh dikosongkan serta diinisalisasi ulang.
    const constVariableName = "Dio Puja Andika";
    // constVariableName = 'Dicoding Indonesia'; //Error, karena nilai dari const harus konstan dan tidak dapat diubah.
    const constVariableAge = 22;
    console.log(`Nama Saya adalah ${constVariableName}, usia Saya saat ini adalah ${constVariableAge} tahun!`);

//Contohh 1
const id = 123;
var username = 'Dicoding';

console.log(id); //Output: 123
console.log(username); //Output: Dicoding

console.log('Sebelum diubah', username); //Output: Sebelum diubah: Dicoding
username = 'Dicoding Academy';
console.log('Setelah diubah', username); //Output: Setelah diubah: Dicoding Academy

//ATURAN PENAMAAN VARIABLE
//1. Tidak boleh memberikan nama yang sama dalam cakupan yang sama
    //Company data
    const name = "Dicoding";
    const legal = 'LLC'

    //Employee data
    // const name = 'Jhon' //SyntacError karena kita menggunakan nama variable yang sama pada cakupan yang sama
    const division = 'IT'
    
//2. Nama variable hanya terdiri darai karakter tertentu
    //Nama variabel yang benar
    const firstName = 'Fulan';
    const last_name = 'Lestari';
    const $message = 'Hello, World!';
    const userId1 = 123;
    const userId2 = 456;

    //Nama Variabel yang salah
    // const first-Name = 'Fulan'; //Tidak boleh mengandung karakter -
    // const last name = 'Lestari'; //Tidak boleh mengandung spasi
    // const @message = 'Hello, World!'; //Tidak boleh mengandung karakter @

//3. Nama variable tidak boleh diawali dengan angka
    //Nama variable yang benar
    const firstNameAgain = 'Fulan';
    const _secondName = 'Fulana';
    
    //Nama variable yang salah karena diawali dengan angka
    // const 1stName = 'Fulan';
    // const 2ndName = 'Fulana';