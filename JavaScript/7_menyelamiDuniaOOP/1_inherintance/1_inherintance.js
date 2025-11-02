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

// SuperClass
class SmartPhone {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}

// Class
class iOS extends SmartPhone {
    airDrop() {
        console.log('iOS have a behavior AirDrop')
    }
}
class Android extends SmartPhone {
    splitScreen() {
        console.log('Android have a Split Screen');
    }
}

const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging();
ios.airDrop(); 

android.charging();
android.splitScreen();

// Mengecheck asal muasal class => instanceof
console.log(ios instanceof SmartPhone); // True
console.log(android instanceof SmartPhone); // True