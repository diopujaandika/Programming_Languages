///OPERATOR
///Ooerator adalah operasi yang dilakukan dalam pemrograman 
///Teradapat bebera jenis operator yang biasanya digunakan;
///1. Operator Assignment
///2. Operator Aritmetika
///3. Operator Increment & Decrement
///3. Operator Perbandingan
///4. Operator Logika

void main(){
  //Operator Assignment (=)
  var firstNumber = 1;
  print(firstNumber);

  //Operator Aritmatika (+, -, *, /, %, ~/)
  print(5+2); //Penjumalahan
  print(5-2); //Pengurangan
  print(5*2); //Perkalian
  print(5/2); //Pembagian
  print(5~/2);//Pembagian, mengembalikan nilai int
  print(5%2); //Modulus atau sisa bagi

  //Operator Increment(++) & Decrement(--)
  var a = 0;
  var b = 0;
  a++;    //Increment
  b--;    //Decrement
  print(a);
  print(b);

  //Operator Perbandingan
  print(2 == 2);  //Sama dengan
  print(1 != 1);  //Tidak sama dengan
  print(2 > 1);   //Lebih dari
  print(2 < 1);   //Kurang dari
  print(2 >= 1);  //Lebih dari sama dengan
  print(2 <= 1);  //Kurang dari sama dengan

  //Operator Logika
  print(true && true);    //AND
  print(true || false);   //OR
  print(!true);           //NOT

  //Contoh
  contoh();
}

void contoh(){
  if(2<3 && 2+4 == 5){
    print('Untuk mencetak ini semua kondisi harus benar');
  } else {
    print('2 kurang dari 3, tapi 2 + 4 tidak sama dengan 5, maka ini akan tampil');
  }

  if(false || true || false){
    print('Ada satu nilai true');
  } else {
    print('Jika semuanya false, maka ini akan tampil');
  }
}