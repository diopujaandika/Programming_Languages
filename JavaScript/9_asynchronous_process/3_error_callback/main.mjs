// PENANGANAN ERROR DENGAN CALLBACK
/*
    Developer aplikasi JS harus dapat memperhatikan dan mengantisipasi kemungkinan atau keberhasialan pada proses asinkron.
*/

import { makeCoffe, sendCoffee } from './coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe`);

makeCoffe(order, (makeCoffeError, makeCoffeData) => {
    if (makeCoffeError) {
        // Do something with error
        console.error(makeCoffeError);
        return;
    }
    sendCoffee(makeCoffeData, (sendCoffeeError, sendCoffeeData) => {
        if (sendCoffeeError) {
            console.error(sendCoffeError);
            return;
        }

        console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
        console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
    });
});