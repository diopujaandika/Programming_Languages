//ERROR HEADLING
/**
 * Error Headling digunakan untuk mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahn syntax atau error lainnya.
 * 
 * Jenis-Jenis Error Headling
 * 1. Throwing Error
 * 2. Catching Error
 *      a. Try-Catch
 *      b. Finally
 */

//1. Bagaimana mendeklarasikan sebuah Error secara expected yaitu dengan menggunakan Throwing Error.
// Throwing Error digunakan untuk membangkitkan exception (sinyal error) => throw<object error>
    // const price = 100
    // const paid = 80

    // if(paid<price){
    //     throw new Error('Pembayaran Kurang!')
    // }

//2. Latas bagaimana menangkap Error yang ada? Jawabannya dengan menggunakan Cathing Error.
    //a. Try-Catch. Try merupakan block kode yang akan menangani error. Sedangkan Catch merupakan block kode yang dibangkitkan ketika terjadi error di dalam block try.
    try {
        console.log('Ini try block');
        //throw new Error('Terjadi Error yang di sengaja');
      } catch (err) {
        console.log('Ini catch block. Karena Terjadi Error');
      } finally {
        console.log('Ini finally block');
      }