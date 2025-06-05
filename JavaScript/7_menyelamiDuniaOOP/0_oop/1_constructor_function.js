//CONSTRUCTOR FUNCTION

function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.eat = function(){
    console.log(`${this.name} is eating!`)
}

const person1 = new Person('Alice', 30)
const person2 = new Person('Bob', 34)

console.log(person1.name)
console.log(person2.name)

person1.eat()
person2.eat()