///VARIABLE
///Variable adalah wadah untuk menampung suatu nilai.
///Penulisan variable dalam Dart
///1. Statically Typed
///2. Type Inference

void main(){
  
  //1. Statically Type 
  /** 
   * Staticallly Type berarti suatu bahasa pemrograman mendukung inisialisasi tipe data sebelum variable digunakan.
   * Cara penulisan : dataType nameVariable = valueVariable
  */
  String namaDepan = "Dio";
  String namaTengah = "Puja";
  String namaBelakang = "Andika";
  print(namaDepan + namaTengah + namaBelakang);

  //2. Type Inference (var, const, final) = valueVariable
  /**
   * Type Inference berarti suatu bahasa pemrograman secara otomatis akan mengetahui tipde data yang digunakan oleh suatu variable.
   * Cara penulisan : keyword (var, late, const, atau final) namaVariable = nilaiVariable
   */
  var variable1 = 1;    //Mutable  
  const variable2 = 2;  //Immutable Variable & Value
  final variable3 = 3;  //Immutable Variable 
  print(variable1+variable2*variable3);

  //Excample Simple
  var greetings = 'Hello Dart';
  print(greetings);
  var myAge;
  myAge = 20;
  print(myAge);
}