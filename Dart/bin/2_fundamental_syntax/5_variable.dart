///VARIABLE
///Variable adalah wadah untuk menampung suatu nilai.
///Penulisan variable dalam Dart
///1. Statically Typed
///2. Type Inference

void main(){
  
  //1. Statically Type => typeData nameVariable = valueVariable
  String namaDepan = "Dio";
  String namaTengah = "Puja";
  String namaBelakang = "Andika";
  print(namaDepan + namaTengah + namaBelakang);

  //2. Type Inference (var, const, final) = valueVariable
  var variable1 = 1;    //Mutable  
  const variable2 = 2;  //Immutable Variable & Value
  final variable3 = 3;  //Immutable Variable 
  print(variable1+variable2*variable3);

  //Excample
  var greetings = 'Hello Dart';
  print(greetings);
  var myAge;
  myAge = 20;
  print(myAge);
}