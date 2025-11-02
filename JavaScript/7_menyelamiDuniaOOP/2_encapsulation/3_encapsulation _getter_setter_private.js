// GETTER & SETTER
/*
    GETTER
    Getter terdiri dari method get.
    Get adalah cara untuk mendapatkan nilai dari property.

    SETTER
    Setter terdiri adari method set.
    Setter adalah method untuk menetapkan nilai dari property.
    
*/

class CoffeMachine {
    #temperature = 90; // enclosing class

    constructor(waterAmount) {
        // Untuk benar-benar membuat suatu value tidak dapat diubah dengan (#)

        // Sejak JS versi ES2022, kita dapat menggunakan tanda hashtag (#) untuk membuat hak akses private pada property dan method.
        this.waterAmount = waterAmount;
        this._temperature = this.#defaultTemperature(); 
    }

    set temperature(temperature) {
        console.log('You are not allowed to change the temperature');
    }

    get temperature() {
        return this.#temperature; 
    }

    #defaultTemperature() {
        return 90;
    }
}

const coffee = new CoffeMachine(10);
console.log('Sebelum diubah: ', coffee.temperature);
coffee.temperature = 100;
console.log('Setelah diubah: ', coffee.temperature);