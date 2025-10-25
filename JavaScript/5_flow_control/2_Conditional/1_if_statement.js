//IF STATEMENT
/**
 * If Statement adalah fundamental statement yang memungkinkan JavaScript untuk membuat keputusan apakah mengeksekusi program atau tidak jika suatu kondisi terpenuhi.
 * if (expression){
 *      statement
 * }   
 * If Statement akan mengeksekusi block jika kondisi terpenuhi (true) 
 */

holiday(false)
function holiday (gajian){
    console.log("Berjalan-jalan di Mall");
    if(gajian){
        console.log("Makan di restoran mall");
    }
    console.log('Pulang ke rumah!');
}
//1. If Statement 1 Cabang
    const uang = true
    console.log('Pulang dari Kampus')
    if(uang){
        console.log('Langsung makan di Mi Gacoan!')
    }
    console.log('Pulang ke rumah!')

//2. If Statement 2 Cabang
    const usia = 17
    if (usia>= 17){
        console.log('Usia Anda sudah boleh nonton film ini!')
    } else{
        console.log('Maaf, Anda belum cukup umur untuk nonton ini!')
    }

//3. If Statement 3 Cabang atau lebih...
    const nilai = 68
    if (nilai > 90){
        console.log('Selamat! Ketampanan Anda diatas rata-rata!')
    }else if (nilai>70){
        console.log('Wah... Wajah Anda standart. Tidak jelek-Tidak Tampan')
    }else{
        console.log('Maaf, Anda Jelel T_T...')
    }

//4. If Statement Ternary Operator membutuhkan 3 operan dengan urutan:
    //a. Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
    //b. Ekspresi yang dieksekusi jika kondisinya benar.
    //c. Ekspresi yang dieksekusi jika kondisi salah.

    const price = 100000
    const isMember = true
    const discount = isMember ? 0.1 : 0

    console.log(`Anda mendapatkan discount sebesar ${discount*price}`)
