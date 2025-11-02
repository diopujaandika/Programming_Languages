/**
 * ENCAPSULATION
 * Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. 
 * Dengan encapsulation kita dapat menyembunyikan data, sebab desain oop yang baik itu hanya menampilkan data yang dibutuhkan oleh object lain sehingga membuat data yang ada di class sebagai private.
 */

// class itu mendefinisikan 2 har yaitu property dan method. Sehingga kita harus mengatur akses dari keduanya. Secara umum, property

class CoffeMachine {
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.temperature = 90;
    }

    makeCoffe() {
        console.log('Membuat kopi dengan suhu', this.temperature);
    }
}

const coffee = new CoffeMachine(100)
coffee.temperature = 60; // Seharusnya pengubahan value diluar class tidak disarankan. Kita dapat mencegahnya dengan menggunakan getter dan setter

coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60