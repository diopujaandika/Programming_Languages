//IMPORT 
/**
 * Syarat menggunakan Import
 * 1. Harus meng-import function/method tersebut
 * 2. Function/method tersebut sudah di-export
 * 3. Jika ingin mengimport tuliskan keyword import diikuti dengan function/method/variable kemudian diikuti dengan path file
 */

    //1. Import menggunakan defult untuk function/method/variable yang namanya tidak harus sama dengan function/method/variable aslinya
        import result from './2_export.js'
        result()

    //2. Import berikut membutuhkan nama function/method/variable yang spesifik dengan nama aslinya
        import {myFunction2} from './2_export.js'
        myFunction2()

    //3. Bagaimana mengimport suatu modul yang memiliki banyak function/method/variable?
        import {name, email, age} from './2_export.js'
        console.log(name)
        console.log(email)
        console.log(age)

    //4. Cara yang lebih ringkas untuk import jika terdapat modul yang sama sangat banyak gunakan as (alias)
        import * as variable from './2_export.js' 
        console.log(variable.name)
        console.log(variable.email)
        console.log(variable.age)

    //5. Jika terdapat nama function/method/variable yang sama gunakan metode inisal as
    import {myFunction1 as export3} from './3_export.js'
    import {myFunction1 as export4} from './4_export.js'
    
    export3()
    export4()