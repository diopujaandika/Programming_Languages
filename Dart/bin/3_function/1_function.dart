import 'dart:io';
///FUNCTIONS

void main(){
  greet('Dio Puja Andika', 'Dart');

  var firstNum = 7;
  var secondNum = 10;
  print('Rata-rata $firstNum & $secondNum adalah ${average(firstNum, secondNum)}');

  print(penjumlahan(20, 30));

  greetNewUser1('Widy', 20, true);
  greetNewUser2('Wildan', 10, false);
}

//Function yang tidak mengembalikan nilai (void)
void greet(String param1, String param2){
  print('Halo $param1, selamat datang di $param2!');
}

//Function yang mengembalikan nilai (return)
double average(num num1, num num2){
  return(num1 + num2)/2;
}
//Arrow Function =>
double penjumlahan(double angka1, double angka2) => (angka1 + angka2);

//Optional Parameters (default value)
void greetNewUser1([String name = 'dune', int age=10, bool isVerified=true]){}

//Optional Parameters (?)
void greetNewUser2([String? name, int? age, bool? isVerified]){}

//Optional Parameter (required)
void greetNewUser3({required String name, required int age, required bool isVerified}){}
