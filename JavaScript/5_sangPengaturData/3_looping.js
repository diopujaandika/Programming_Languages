/**
 * LOOPING
 * Looping adalah statement yang memungkinkan kita untuk mengeksekusi kode yang sama secara berulang.
 */

//1.For adalah cara looping yang paling umum dilakukan di JavaScript yang terdiri dari for loop, for in, dan for of.
    /**
     * For Loop
     *      for(variabel awal; test kondisi; increment){
     *          //do something
     *      }
    */
    for(let i = 0; i < 5; i++) {
        console.log(`Angka ke-${i} adalah ${i}`)
    }

    /** For In digunakan untuk pengulangan pada object
     */
    const person = {name: 'Dio', origin:'Bangkulu', birthYear: 2025}
    for(const property in person){
        console.log(`${property} bernilai ${person[property]}`)
    }
