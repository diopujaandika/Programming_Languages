void main(){
  var name = 'Dicoding';
  String language = 'Dart';
  print('Hello $name, Welcome to $language');

  //Memanggil Function
  staticallyType('Dio Puja Andika', 23);
  typeInference('Dio Puja Andika', 23);
  stringInterpolation('Dio Puja Andika', 23);
}

//KARAKTERISTIK DART
//1. Statically Typed
void staticallyType(String name, int age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//2. Type Inference
void typeInference(var name, var age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//3. String Interpolation
void stringInterpolation(var name, int age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//4. Multi-paradigm: OOP & Functional
