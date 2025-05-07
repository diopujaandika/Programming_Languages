//LOOPING
/**
 * Looping adalah statements yang memungkinkan kita untuk mengeksekusi kode yang sama secara berulang.
 * 
 * Jenis-jenis Looping
 * 1. For Loop
 * 2. For In
 * 3. For Of
 * 4. While 
 * 5. Do-While
 */

//1. For adalah looping yang paling umum dilakukan.
    //a. For Loop => for(variableAwal; testkondisi; increment){}
        for(let i=0; i<5; i++){
            console.log(`Angka ke-${i} adalah ${i}`)
        }
    //b. For In digunakan untuk loopin pada object karena dapat melakukan iterasi ke seluruh data di dalam object.
        const person = {name: 'Fulan', origin: 'Bandung', brithYear: 2024}
        for (const property in person){
            console.log(`${property}, bernilai ${person[property]}`)
        }
    //c. For Of lebih sederhana daripan For In karena tidak perlu memikirkan property dan key
        const name = ['Bebek', 'Ayam', 'Telor', 'Tempe']
        for (const item of name){
            console.log(item)
        }

//2. While Statement akan mengeksekusi statement ketika kondisinya bernilai truthy.
/**
 * while(condition)
 *      statement
 */
    let i = 0
    while (i<5) {
        console.log(`Angka ke-${i} adalah ${i}.`)
        i++
    }

//3. Do-While mirip dengan while tapi dilakukan di akhir.
/**
 * do {
 *      do something
 * } while(condition)
 */
    i = 0
    do{
        console.log(`Angka ke-${i} adalah ${i}.`)
        i++
    }while(i<5)

