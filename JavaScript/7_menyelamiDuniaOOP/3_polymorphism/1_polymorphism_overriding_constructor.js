/*
    POLYMORPHISM
    Polymorphism adalah pilar OOP yang memungkinkan SubClass mengubah property atau method yang diturunkan/diwariskan oleh SuperClass.
    Untuk mengubah implementasi method kita dapat menggunakan konsep yang disebut dengan overriding.
*/
/*
    Overriding adalah cara untuk membuat implementasi yang berbeda di SubClass untuk menthod yang diturunkan dari SuperClass.
    Overriding dapat diterapkan untuk membuat method yang lebih spesifik di SubClass.
    Overridng juga dapat diterapkan untuk menambahkan property baru SubClass.
    Overriding dapat diterapkan pada constructor maupun pada method.
*/

// Overridng Constructor
class SmartPhones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    charging(){
        console.log('Charging is', this.model);
    }
}

class Android extends SmartPhones{
    // Overriding Constructor
    constructor(color, brand, model, device){
        super(color, brand, model);
        this.device = device;
    }
    splitScreen(){
        console.log('Android have a Split Screen')
    }
}

const android = new Android('White', 'B', 'Galaxy S21', 'Smart TV')

android.charging()