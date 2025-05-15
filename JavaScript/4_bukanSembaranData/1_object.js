//OBJECT
/**
 * Sekumpulan pasangan KEY-VALUE yang menyimpan data secara tidak terurut.
 * 
 * SINTAKSIS OBJECT:
 * 1. Membuat Object => Object Literal {namaKey: value}
 * 2. Mengakses Properti di Object => 
 *      a. Dot => (namaObject.namaKey), 
 *      b. Square Bracket => (namaObject['nama key'])
 *      c. Object Destructuring => deklarasiVariable{namaKey/namaKey = value}=namaObject
 * 3. Mengubah Nilai di Properti Object => namaObject.namaKey = valueBaru
 * 4. Menghapus Properti di Objeect => delete namaObjet.namaKey
 */

//1. Membuat Object dengan Object Literals {namaKey: value}
    const user = {
        name: 'Dio Puja Andika',
        username: 'diopujaandika',
        email: 'diopujaandika@dicoding.com', 
        password: 12345,
        status: true,
        'larning path': 'JavaScript',
    }
    console.log(user)

//2. Mengakses Properti di Object
    //a. Dot => (namaObject.namaKey)
        console.log(user.username)
    //b. Square Bracket => (namaObject['nama key'])
        console.log(user['larning path'])
    //c. Object Destructuring => deklarasiVariable {namaKey/namaKey=value} = namaObject
        const {name, username, email, password, status} = user  //Memecah properti object ke dalam satuan yang lebih kecil (variable)
        console.log(name, username, email, password, status)

//3. Menambahkan Properti di Object
        const {isMale = true} = user //karena properti isMale tidak ada, ketika properti diakses tanpa ada value akan mengembalikan nilai undifene untuk itu kita harus memasukan juga valuenya (isMale = true)
        console.log(isMale)

//4. Mengubah Nilai di Properti Object => namaObject.namaKey = valueBaru
        user.username = 'andikadiopuja'
        console.log(user.username)

//5. Menghapus Properti di Object => delete namaObject.namaKey
        delete user.status
        console.log(user)

//CONTOH
    //Cara membuat Object
    const newObject = {
        nama : 'Diva Puja Kiranzi',
        kelas: 'VI-E',
        usia: 12,
        'jenis kelamin': 'Perempuan',
        alamat: 'Kel. Air Duku',
    }

    //Mengakses 
    console.log('Nama :', newObject.nama)       //Menggunakan Dot
    console.log('Kelas :', newObject['kelas'])  //Menggunakan Square Bracket
    const {nama, kelas, usia, alamat} = newObject
    console.log(`Hai nama saya adalah ${nama}. Saya tinggal di ${alamat}.`)

    //Menambah tanpa masuk Object
    const {hobi = 'Bernyanyi'} = newObject
    console.log(newObject)

    //Mengubah dan Menambahkan dengan masuk Object
    newObject.hobi = 'Menggambar'
    console.log(newObject)

    //Delete
    delete newObject["jenis kelamin"]
    console.log(newObject)
    
    

