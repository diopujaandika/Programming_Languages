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
  greet1('Dio Puja Andika', 'Dart'); //memanggil function greet
  greet2('Diva Puja Kiranzi', 'Dart');

  var firstNum = 7;
  var secondNum = 10;
  print('Rata-rata $firstNum & $secondNum adalah ${average1(firstNum, secondNum)}');

  average1(2, 3);   //function mengembalikan nilai
  average2(5, 10);

  print(penjumlahan(20, 30));
  print(pengurangan(30, 10));

  greetNewUser1(); //function value default
  greetNewUser1a();
  greetNewUser2(age: 10, name: 'Wildan', isVerified: false);
  greetNewUser3(name: 'Dio', age: 22, isVerified: true);
}

//Function yang tidak menghasilkan output atau tidak mengembalikan nilai adalah void
void greet1(String param1, String param2){
  print('Halo $param1, selamat datang di $param2!');
}
void greet2(String param1, String param2){
  print('Hello $param1, selamat datang di $param2!');
}

//Function yang mengembalikan nilai (return)
double average1(num num1, num num2){
  var result = (num1 + num2)/2;
  print('hasil dari ($num1 + $num2) / 2 = $result');
  return result;
}
double average2(num num1, num num2){
  var result = (num1 + num2)/2;
  print('Hasil dari $num1 + $num2 /2 adalah $result');
  return result;
}

//Arrow Function
double penjumlahan(double angka1, double angka2) => (angka1 + angka2);
double pengurangan(double angka1, double angka2) => (angka1 - angka2);

//Optional Parameters (default value)
void greetNewUser1([String name = 'dune', int age=10, bool isVerified=true]){
  print('my name is $name, my current age  is $age years old. $isVerified');
}
void greetNewUser1a([String name= 'User', int age = 23, bool isVerified = true]){
  print('Hello $name$age, status Anda $isVerified');
}

//Optional Parameters dengan named optional parameters (?) memungkinkan memasukkan parameter tanpa mempedulikan urutan parameternnya dengan hanya menyebut nama parameternya.
void greetNewUser2({String? name, int? age, bool? isVerified}){
  print('nama saya adalah $name, saat ini saya berusia $age, status saya $isVerified');
}

//Optional Parameter dengan (required) membuat parameter wajib disi
void greetNewUser3({required String name, required int age, required bool isVerified}){
    print('nama saya adalah $name, saat ini saya berusia $age, status saya $isVerified');
}
