/**
 * ARRAY
 * Array adalah struktur data yang menyimpan kumpulan data terurut.
 */
//Contoh
const array = [1, 2, 3]
console.log(typeof array)

//Membuat Array
    //1. Menggunakan Object Constructor
        const users = new Array()
        const numbers = new Array(5)
        console.log(users, numbers)
    //2. Menggunakan sintaks Array.from
        const foo = Array.from('foo')
        console.log(foo)
        //Dapat menyalin Array lainnya
        const usersFrom = new Array('Jhon', 'Jane', 'Jack', 'Jill')
        const customersFrom = Array.from(usersFrom)
        console.log(customersFrom)
    //3. Menggunakan Array Literal (Sangat disarankan)
        const namaArray = ['Puja Indonesia', 2, false, null, 3.14]
        console.log(namaArray)


let myArray = [1, 2, 3, 4]
//Mengakses Element Array
    console.log(myArray[1])

//Memanipulasi Array
    //1. Menggunakan indexing => Untuk mengubah
        myArray[1] = 'Sepuluh'
        console.log(myArray)
    //2. Menggunakan .push  => Untuk menambah
        myArray.push(6)
        console.log(myArray)

//Menghapus Array menggunakan delete
    delete myArray[0] //Element akan masih ada
    console.log(myArray)
    
    //Untuk menghapus elementnya sekaligus menggunakan .splice(indeks, jumlah element)
    myArray.splice(1, 1)
    myArray.splice(0, 2)
    console.log(myArray)
