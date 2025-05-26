///WHILE AND DO-WHILE

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

