const result = console.log('Hello World!')
console.log(result);

function sumNumbers(a,b){
    const result = a + b
    console.log(`Hasil dari ${a} + ${b} = ${result}`)
    console.log('Hasil akhirnya adalah', result)
    return result
}

sumNumbers(1, 2)