//EXPORT 
/**
 * Export adalah keyword yang digunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul saat ini.
 * 
 * Jenis-jenis Export
 * 1. default export
 * 2. named export
 */

//export dengan default export
export default function myFunction1(){
    console.log('Ini adalah function export default.')
}

//export dengan nama function/method/variable spesifik
export function myFunction2(){
    console.log('Ini adalah contoh named import.')
}

//export dengan banyak function/method/variable
const name = 'Jhon'
const email = 'jhon@gmail.com'
const age = 25

export {name, email, age} //named export
