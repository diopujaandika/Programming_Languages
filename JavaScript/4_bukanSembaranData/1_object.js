/**
 * OBJECT
 * Object adalah kumpulan pasangan key-value dan merupakan tide data yang bukan primitif yang dapat mennyimpan data secara tidak terurut.
 */

//Membuat Object dengan object literals {}
const user = {}
const products = {name: 'Sepatu', price: 230000}

console.log(user)
console.log(products)

const userDicoding = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
}
console.log(userDicoding)

//Mengakses Properti di Object
    //1. dot
    console.log(userDicoding.name)
    //2. square bracket
    console.log(userDicoding['last name'])
    //3. object destructuring
    const {id, email, name, isMale = false, age } = userDicoding
    console.log(id, email, name, isMale, age)

//Mengubah Nilai di Properti Object = 
    const account = {
        balance: 1000,
        debt: 10
    }
    account.balance = 2000
    console.log(account.balance)

//Menghapus Proporti di Object menggunakan delete
    const hapus = {
        'name' : 'Dicoding',
        'last name': 'Indonesia',
        age: 2,
    }
    delete hapus.name       //menggunakan dot .
    delete hapus['age']     //Menggunakan square bracket ['']
    console.log(hapus)
