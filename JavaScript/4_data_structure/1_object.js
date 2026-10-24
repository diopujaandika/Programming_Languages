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
        'larning path': 'JavaScript',   //Membuat properti yang memiliki nama key lebih dari satu kata menggunakan single quote ['nama key']
        'type player': 'Assassins'
    };
    console.log(user);

//2. Mengakses Properti di Object
    //a. Dot => (namaObject.namaKey)
        //Contoh 1
        console.log(user.username);

    //b. Square Bracket => (namaObject['nama key']) Khusus digunakan untuk mengakses properti yang memiliki nama key yang terdiri dari 2 kata atau lebih.
        console.log(user['larning path']); 

    //c. Object Destructuring => deklarasiVariable {namaKey/namaKey=value} = namaObject. Memecah properti object ke dalam satuan yang lebih kecil (variable) sehingga kita bisa mendapatkan properti yang kita inginkan lebih fleksibel dan lebih ringkas.
        //Contoh 1
        const {name, username, email, password, status, 'type player': typePlayer} = user;  //Perhatikan key type player, kita juga bisa menggani nama key dengan nama key lainnya.
        console.log( username, email, password, status, typePlayer); //Jadi kita tidak perlu menuliskan nama dari object seperti user.username, user.email, dll

//3. Menambahkan Properti di Object
        //Contoh 1
        const {isMale = true} = user; //karena properti isMale tidak ada, ketika properti diakses tanpa ada value akan mengembalikan nilai undifined untuk itu kita harus memasukan juga valuenya (isMale = true)
        console.log(`Jenis kelamin dari ${user.name} adalah ${isMale}`);
        const {hiddenName = 'Decaelo'} = user;
        console.log(hiddenName);
        console.log('Daftar Object Baru', user);

//4. Mengubah Nilai di Properti Object => namaObject.namaKey = valueBaru
        //Contoh 1
        user.username = 'andikadiopuja';
        user['type player'] = 'Warrior';
        user.email = 'andikadiopuja@dicoding.com';
        console.log(user.username);
        console.log(user["type player"]);

//5. Menghapus Properti di Object => delete namaObject.namaKey
        delete user.status;         //Menggunakan Dot.
        delete user["larning path"]; //Menggunakan Square 
        console.log('Object setelah dihapus: ', user);