/*
    Tipe data pada JavaScript ada:
    1. String       => Tipe data yang expressionnya berupa Huruf
    2. Number       => Tipe data yang expressionnya berupa Angka
    3. Boolean      => Iipe data yang expressionnya berupa kondisi Benar dan Salah
    4. Null         => Tipe data yang expressionnya sengaja bernilai NULL (dikosongkan)
    5. Undefined    => Tipe data yang expressionnya belum dideklarasikan
 */

//String => Tipe data huruf
    //Single Quote
    const myString = 'Dicoding' 
    
    //typeOf(variable) => Keyword yang digunakan untuk melihat type data
    console.log(typeof(myString))

    console.log('Ini merupakan contoh string di JavaScript dengan single quote', myString) //String dengan Single Quote

    //Double Quote
    console.log("Ini merupakan contoh string di JavaScript dengan double quote", myString) //String dengan Duoble Quote
    
    //Backtick (spesial sebab dapat mendeklarasikan variable langsung dengan menggunakan ${Variable} dan apa yang di console.log akan di tampilkan secara persis seperti enter)
    console.log(`Ini merupakan contoh string di 
        JavaScript dengan Backtick ${myString}`) //String dengan Backtick
    
//Number => Tipe data angka
    //Bilangan bulat
    const resultNumber = 50
    console.log(typeof(resultNumber))
    console.log(resultNumber)
    //Bilangan Pecahan
    const resultFraction = 50.5
    console.log(resultFraction)
    //Infinty
    const resultInfinity = 50/0 //Tidak bisa di oprasikan
    console.log(resultInfinity)
    //NaN (Not a Number )
    const resultNaN = Number('Dicoding') //String
    console.log(resultNaN)

//Boolean => Tipe data benar/salah
    //True
    const completed = true
    //False
    const passed = false
    console.log(completed, passed)
    const isGreater = 5>2
    console.log(isGreater)

//Nilai Kosong (Null & Undefined)
    //Null adalah expression yang dideklarasikan secara eksplisit atau sengaja dikosongkan
    //Contoh
    let messageNull = null
    console.log(typeof(null))
    console.log(messageNull)
    
    //Undefined adalah expression yang dideklarasikan implisit atau belum didefinisikan
    let messageUndefined 
    console.log(messageUndefined)

    const name1 = {fist: 'Dicoding', last: null} //Expression Null akan terlihat meskipun nilai kosong
    const name2 = {fist: 'Dicoding', last: undefined} //Undefined akan benar-benar kosonng tanpa terlihat
    console.log(JSON.stringify(name1))
    console.log(JSON.stringify(name2))