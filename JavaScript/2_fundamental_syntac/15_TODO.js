//LATIHAN 1
/**
 * TODO:
 * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
 *  - firstName: bertipe data string, dengan nilai nama depan Anda.
 *  - lastName: bertipe data string, dengan nilai nama belakang Anda.
 *  - age: bertipe data number, dengan nilai umur Anda.
 *  - isMarried: bertipe data boolean, dengan bebas Anda tentukan.
 */

const firstName = 'Dio';
const lastName = 'Andika';
const age = 24;
const isMarried = false;

console.log(firstName, lastName, age, isMarried);

//LATIHAN 2
// TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
const currency = "IDR";

// TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
let value = 10000;

// TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
value += 5000;

/**
 * TODO: buatlah variabel (konstan) bernama `money`,
 * isi dengan penambahan string dari nilai `currency` + " " + `value`.
 */
const money = currency + " " + value;
console.log(money);
