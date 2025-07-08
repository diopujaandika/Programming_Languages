///SWITCH and CASE
///Switch and Case adalah pengkondisian yang digunakan untuk mengecek suatu kondisi dengan skala yang lebih besar

///Sintak
///   switch (variable/expression){
///   case value1:
///       statement;
///       break;
///   case value2:
///       statement;
///       break;
///   case value3:
///       statement;
///       break;
///   case ...
///   default:
///       statement;
///   }

void main(){
  mySwitch(10, 5, '+');
}

void mySwitch(double firstNumber, double secondNumber, String operator){
  switch(operator){
    case '+':
      print('$firstNumber $operator $secondNumber = ${firstNumber+secondNumber}');
      break;
    case '-':
      print('$firstNumber $operator $secondNumber = ${firstNumber+secondNumber}');
      break;
    case '*':
      print('$firstNumber $operator $secondNumber = ${firstNumber+secondNumber}');
      break;
    case '/':
      print('$firstNumber $operator $secondNumber = ${firstNumber+secondNumber}');
      break;
    case '%':
      print('$firstNumber $operator $secondNumber = ${firstNumber+secondNumber}');
      break;
    default:
      print('Operator tidak ditemukan!');
  }
}