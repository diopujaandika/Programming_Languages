/**
 * VARIABLE
 * Variable adalah wadah untuk menampung sebuah nilai.
 * Value yang ditampung bisa berupa angka, teks, ataupun yang menghasilkan value (expression).
 * 
 * 4 Cara membuat varible pada JS
 *      1. automatically => Otomatis akan mengetahui nilainya
 *      2. var => keyword variable pada js yang tidak bisa diinisialisasi ulang dan boleh dikosongkan.
 *      3. let => masih bisa diinisialisasi ulang nilainya dan boleh dikosongkan
 *      4. const => keyword variable pada js yang tidak bisa diinisialisasi ulang nilainya dan tidak boleh dikosongkan.
 * 
 * NOTE: Umumnya pembuatan variable dalam JS menggunakan sintaksis const dan let
 */

//Contoh automatically
    autoVaribale = 22           
    console.log(autoVaribale, 'adalah', typeof(autoVaribale))      

//Contoh var 
    var varVariable
    varVariable = 'Dio'           
    console.log(varVariable, 'adalah', typeof(varVariable)) 

//Contoh let
    let letVariable = true
    console.log(letVariable, 'adalah', typeof(letVariable))

//Contoh const
    const constVariableName = "Dio Puja Andika"
    const constVariableAge = 22
    console.log(`Nama Saya adalah ${constVariableName}, usia Saya saat ini adalah ${constVariableAge} tahun!`)

//Contohh 1
const id = 123;
let username = 'Dicoding'

console.log(id); //Output: 123
console.log(username); //Output: Dicoding

console.log('Sebelum diubah', username); //Output: Sebelum diubah: Dicoding
username = 'Dicoding Academy';
console.log('Setelah diubah', username); //Output: Setelah diubah: Dicoding Academy

//ATURAN PENAMAAN VARIABLE
//1. Tidak boleh memberikan nama yang sama dalam cakupan yang sama
    //Company data
    const name = "Dicoding"
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