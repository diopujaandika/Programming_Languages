//OBJECT ORIENTED PROGRAMMING
/**
 * Konsep Object dan Class digunakan progammer bila terdapat banyak object yang berbeda tetapi memiliki protperty dan method yang sama, alih-alih membuat banyak object kita cukup membuat satu object dengan menggunakan konsep object dan class.
 * 
*/

//2 Cara untuk membuat Object dan Class pada JS
    //1. Constructor Function
        function Person (name, age){
            this.name = name
            this.age = age
        }

        Person.prototype.eat = function(){
            console.log(`${this.name} is eating!`)
        }

        const person1 = new Person('Dio', 28)
        const person2 = new Person('Clara', 21)

        console.log(person1.name)
        console.log(person2.name)

        person1.eat()
        person2.eat()

    //2. ES6 Class
        class Orang{
            constructor(nama, usia){
                this.nama = nama
                this.usia = usia
            }

            makan(){
                console.log(`${this.nama} sedang makan!`)
            }
        }
        //Membuat instance dari Orang
        const orang1 = new Orang('Decaelo', 17)
        const orang2 = new Orang('Djo', 12)
        
        console.log(orang1.nama)
        console.log(orang2.nama)

        orang1.makan()
        orang2.makan()

        console.log(typeof Orang)