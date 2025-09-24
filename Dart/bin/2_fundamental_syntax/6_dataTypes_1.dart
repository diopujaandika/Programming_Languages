import 'dart:io';

///DATA TYPES
///Data Type atau tipe data adalah jenis data yang digunakan dalam suatu variable.
///Data Type Dart dibagi menjadi 2 yaitu Data Type Basic (String, Integer, Double, Number, Boolean, dan Dynamic) dan Data Type Collection (List dan Map)

void main(){  
  //1. String => Tipe data yang digunakan untuk inisialisasi karakter, kata, hingga kalimat.
  String variableString1 = 'Ini tipe data String dengan single quote!'; //Ditulis dengan single qoute
  String variableString2 = "Ini tipe data String dengan double quote!"; //Ditulis dengan double quote
  String variableString3 =
  '''
      Ini tipe data String
      dengan triple quote 
  '''; //Ditulie dengan triple qoute
  print(variableString1 + variableString2 + variableString3);
  print('${variableString1.runtimeType} + ${variableString2.runtimeType} + ${variableString3.runtimeType}');

  //2. int - double - num => Tipe data yang digunakan untuk inisialisasi angka bilangan.
  int variableInt = 1;  //int untuk Bilangan Bulat
  double variableDouble = 1.1;  //double untuk Bilangan Desimal
  num variableNum1 = 10;  //num untuk Bilangan Bulat & Desimal
  num variableNum2 = 10.1;  //num untuk Bilangan Bulat & Desimal
  print(variableInt+variableDouble+variableNum1+variableNum2);
  print('${variableInt.runtimeType}+${variableDouble.runtimeType}+${variableNum1.runtimeType}+${variableNum2.runtimeType}');

  //3. bool => Tipe data yang digunakan untuk inisialisasi true/false.
  bool varBool1 = true; //true
  bool varBool2 = false; //false
  bool notTrue = !true; //false
  bool notFalse = !false; //true
  print('$varBool1, $varBool2');
  print('${varBool1.runtimeType}, ${varBool2.runtimeType}');
  print('$notTrue, $notFalse');
  print('${notTrue.runtimeType}, ${notFalse.runtimeType}');

  //4. List => Tipe data yang digunakan untuk inisialisasi daftar nilai
  List varListNum = [1,2,3,1.1,2.2,3.3]; //Daftar list angka
  List varListString = ['a','b', 'c']; //Daftar list karakter
  print('$varListNum $varListString');
  print('${varListNum.runtimeType} ${varListString.runtimeType}');

  //5. Map => Tipe data yang digunakan untuk inisialisasi dartar nilai yang memiliki pasangan key:value
  Map varMap1 = {'x':1, 'y':2, 'z':3}; //key:value - karakter:angka
  Map varMap2 = {1:'a', 2:'b', 3:'c'}; //key:value - angka:karakter
  print(varMap1);
  print(varMap2);
  print(varMap1.runtimeType);
  print(varMap2.runtimeType);

  //6. dynamic => Tipe data yang dapat menginisalisasi semua tipe data
  dynamic varDynamic = 170.8;
  print(varDynamic); //Secara otomatis akan mengetahui tipe data variblenya
  print(varDynamic.runtimeType);

  //Contoh:
  simpleProgram();
  print(simpleProgram.runtimeType);
}

void simpleProgram(){
  stdout.write("Nama: ");
  String nama = stdin.readLineSync()!;
  stdout.write("Usia: ");
  int age = int.parse(stdin.readLineSync()!);
  print("Hallo $nama, usia Anda adalah $age tahun!");
}
