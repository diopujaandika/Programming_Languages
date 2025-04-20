/**
 * MAP
 * 
 */

//Membuat Map menggunakan object map constructor
    //Contoh 1
    const map = new Map()
    //Contoh 2
    const productMap = new Map([
        ['shoes', 500],
        ['cap', 350],
        ['jeans', 250],
    ])

    console.log(map)
    console.log(productMap.get)

//Menyimpan Nilai di Map menggunakan method set yang menerima dua nilai dimana nilai pertama adalah key dan nilai kedua adalah value
    const menyimpanMap = new Map()
    menyimpanMap.set('name', 'aras')
    console.log(menyimpanMap)

    const menyimpanMap2 = new Map()
    menyimpanMap2.set(1, 'number one')
    console.log(menyimpanMap2)

//Mengakses Nilai di Map menggunakan get
    const mengaksesMap = new Map()
    mengaksesMap.set('name', 'aras')
    console.log(mengaksesMap.get('name'))

//Mengahapus Nilai di Map menggunakan method delete
    const menghapusMap = new Map()
    menghapusMap.set('name', 'aras')
    menghapusMap.set('last name', 'opraza')
    menghapusMap.delete('name')
    console.log(menghapusMap)