//OBJECT DAN CLASS
/**
 * Konsep Object dan Class digunakan progammer bila terdapat banyak object yang berbeda tetapi memiliki protperty dan method yang sama, alih-alih membuat banyak object kita cukup membuat satu object dengan menggunakan konsep object dan class.
 * 
 * Struktur Inheritance
 *      class Super{}
 * 
 *      class SubClass extands SuperClass{}
 * 
*/

class SmartPhone {
    constructor(color, brand, model){
        this.color = color
        this.brand = brand
        this.model = model
    }
}

charging(){
    console.log(`Charging ${this.model}`)
}