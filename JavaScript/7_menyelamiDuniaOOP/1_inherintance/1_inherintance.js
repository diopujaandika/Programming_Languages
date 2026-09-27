//OBJECT DAN CLASS
/**
 * Inheritance adalah salah satu pilar OOP yang memungkinkan kita untuk mewariskan property dan method dari sebuah class ke class yang lain. Umumnya property dan method yang diwariskan berasal dari class (induk) dan digunakan oleh class baru (anak) sehingga membantu mengurangi penulisan kode secara berulang.
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

//Contoh 1
class Employee{
    constructor(name, age, role, salary) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.salary = salary;
    }
    getInfo() {
        console.log(`${this.name} - ${this.age} tahuna, ia adalah seorang ${this.role}.`);
    }
}
class Manager extends Employee {
    constructor(name, age, role, salary, teamSize) {
        super(name, age, role, salary);
        
        this.teamSize = teamSize;
    }
    manageTeam(){
        console.log(`${this.name} mengelola ${this.teamSize} orang.`);
    }
}
class Developer extends Employee {
    constructor(name, age, role, salary, language) {
        super(name, age, role, salary);

        this.language = language;
    }
    coding() {
        console.log((`${this.name} sedang coding menggunakan ${this.language}.`))
    }
}

const manager = new Manager("Decaelo D. Puja", 27, "Manager", 17000000, 10);
manager.getInfo();
manager.manageTeam();
console.log(manager);

const developer = new Developer("Djocean D. Puja", 23, "Programmer", 11000000, "JavaScript");
developer.getInfo();
developer.coding();
console.log(developer);