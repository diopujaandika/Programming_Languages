/** 
 * LOGICAL OPERATOR
 * Logical Operator adalah operator yang digunakan untuk menetapkan logika dari dua nilai operand boolean.
 */

    //1. AND[&&] Semua Operan True makan output True.
    console.log('AND [&&]');
    console.log(true && true); // true
    console.log(false && true); // false
    console.log(true && false); // false
    console.log(false && false); // false
    console.log((2 === 2) && (3 < 5)); // true

    //2. OR[||] Salat Satu Operan True dan lainnya False maka Output True, dan sebaliknya.
    console.log('OR [||]');
    console.log(true || true); // true
    console.log(false || true); // true
    console.log(true || false); // true
    console.log(false || false); // false
    console.log((2 === 2) || (3 > 5)); // true

    //3. NOT[!] Ouput True akan False dan sebaliknya.
    console.log('NOT [!]');
    console.log(!true); // false
    console.log(!false); // true