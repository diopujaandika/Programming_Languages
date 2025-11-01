// CONSTRUCTOR FUNCTION
/*
    Js bukan bahasa pemrograman berbasis class, sehingga JS tidak mengenal konsep class.
    Untuk mengcounter hal ini diciptakan yang namanya costructtor function.
    Constructor function adalah cara yang digunakan untuk membuat object dan class sebelum adanya ES6.
*/

function Person(name, age) {
    this.name = name; //Properti
    this.age = age; //Properti
}

//Method
Person.prototype.eat = function() { //Menggunakan prototype
    console.log(`${this.name} is eating!`);
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();