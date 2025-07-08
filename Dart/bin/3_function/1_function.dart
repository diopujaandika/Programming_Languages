import 'dart:io';
///FUNCTIONS
///Function adalah sebuah fungsi yang dibisa kita panggil berkali-kali.

///Sintak
///   returnType functionName(type param1, type param2, ...){
///         return result;
///   }
/// 

///Jenis Parameter dalam Dart
///1. origin parameter => type param1, type param2, ...
///2. default parameter => type param1 = value1, type param2 = value2, ...
///3. null safety parameter => [type? param1, type? param2, ...] => input nilai parameter harus berurutan
///4. named opstional parameter => {type? param1, type? param2, ...} => input nilai parameter bisa acak tapi diikuti dengan nama parameternya
///5. required parameter => {required type param1, required type param2, ...}

void main(){
  greet('Dio Puja Andika', 'Dart');

  var firstNum = 7;
  var secondNum = 10;
  print('Rata-rata $firstNum & $secondNum adalah ${average(firstNum, secondNum)}');

  print(penjumlahan(20, 30));

  greetNewUser1(); //function value default
  greetNewUser2('Wildan', 10, false);

  average(2, 3);   //function mengembalikan nilai
}

//Function yang tidak mengembalikan nilai adalah void
void greet(String param1, String param2){
  print('Halo $param1, selamat datang di $param2!');
}

//Function yang mengembalikan nilai (return)
double average(num num1, num num2){
  var result = (num1 + num2)/2;
  print('hasil dari ($num1 + $num2) / 2 = $result');
  return result;
}
//Arrow Function =>
double penjumlahan(double angka1, double angka2) => (angka1 + angka2);

//Optional Parameters (default value)
void greetNewUser1([String name = 'dune', int age=10, bool isVerified=true]){
  print('my name is $name, my current age  is $age years old. $isVerified');
}

//Optional Parameters (?)
void greetNewUser2([String? name, int? age, bool? isVerified]){}

//Optional Parameter (required)
void greetNewUser3({required String name, required int age, required bool isVerified}){}
