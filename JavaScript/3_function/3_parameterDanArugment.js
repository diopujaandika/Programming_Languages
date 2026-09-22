/**
 * PARAMETER
 * Parameter adalah variabel yang menyimpan nilai krakteristik sebuah function  
 * ARGUMENT
 * Argument adalah data yang dikirimkkan ke dalam function saat function dipanggil baik berupa nilai langsung ataupun berupa variable
 */

//CONTOH 1
function convertCelsiusToFahrenheit(temperature = 70){   //temerature adalah parameter
    const temperatureInFahrenheit = 9/5*temperature+32;

    console.log('Hasil konversi: ', temperatureInFahrenheit);
}
convertCelsiusToFahrenheit();    //Default Parameter dari Function 
convertCelsiusToFahrenheit(80);  //Argument Langsung
const argumentValue = 90;     
convertCelsiusToFahrenheit(argumentValue);  //Argument Variable

//CONTOH 2
tambahTambah(4, 5 , 3);
function tambahTambah (a, b , c){
    const resutl = a + b + c;
    console.log(resutl);
}
hasil1 = tambahTambah(1, 2, 3);
hasil2 = tambahTambah(3, 4, 5);
const result = hasil1 + hasil2;
console.log('Hasilnya adalah = ', result);  //Hasil NaN karena tidak mengembalikan apa-apa

//CONTOH 3
function perkerjaan(status = "Pengangguran"){   //status adalah parameter
    if(status === "Pengangguran"){
        console.log("Status pekerjaan Anda adalah", status);
    } else {
        console.log("Status pekerjaan Anda adalah", status);
    }
}
perkerjaan(); //Default Argument
perkerjaan("Software Engineer"); //Argument Langsung

const pekerjaan1 = "Frontend Developer"; //Argument Variable
perkerjaan(pekerjaan1);