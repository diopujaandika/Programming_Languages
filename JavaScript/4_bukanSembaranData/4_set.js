//SET 
/**
 * Set adalah struktur data paling spesial karena set tidak memiliki key dan indeks ketika menyimpan data sehingga setiap data yang disimpan dalam set akan bernilai unik tanpa ada duplikasi data.
 */

//1. Membuat Set => deklarasiVariable namaSet = new Set()
    const angkaSet = new Set([1, 2, 3])
    console.log(angkaSet)

//2. Menyimpan Nilai di Set => namaSet.add()
    const kuartalSet = new Set ()
    kuartalSet.add(1)
    kuartalSet.add('a')
    kuartalSet.add(null)
    kuartalSet.add(true)

    console.log(kuartalSet)

//3. Mengakses Nilai di Set menggunakan looping
    const aksesSet = new Set ()
    aksesSet.add(1)
    aksesSet.add(2)
    aksesSet.add(4)
    aksesSet.add(8)

    //a. Menggunakan keyword for
        for(const number of aksesSet){
            console.log(number)
        }
    //b. Menggunakan keyword foreach
        aksesSet.forEach((value)=> console.log(value))

//4. Menghapus Nilai di Set => namaSet.delete()
        kuartalSet.delete(1)
        console.log(kuartalSet)