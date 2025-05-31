//Mengubah nilai variable global
let count = 0
function incerment(){
    count++
}

//Mengakases waktu sistem
function getCurrentTime(){
    return new Date().toLocaleDateString()
}

//Mengubah status object yang diterima sebagai paramter
function updateUser(user){
    user.name="Updated Name"
}

//Menulis ke berkas
const fs = require('fs')
function WriteToFile(data){
    fs.writeFileSync('data.txt', data)
}