/**
 * FUNCTIONAL PROGRAMMING
 * 
 */

//Contoh Kode Imperatif
const name = ['Harry', 'Rony', 'Jeff', 'Thomas']
const newNameWithExcMark = []

for(let i = 0; i < name.length; i++){
    newNameWithExcMark.push(`${name[i]}!`)
}

console.log(newNameWithExcMark)

//Contoh Kode Deklaratif
const nama = ['Heri', 'Roni', 'Jepp', 'Tomas']
const newNamaWithExcMark = nama.map((nama) => `${nama}!`)

console.log(newNamaWithExcMark)