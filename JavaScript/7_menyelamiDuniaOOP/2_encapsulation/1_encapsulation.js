/**
 * ENCAPSULATION
 * Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. 
 * Dengan encapsulation kita dapat menyembunyikan data, sebab desain oop yang baik itu hanya menampilkan data yang dibutuhkan oleh object lain sehingga membuat data yang ada di class sebagai private.
 */

//Contoh 1
class CoffeMachine{
    constructor(waterAmount){
        this.waterAmount = waterAmount
        this.temperature = 90
    }

    makeCoffe(){
        console.log('Membuat kopi dengan suhu', this.temperature)
    }
}

const coffee = new CoffeMachine(100)
coffee.temperature = 60

coffee.makeCoffe()