// SIMULASI ASYNCHRONOUS PROCESS
/*
    Langkah awalnya, kita akan memeanfaatkan satu global function dari js sebagai simulasi untuk menciptakan proses asinkron, yaitu setTimeout.

    setTimeout adalah salah satu dari sekian global function yang dapat menetapkan timer(pengatur waktu) bagi function agar dieksekusi. 
    
    Jadi, ada dua paramter wajib, yaitu:
    1. Nilai berupa function
    2. Number sebagai timer

    Setelah timer sudah berakhir, seluruh cuplikan kode dalam function akan dieksekusi.
*/

// Simple Example
const estimationTime = 5_000;

setTimeout(() => {
    console.log('Hello World!');
}, estimationTime);
