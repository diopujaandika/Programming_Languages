import { makeCoffe } from "./coffe.mjs";

console.log('Saya memesan kopi di kafe.');

makeCoffe(() => {
    console.log('Pramusaji memberikan kopi pesanan.');
    console.log('Saya mendapatkan kopi dan menghabiskannya.');
});