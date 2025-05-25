/**
 * COMPARASION OPERATOR
 * Ccomparasion operator adalah operator yang digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean sebagai hasil perbandingan.
 */

let a = 5
let b = '5'
//Comparison Operator
    //1. Sama [==] (Nilai Sama, Tipe Data Diabaikan)
    console.log(a==b) //True

    //2. Identek [===] (Nilai Sama, Tida Data Sama)
    console.log(a===b) //False

    //3. Tidak Sama [!=] (Nilai dan Tipe Data Diabaikan, Jika True manjadi False dan Sebaliknya)
    console.log(a!=b) //False

    //4. Tidak Identik (!==) (Nilai dan Tipe Data Sama, Jika True manjadi False dan Sebaliknya)
    console.log(a!==b) //True

    //5. Lebih Dari [>] (Jika Operan 1 lebih besar dari Operan 2 maka True)
    console.log(a>b) //False

    //6. Lebih Dari Sama Dengan [>=](Jika Operan 1 lebih besar sama dengan Operan 2 maka True)
    console.log(a>=b) //True

    //7. Kurang Dari Dari[<] (Jika Operan 1 lebih kecil dari Operan 2 maka True)
    console.log(a<b) //False

    //8. Kurang Dari Sama Dengan [<=] (Jika Operan 1 lebih kecil sama dengan Operan 2 maka True)
    console.log(a<=b) //True