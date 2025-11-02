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
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this._temperature = 90; // Penggunaan _ di variable temperature menandakan bahwa value temperature tidak dapat diubah. Akan tetapi cara ini tidak benar-beanar membuat property temperature tidak dapat diubah, ia masih dapat diubah. Penggunaan underscore hanyalah code convention yang disepakati oleh komunitas JS.

        // Untuk benar-benar membuat suatu value tidak dapat diubah dengan (#)
    }

    set temperature(temperature) {
        console.log('You are not allowed to change the temperature');
    }

    get temperature() {
        return this._temperature; 
    }
}

const coffee = new CoffeMachine(10);
console.log('Sebelum diubah: ', coffee.temperature);
coffee.temperature = 100;
console.log('Setelah diubah: ', coffee.temperature);