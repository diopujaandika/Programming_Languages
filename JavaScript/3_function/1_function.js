/**
 * FUNCTION
 * Function adalah blok kode yang dirancang untuk melakukan tugas tertentu dan bisa digunakan berulang kali dalam program.
 */
/**
 * Terdapat 3 bagian utaman di Function yaitu:
 * 1. Function Keyworld => function :Keyword yang mendeklarasikan jika ini adalah sebuah function
 * 2. Identifier => namaIdentifier()
 * 3. Function Body =>{}
 */


//Contoh sederhana Function Default
    function greetWorld(){
        console.log('Hello World!');
    }
    greetWorld();

    function haloDunia(){
        console.log("Halo Dunia!");
    }
    haloDunia();

    function biodata(nama, usia, pekerjaan, perusahaan){
        console.log(`Nama Saya ${nama} berusia ${usia} tahun, Saya bekerja sebagai ${pekerjaan} di ${perusahaan}`);
    }
    biodata("Dio Puja Andika", 23, "Software Engineer", "Google Indonesia");

    function dataSaya(nama, usia, pekerjaan, perusahaan, negara){
        console.log(`Hai Nama Saya adalah ${nama}, saat ini Saya berusia ${usia} tahun. Saya sedang bekerja sebagai ${pekerjaan} di ${perusahaan} - ${negara}.`);
    }
    dataSaya("Dio Puja Andika", 24, "Software Engineer", "PT. Freeport", "Indonesia");