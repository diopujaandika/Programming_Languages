/**
 * POLYMORPHISM
 * Polymorphism 
 */

class SmartPhones{
    constructor(color, brand, model){
        this.color = color
        this.brand = brand
        this.model = model
    }
    charging(){
        console.log('Charging is', this.model)
    }
}

class Android extends SmartPhones{
    //OVerriding Constructor
    constructor(color, brand, model, device){
        super(color, brand, model)
        this.device = device
    }
    charging(){
        //Cara memanggil method charging dari SuperClass(SmartPhones)
        super.charging()
        console.log(`Charging ${this.model} with fast charger`)
    }
    splitScreen(){
        console.log('Android have a Split Screen')
    }
}

const android = new Android('White', 'B', 'Galaxy S21', 'Smart TV')

android.charging()