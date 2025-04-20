/**
 * SET
 * 
 */

//Membuat Set
    //Contoh 1
    const membuatSet = new Set()
    console.log(membuatSet)
    //Contoh 2
    const membuatSet1 = new Set([1, 2, 3])
    console.log(membuatSet1)

//Menyimpan Nilai di Set menggunakan method add
    const menyimpanSet = new Set ()
    menyimpanSet.add(1)
    menyimpanSet.add('Simpan Ini')
    //Tidak akan di duplikat
    menyimpanSet.add(1)
    menyimpanSet.add('Simpan Ini')
    console.log(menyimpanSet)

//Mengakses Nilai di Set
    const mengaksesSet = new Set()
    mengaksesSet.add(1)
    mengaksesSet.add(2)
    //Mengakses Nilai di Set menggunakan looping
    for(const number of mengaksesSet){
        console.log(number)
    }
    //Mengakses Nilai di Set menggunakan keyword forEach
    mengaksesSet.forEach((value) => console.log(value))

//Menghapus Nilai di Set menggunakan method delete
    const menghapusSet = new Set()
    menghapusSet.add('Hapus 1')
    menghapusSet.add('Hapus 2')
    menghapusSet.delete('Hapus 2')
    console.log(menghapusSet)