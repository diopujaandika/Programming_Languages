//Terdapat empat cara untuk mendeklarasikan variabel dalam JavaSciprt 
/*
    Automatically
    var
    let 
    const
*/

//Contoh Automatically
x = 10                  //Tanpa key Variable
console.log(x)      
x = '11'                //Tipe data berubah dari number ke string
console.log(typeof(x))

//Contoh Var 
var y = 'Dio'           
console.log(y) 
y = 10                  //Tipe data berubah dari string ke number
console.log(typeof(y))

//Contoh let
let z = 2
console.log(z)
z = true                //Tipe data berubah dari number ke boolean
console.log(typeof(z))

//Contoh const
const xyz = 'Dio Puja Andika'
console.log(xyz)
//xyz = 100               //Variable dengan const tidak dapat diubah
console.log(typeof(xyz))