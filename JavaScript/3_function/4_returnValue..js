/**
 * RETURN VALUE
 * Return value adalah nilai yang dikembalikan oleh sebuah function setelah function itu selesai dijalakan 
 */

function sumNumber(a, b){
    const result = a + b;
    console.log(result);
    return result;
}
const askNumber = sumNumber(3, 4);
console.log(`Hasilnya adalah ${askNumber}`);

//Return Value membuat function statement berhenti dieksekusi jika kode sudah mencapai return statement
function generateGreetingWorldMessage(){
    return 'Hello World'; //Return Value
    console.log('Aku tidak akan tampil');
}
const message = generateGreetingWorldMessage();
console.log(message);

function convertCelsiusToFahrenheit(temperature){
    const result = 9/5 * temperature + 32
    console.log(`Hasilnya adalah: ${result}`)
    return result
}
const temperatureInFahrenheit1 = convertCelsiusToFahrenheit(90);
const temperatureInFahrenheit2 = convertCelsiusToFahrenheit(10);
const tampungTemperature = temperatureInFahrenheit1 + temperatureInFahrenheit2;
console.log(`Nilai tampung temperatur adalah ${tampungTemperature}`);

//CONTOH 2
tambahTambah(4, 5 , 3);
function tambahTambah (a, b , c){
    const resutl = a + b + c;
    return(resutl);
}
hasil1 = tambahTambah(1, 2, 3);
hasil2 = tambahTambah(3, 4, 5);
const result = hasil1 + hasil2;
console.log('Hasil dari Contoh 2 adalah = ', result);  //Hasil NaN

//CONTOH 3
function hitungLuas(sisi = 0){
    return sisi * sisi
}
const luas = hitungLuas(2)
console.log("Luas bangunan tersebut adalah", luas)

//CONTOH 4
function cekUmur(umur){
    return umur > 20
}
function cekPengalaman(tahunPengalaman){
    return tahunPengalaman > 1
}
function cekKelayakan(nama, umur, tahunPengalaman){
    if (cekUmur(umur) && cekPengalaman(tahunPengalaman)){
        return `${nama} memenuhi syarat untuk melamar pekerjaan. Karena usia ${nama} masih ${umur} tahun dan pengalaman kerja ${tahunPengalaman} tahun.`
    } else {
        return `${nama} tidak memenuhi syarat kelayakan untuk melamar pekerjaan. Karena usia ${nama} masih ${umur} tahun dan pengalaman kerja ${tahunPengalaman} tahun.`
    }
}
console.log(cekKelayakan("Dio Puja Andika", 23, 2))

//CONTOH 5
function hitungSubTotal(harga, jumlah){
    return harga * jumlah
}
function hitungDiskon(subTotal){
    if(subTotal >= 100000){
        return subTotal * 0.1
    }
}
function hitungTotal(harga, jumlah){
    const subTotal = hitungSubTotal(harga, jumlah)
    const diskon = hitungDiskon(subTotal)

    return subTotal - diskon
}
const totalBayar = hitungTotal(25000, 5)
console.log(`Total yang harus dibayar adalah: Rp.${totalBayar}`);
