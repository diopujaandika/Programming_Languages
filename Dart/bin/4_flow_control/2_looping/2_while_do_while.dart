///WHILE AND DO-WHILE
///While and Do-While adalah looping yang mengevaluasi ekspression boolean dan tidak memiliki ketergantungan dengan variable index.
///While lebih cocok digunakan ketika kita tahu pasti berapa banyak perulangan yang diperlukan.

void main(){
  myWhile(1);
  myDoWhile(0);
}

void myWhile(parameter1){
  while(parameter1<=10) {
    print(parameter1);
    parameter1++;
  }
}

void myDoWhile(parameter2){
  do{
    print(parameter2);
    parameter2++;
  }while(parameter2<=10);
}