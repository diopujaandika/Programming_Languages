void main(){
  sum(3, 6);
}

//1. Pure Functions => Function bergantung dengan argurment atau parameter 
int sum(int num1, int num2){
  return num1 + num2;
}

//2. Recursion => FP tidak ada konsep perulangan seperti for atau while
int fibonacci(n){
  if(n <= 0){
    return 0;
  }else if(n == 1){
    return 1;
  }else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}