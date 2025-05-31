//OBJECT DAN CLASS
/**
 * Inheritance adalah salah satu pilar OOP yang memungkinkan kita untuk mewariskan property dan method dari sebuah class ke class yang lain. Umumnya property dan method yang diwariskan berasal dari class (induk) dan digunakan oleh class baru (anak) sehingga memabtu mengurangi penulisan kode secara berulang.
 * 
 * Struktur Inheritance
 *      class SuperClass{}
 * 
 *      class SubClass extands SuperClass{}
 * 
*/

class SmartPhones{
    constructor(color, brand, model){
        this.color = color
        this.brand = brand
        this.model = model
    }

    charging(){
        console.log(`Charging ${this.model}`)
    }
}

class iOS extends SmartPhones{
    airDrop(){
        console.log('iOS have a behavior AirDrop')
    }
}

class Android extends SmartPhones{
    splitScreen(){
        console.log('Android have a Split Screen')
    }
}

const ios = new iOS('black', 'A', '12 Pro Max')
const android = new Android('white', 'B', 'Galaxy S21')

ios.charging()
ios.airDrop()

android.charging()
android.splitScreen()

console.log(ios instanceof SmartPhones)
console.log(android instanceof SmartPhones)