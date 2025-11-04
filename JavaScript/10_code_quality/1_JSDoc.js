// JSDoc
/*
    JSDoc adalah sebuah tools untuk menghasilkan dokumentasi kode JavaScript.

    JSDoc comment harus dimulai dengan:
    1. /** 
    Komentar yang menggunakan /*, /**, atau lebih dari tiga bintang (*)
*/

/** Say hallo to world */
function greet() {
    console.log('Hello world!');
}

/**
 * Get add operation of two numbers.
 * 
 * @param {number} numA - The first numeric operand
 * @param {number} numB - The second numeric operand
 * @return {number} Sum of numA and numB
 */

function add(numA, numB) {
    const result = numA + numB;
    console.log(result);
    return result
}

add(5, 4);
