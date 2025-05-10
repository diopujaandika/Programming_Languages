//OBJECT DAN CLASS
/**
 * Konsep Object dan Class digunakan progammer bila terdapat banyak object yang berbeda tetapi memiliki protperty dan method yang sama, alih-alih membuat banyak object kita cukup membuat satu object dengan menggunakan konsep object dan class.
 * 
*/

//1. Constructor Function => Cara yang digunakan untuk membuat object dan class sebelum adanya ES6.
    function person(name, age){
        this.name = name;
        this.age = age;
    }

    Person.prototype.eat = function(){
        console.log(`${this.name} is eating`)
    }
