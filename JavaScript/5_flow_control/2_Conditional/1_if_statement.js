//IF STATEMENT
/**
 * If Statement adalah fundamental statement yang memungkinkan JavaScript untuk membuat keputusan apakah mengeksekusi program atau tidak jika suatu kondisi terpenuhi.
 * if (expression){
 *      statement
 * } else if (expression){
 *      statement
 * } else {
 *      statement
 * }
 * If Statement akan mengeksekusi block jika kondisi terpenuhi (true), jika belum terpenuhi (false) maka kode tidak akan dieksekusi.
 */
    //Example
    const gajian = true;
    console.log('Berjalan-jalan di mal');
    if (gajian) {
        console.log('Makan di restoran mal');
    }
    console.log('Pulang ke rumah');

    //Apakah if hanya bisa menangani satu cabang kondisi saja? Tidak. Kita bisa manfaatkan keyword else.
    const hasil = 88;
    if (hasil>80) {
        console.log('Selamat, Anda lulus ujian! Nilai Anda:', hasil);
    } else {
        console.log('Anda belum lulus ujian! Nilai Anda:', hasil);
    }

    //Lantas bagaimana jika kita memiliki cabang kondisi lebih dari dua? Kita dapat menggabungkan else dan if.
    const nilai = 80;
    if (nilai > 90) {
        console.log('Selamat, Anda mendapatkan nilai A!');
    } else if (nilai > 80) {
        console.log('Selamat, Anda Lulus ujian!');
    } else {
        console.log('Maaf, Anda belum lulus ujian.');
    }

    //JS menyediakan sintaksis yang lebih ringkas yaitu menggunakan ternary oerator yang direpresentasikan menggunakan tanda tanya (?)
    //Ternary operator membutuhkan 3 operan dengan urutan sebagai berikut:
    /**
     * 1. Kondisi yang ingin diperiksa ditulis sebelum tanda (?)
     * 2. Ekspresi yang dieksekusi jika kondisinya benar.
     * 3. Ekspresi yang dieksekusi jika kondisi salah.
     */
    const price = 100000;
    const isMember = true;
    const discount = isMember ? 0.1 : 0;
    console.log(`Anda mendapatkan discount sebesar ${discount * price}`);