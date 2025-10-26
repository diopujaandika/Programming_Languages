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
//1. Statically Typed => Mendefinisikan tipe data variable pada saat ingin mendeklarasikan variable.
void staticallyType(String name, int age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//2. Type Inference => Mendefinisikan keyword (var, const, dan final) varible untuk mendeklarasikan sebuah variable,
void typeInference(var name, var age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//3. String Interpolation => Dapat menyisipkan sebuah variable dalam sebuah string dengan sintak $namaVariable.
void stringInterpolation(var name, int age){
  print('Nama Saya adalah $name, usia Saya saat ini adalah $age tahun.');
}
//4. Multi-paradigm: OOP & Functional => Mendukung paradigma OPP dan Functional.
