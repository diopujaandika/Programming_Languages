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


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

    //Untuk menghapus element pertama menggunakan shift dan elemen terakhir menggunakan pop
    myArray.shift()
    console.log(myArray)
    myArray.pop()
    console.log(myArray)
    
//Array Destructuring digunakan untuk melihat isi dari array
    const introduction = ['Hello', 'JavaScript']
    const[greeting, name] = introduction
    console.log(greeting)

//Array Method
    //Reverse, method yang digunakan untuk membalikkan nilai array dengan menggunakan reverse()
    const namaArray1 = ['Android', 'Data Science', 'Web']
    namaArray1.reverse()
    console.log(namaArray1)

    //Sort, method yang digunakan untuk mengurutkan nilai array.
    namaArray1.sort()
    console.log(namaArray1)
