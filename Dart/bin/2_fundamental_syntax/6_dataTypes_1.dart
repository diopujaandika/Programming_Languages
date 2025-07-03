import 'dart:io';

///DATA TYPES
///Data Type atau tipe data adalah jenis data yang digunakan dalam suatu variable.
///Data Type Dart dibagi menjadi 2 yaitu Data Type Basic (String, Integer, Double, Number, Boolean, dan Dynamic) dan Data Type Collection (List dan Map)

void main(){  
  //1. String
  String variableString1 = 'Ini tipe data String dengan single quote!';
  String variableString2 = "Ini tipe data String dengan double quote!";
  String variableString3 =
  '''
      Ini tipe data String
      dengan triple quote 
  ''';
  print(variableString1 + variableString2 + variableString3);
  print('${variableString1.runtimeType} + ${variableString2.runtimeType} + ${variableString3.runtimeType}');

  //2. int - double - num
  int variableInt = 1;  //Bilangan Bulat
  double variableDouble = 1.1;  //Bilangan Desimal
  num variableNum1 = 10;  //Bilangan Bulat-Desimal
  num variableNum2 = 10.1;  //Bilangan Bulat-Desimal
  print(variableInt+variableDouble+variableNum1+variableNum2);
  print('${variableInt.runtimeType}+${variableDouble.runtimeType}+${variableNum1.runtimeType}+${variableNum2.runtimeType}');

  //3. bool
  bool varBool1 = true;
  bool varBool2 = false;
  print('$varBool1, $varBool2');
  print('${varBool1.runtimeType}, ${varBool2.runtimeType}');

  //4. List
  List varListNum = [1,2,3,1.1,2.2,3.3];
  List varListString = ['a','b', 'c'];
  print('$varListNum $varListString');
  print('${varListNum.runtimeType} ${varListString.runtimeType}');

  //5. Map
  Map varMap1 = {'x':1, 'y':2, 'z':3};
  Map varMap2 = {1:'a', 2:'b', 3:'c'};
  print(varMap1);
  print(varMap2);
  print(varMap1.runtimeType);
  print(varMap2.runtimeType);

  //6. dynamic
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
