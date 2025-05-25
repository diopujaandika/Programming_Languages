/**
 * INHEREINTANCE
 */

class manusia{
    constructor(nama, ras, gender){
        this.nama = nama
        this.ras = ras
        this.gener = gender
    }
    berjalan(){
        console.log(`${nama} sedang BERJALAN!`)
    }
}

class laki_laki extends manusia{
    berlari(){
        console.log('Sebagai'))
    }
}