function prosess(nama, callback){
    console.log("Sedang memprosess...")
    callback(nama)
}

prosess("Dio", function(nama){
    console.log(`Halo, ${nama}`)
})