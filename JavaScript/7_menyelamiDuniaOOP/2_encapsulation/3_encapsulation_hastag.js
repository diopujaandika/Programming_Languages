/**
 * ENCAPSULATION
 * Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. 
 * Dengan encapsulation kita dapat menyembunyikan data, sebab desain oop yang baik itu hanya menampilkan data yang dibutuhkan oleh object lain sehingga membuat data yang ada di class sebagai private.
 */

//Contoh 1
class CoffeMachine{
    #temperature = 100

    constructor(waterAmount){
        this.waterAmount = waterAmount
        this.#temperature = this.#defaultTemperature()
    }

    set temperature(temperature){
        console.log('You are not allowed to change the temperature')
    }

    get temperature(){
        return this.#temperature
    }

    #defaultTemperature(){
        return 100
    }
}

const coffee = new CoffeMachine(10)
console.log('Sebelum diubah: ', coffee.temperature)
coffee.temperature = 100
console.log('Setelah diubah: ', coffee.temperature)