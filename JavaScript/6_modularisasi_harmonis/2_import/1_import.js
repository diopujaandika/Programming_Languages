//IMPORT 
/**
 * Syarat menggunakan Import
 * 1. Harus meng-import function/method tersebut
 * 2. Function/method tersebut sudah di-export(export akan dibahas di materi selanjutnya)
 */

//1. Import menggunakan defult untuk function/method/variable yang namanya tidak harus sama dengan function/method/variable aslinya
import result from './anotherfile.js'
result()

//2. Import berikut membutuhkan nama function/method/variable yang spesifik dengan nama aslinya
    import {myFunction2} from './anotherfile.js'
    myFunction2()

//3. Bagaimana mengimport suatu modul yang memiliki banyak function/method/variable?
import {name, email, age} from './anotherfile.js'
console.log(name)
console.log(email)
console.log(age)

//4. Cara yang lebih ringkas untuk import jika terdapat modul yang sama sangat banyak gunakan as (alias)
import * as variable from './anotherfile.js' 
console.log(variable.name)
console.log(variable.email)
console.log(variable.age)