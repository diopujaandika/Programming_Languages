///SWITCH CASE

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