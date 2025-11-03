import { makeCoffe, sendCoffee } from "./coffe.mjs";

console.log('Saya memesan kopi di kafe.');

makeCoffe(() => {
    sendCoffee(()=>{
        console.log('Pramusaji memberikan kopi pesanan.');
        console.log('Saya mendapatkan kopi dan menghabiskannya.');
    });
});