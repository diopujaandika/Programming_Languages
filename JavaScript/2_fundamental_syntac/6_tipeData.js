/*
    Tipe data pada JavaScript ada:
    1. String
    2. Number
    3. Boolean
    4. Null & Undefined
 */

//String => Tipe data huruf
    //Single Quote
    const myString = 'Dicoding' 
    //typeOf(variable) => Keyword yang digunakan untuk melihat type data
    console.log(typeof(myString))
    console.log('Ini merupakan contoh string di JavaScript dengan single quote', myString) //Strind dengan single quote
    //Double Quote
    console.log("Ini merupakan contoh string di JavaScript dengan double quote", myString) //Strind dengan duoble quote
    //Backtick (spesial sebab dapat mendeklarasikan variable langsung dengan menggunakan ${Variable} dan apa yang di console.log akan di tampilkan secara persis seperti enter)
    console.log(`Ini merupakan contoh string di 
        JavaScript dengan Backtick ${myString}`) //Strind dengan backtick
    
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
    //Null adalah expression yang dideklarasikan secara eksplisit
    //Contoh
    let messageNull = null
    console.log(typeof(null))
    console.log(messageNull)
    
    //Undefined adalah expression yang dideklarasikan implisit
    let messageUndefined 
    console.log(messageUndefined)

    const name1 = {fist: 'Dicoding', last: null} //Expression Null akan terlihat meskipun nilai kosong
    const name2 = {fist: 'Dicoding', last: undefined} //Undefined akan benar-benar kosonng tanpa terlihat
    console.log(JSON.stringify(name1))
    console.log(JSON.stringify(name2))