//CONTROL STATEMENT
/**
 * Control Statement berfungsi untuk menghentikan eksekusi kode.
 * 
 * Jenis Control Statement
 * 1. break
 * 2. continue
 */

//1. Break statement adalah cara kita untuk memberitahukan interpreter yang sedang mengeksekusi kode untuk berhenti dan langsung berpindah ke akhir dari percabangan atau pengulangan.
    //a. break statement pada for
        for (let i = 0; i<10; i++){
            if(i===5){
                break
            }
            console.log(i)
        }
    //b. break statement pada switch
        const number = 1
        switch(number){
            case 1:
                console.log('Ini 1')
                break
            case 2:
                console.log('Ini 2')
                break
            case 3:
                console.log('Ini 3')
                break
            default:
                console.log('Ini default')
        }

//Contine Statement yang digunakan untuk melanjutkan iterasi ke iterasi berikutnya
        for (let i=0; i<10; i++){
            if(i===5){
                continue
            }
            console.log(i)
        }