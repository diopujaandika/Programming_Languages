void main(){
  var name = 'Dicoding';
  String language = 'Dart';
  print('Hello $name, Welcome to $language');

  //Memanggil Function
  StaticallyType('Dio Puja Andika', 23);
  TypeInference('Dio Puja Andika', 23);
  StringInterpolation('Dio Puja Andika', 23);
}

//KARAKTERISTIK DART
//1. Statically Typed
void StaticallyType(String name, int age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//2. Type Inference
void TypeInference(var name, var age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//3. String Interpolation
void StringInterpolation(var name, int age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//4. Multi-paradigm: OOP & Functional