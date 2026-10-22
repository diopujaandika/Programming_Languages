/*
    Tipe data primitf pada JavaScript ada:
    1. String       => Tipe data yang merepresentasikan Teks.
    2. Number       => Tipe data yang merepresentasikan Angka.
    3. Boolean      => Iipe data yang merepresentasikan kondisi Benar dan Salah.
    4. Null         => Tipe data yang merepresentasikan valuenya sengaja diberi value NULL (dikosongkan).
    5. Undefined    => Tipe data yang merepresentasikan valuenya belum diinisialisasi.
 */

//1. String => Tipe data untuk Teks
    //a. Single Quote
        const myString = 'Puja Indonesia'; //String dengan Single Quote
    //typeOf(name_variable) => Keyword yang digunakan untuk melihat type data
        console.log(myString, 'beritpe data: ', typeof(myString));
        console.log('Ini merupakan contoh pertama string di JavaScript dengan single quote', myString); 

    //Double Quote
        const stringDouble = "Puja Education";
        console.log("Ini merupakan contoh string di JavaScript dengan double quote", stringDouble); //String dengan Duoble Quote
    
    //Backtick (Backtick ini spesial karena dapat mendeklarasikan variable langsung dengan menggunakan ${Variable} dan apa yang di console.log akan di tampilkan secara persis seperti enter)
        const stringBacktick = `Puja Technology`;
        console.log(`Ini merupakan contoh string di 
            JavaScript dengan Backtick ${stringBacktick}`) //String dengan Backtick
    
//2. Number => Tipe data untuk Angka
    //Bilangan bulat
        const resultNumber = 50;
        console.log(typeof(resultNumber));
        console.log(resultNumber);
    //Bilangan Pecahan
        const resultFraction = 50.5;
        console.log(resultFraction);

    //Tipe data number juga memiliki nilai spesaial yaitu infinity dan NaN.
    //Infinty => dihasilkan ketika kita melakukan operasi aritmatika yang tidak terdefinisikan atau tidak bisa di oprasikan, seperti membagi sebuah nilai dengan nol.
        const resultInfinity = 50/0; //Infinity 
        console.log(resultInfinity);
    
    //NaN (Not a Number ) => dihasilkan ketika nilai non-numerik diubah ke tipe data number.
        const resultNaN = Number('Dicoding'); //NaN
        console.log(resultNaN);

//Boolean => Tipe data benar/salah
    //True
    const completed = true;
    //False
    const passed = false;
    console.log(completed, passed); //true false
    const isGreater = 5>2;
    console.log(isGreater); //true

//Nilai Kosong (Null & Undefined)
    //Null adalah value yang dideklarasikan secara eksplisit atau sengaja dikosongkan
    //Contoh
    let messageNull = null;
    console.log(typeof(null));
    console.log(messageNull);
    
    //Undefined adalah value yang dideklarasikan implisit atau belum didefinisikan
    let messageUndefined;   
    let message = undefined; 
    console.log(messageUndefined);
    
    //Mungkin terlihat sama Null dan Undefined, tetapi keduanya berbeda
    const name1 = {fist: 'Dicoding', last: null}; //Value Null akan terlihat meskipun nilai kosong (disarankan menggunakan ini)
    const name2 = {fist: 'Dicoding', last: undefined}; //Undefined akan benar-benar kosonng tanpa terlihat (tidak disarankan menggunakan ini)
    console.log(JSON.stringify(name1));
    console.log(JSON.stringify(name2));