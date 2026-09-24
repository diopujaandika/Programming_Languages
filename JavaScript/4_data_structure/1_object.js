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
    //Contoh1
    const user = {
        name: 'Dio Puja Andika',
        username: 'diopujaandika',
        email: 'diopujaandika@dicoding.com', 
        password: 12345,
        status: true,
        'larning path': 'JavaScript',   //Membuat properti yang memiliki nama key lebih dari satu kata menggunakan single quote
        'type player': 'Assassins'
    };
    console.log(user);

    //Contoh 2
    const product = {
        id: 1,
        name: 'Sepatu',
        price: 23000,
        stock: 6
    };
    console.log(product);

    //Contoh 3
    const cat = {
        id: 1,
        name: 'Garfiel',
        type: 'Percia'
    }
    console.log(cat);


//2. Mengakses Properti di Object
    //a. Dot => (namaObject.namaKey)
        //Contoh 1
        console.log(user.username);
        //Contoh 2
        console.log(product.name);
        //Contoh 3
        console.log(cat.name);

    //b. Square Bracket => (namaObject['nama key'])
        console.log(user['larning path']); //digunakan untuk mengakses properti yang memiliki nama key yang terdiri dari 2 kata.
        console.log(user['type player']);

    //c. Object Destructuring => deklarasiVariable {namaKey/namaKey=value} = namaObject
        //Contoh 1
        const {name: nameContoh1, username, email, password, status, 'type player': typePlayer} = user;  //Memecah properti object ke dalam satuan yang lebih kecil (variable) sehingga kita bisa mendapatkan properti yang kita inginkan lebih fleksibel dan lebih ringkas.
        console.log(nameContoh1, username, email, password, status, typePlayer);
        //Contoh 2
        const {id: idContoh2, name: nameContoh2, price, stock} = product;
        console.log(idContoh2, nameContoh2, price, stock);
        //Contoh 3
        const {id: idContoh3, name: nameContoh3, type} = cat;
        console.log(idContoh3, nameContoh3, type);

//3. Menambahkan Properti di Object
        //Contoh 1
        const {isMale = true} = user; //karena properti isMale tidak ada, ketika properti diakses tanpa ada value akan mengembalikan nilai undifene untuk itu kita harus memasukan juga valuenya (isMale = true)
        console.log(isMale);
        const {hiddenName = 'Decaelo'} = user;
        console.log(hiddenName);
        //Contoh 2
        const {discon = true} = product;
        console.log(discon);
        //Contoh 3
        const {color = 'Orange'} = cat;
        console.log(color)

//4. Mengubah Nilai di Properti Object => namaObject.namaKey = valueBaru
        //Contoh 1
        user.username = 'andikadiopuja';
        user['type player'] = 'Warrior';
        console.log(user.username);
        console.log(user["type player"]);
        //Contoh 2
        product.discon = false;
        console.log(`Apakah produk ${product.name} memiliki diskon: ${product.discon}.`);
        //Contoh 3
        cat.color = 'putih';
        console.log(`I have a cat names ${cat.name}, the cat is ${cat.color}`);

//5. Menghapus Properti di Object => delete namaObject.namaKey
        delete user.status          //Menggunakan Dot.
        delete user["larning path"] //Menggunakan Square 
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
    delete newObject.hobi
    console.log(newObject)

    //Latihan 1 - Function sebagai property Object
    const penggunaLatihan1 = {
        nama: 'Dio Puja Andika',
        usia: 24,
        tinggi: 170.0,
        'status menikah': false,

        sayHello: function(){
            return console.log(`Halo, nama saya adalah ${this.nama}`);
        }
    };
    penggunaLatihan1.sayHello();
    
