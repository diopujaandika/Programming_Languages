///VARIABLE
//Variable adalah wadah untuk menampung suatu nilai.
//Penulisan variable dalam Dart
//1. Statically Typed
//2. Type Inference

void main(){
  
  //1. Statically Type 
  /** 
   * Staticallly Type berarti suatu bahasa pemrograman mendukung inisialisasi tipe data sebelum variable digunakan.
   * Cara penulisan : dataType nameVariable = valueVariable
  */
  String namaDepan = "Dio";
  String namaTengah = "Puja";
  String namaBelakang = "Andika";
  int tahunLahir = 2002;
  int tahunSekarang = 2025;
  int usia = tahunSekarang - tahunLahir;
  print(namaDepan + namaTengah + namaBelakang);
  print('Usia $namaDepan saat ini adalah $usia tahun');

  //2. Type Inference (var, const, final) = valueVariable
  /**
   * Type Inference berarti suatu bahasa pemrograman secara otomatis akan mengetahui tide data yang digunakan oleh suatu variable.
   * Cara penulisan : keyword (var, late, const, atau final) namaVariable = nilaiVariable
   */
  var variable1 = 1;    //Mutable => variable dan value dapat diubah
  const variable2 = 2;  //Immutable Variable & Value => variable tidak dapat diubah dan mengharuskan penginisialisasian value sebelum runtime (program dijalankan).
  final variable3;
  variable3 = 3;  //Immutable Variable => varible tidak dapat diubah dan memungkinkan penginisialisasian value ketika runtime (aplikasi dijalankan).
  print(variable1+variable2*variable3);

  //Excample Simple
  var greetings = 'Hello Dart';
  print(greetings);
  var myAge;
  myAge = 20;
  print(myAge);
}