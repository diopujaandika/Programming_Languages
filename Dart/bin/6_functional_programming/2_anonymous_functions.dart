void main(){
  printLambda();
  print(sum(3,4));
  print(numeric(3,4));
}

int sum(int num1, int num2){
  return num1+num2;
}

//Function Expression
Function printLambda = (){
  print('This is lambda function!');
};

//Function Arrow
var numeric = (int num1, int num2) => num1 + num2;