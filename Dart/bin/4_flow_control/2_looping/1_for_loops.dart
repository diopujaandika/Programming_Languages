///FOR LOOPS
///For Loops adalah flow control untuk melakukan perulangan.

///for(type variable = value; variable operator value; variable decrement/increment)

void main(){
  myFor1();
  myFor2();
}

//For
void myFor1(){
  for(int i = 1; i<=10; i++){
    print(i);
  }
}

void myFor2(){
  for (int i=1; i<=3; i++){
    for(int j=1; j<=i; j++){
      print(j);
    }
  }
}