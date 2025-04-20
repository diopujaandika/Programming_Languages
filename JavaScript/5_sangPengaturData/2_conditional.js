/**
 * Conditional flow adalah cara untuk menentukan apakah kode dieksekusi atau dilewatkan. Jika kondisi terpenuhi kode akan diesksekusi dan kode lain akan diabaikan tergantung dengan inputan yang diberikan user.
 */

/**
 * 1. IF STATEMENT
 *   if(expression){
 *     statement
 *   }   
 */
    //Contoh If Statemen 1 Cabang
    const gajian = true
    console.log("Berjalan-jalan di Mall")
    if(gajian){
        console.log("Makan di Restoran Mall")
    }
    console.log('Pulang ke Rumah')

    //Contoh if statemen 2 cabang
    const score1 = 79
    if(score1 >= 80){
        console.log('Selamat Anda Lulus!')
    } else{
        console.log('Maaf Anda belum lolos.')
    }

    //Contoh if statemen 3 cabang
    const score2 = 79
    if(score2 > 90){
        console.log('Selamat Anda Lulus!')
    } else if (score2 > 70){
        console.log('Maaf Anda Remidial.')
    }else{
        console.log('Anda Gugur!')
    }

    //Contoh sintaksis lebih ringkat menggunalan ternary operator dengan tanda tanya (?)
    const price = 20000
    const isMember = true
    const discount = isMember ? 0.1 : 0
    console.log(`Anda mendapatkan discount sebesar ${discount * price}`)

/**
 * Switch Case adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus sehingga lebih readable dan ringkas
 *      switch (expression){
 *          statement
 *      }
 */
    //Contoh1
    const fruit = 'apple'

    switch(fruit){
        case 'banana':
            console.log('I am a Banana')
            break
        case 'apple':
            console.log('I am a Apple')
            break
        case 'orange':
            console.log('I am a Orange')
            break
        default: 
            console.log('I am not a fruit. I am a programmer!')
    }