/**
 * FUNCTION
 * Function adalah blok kode yang dirancang untuk melakukan tugas tertentu dan bisa digunakan berulang kali dalam program.
 */
/**
 * Terdapat 3 bagian utaman di Function yaitu:
 * 1. Function Keyword => function :Keyword yang mendeklarasikan jika ini adalah sebuah function
 * 2. Identifier => namaIdentifier()
 * 3. Function Body =>{}
 */


//Contoh sederhana Function Default
    //Contoh 1
    function greetWorld(){
        console.log('Hello World!');
    }
    greetWorld();

    //Contoh 2
    function haloDunia(){
        console.log("Halo Dunia!");
    }
    haloDunia();

    //Contoh 3
    function biodata(name, age, job, country) {
        console.log(`
            Hello, my name is ${name}. 
            I am ${age} years old. 
            I am a ${job}. and 
            I live in ${country}.`
        );
    }
    biodata('Dio Puja Andika', 23, 'Software Engineer', 'Indonesian');

    //Contoh 4
    function dataSaya(nama, usia, pekerjaan, perusahaan, negara){
        console.log(`Hai Nama Saya adalah ${nama}, saat ini Saya berusia ${usia} tahun. Saya sedang bekerja sebagai ${pekerjaan} di ${perusahaan} - ${negara}.`);
    }
    dataSaya("Dio Puja Andika", 23, "Software Engineer", "PT. Freeport", "Indonesia");