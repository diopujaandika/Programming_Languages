/**
 * VARIABLE
 * Variable adalah wadah untuk menampung sebuah nilai
 * 
 * 4 Cara membuat varible pada JS
 *      1. Automatically => Otomatis akan mentahui nilainya
 *      2. var => keyword variable pada js yang tidak bisa diinisialisasi ulang dan boleh dikosongkan.
 *      3. let => masih bisa diinisialisasi ulang nilainya dan boleh dikosongkan
 *      4. const => keyword variable pada js yang tidak bisa diinisialisasi ulang nilainya dan tidak boleh dikosongkan
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
let username = 'Dicoding';

console.log(id); //Output : 123
console.log(username); //Output : Dicoding