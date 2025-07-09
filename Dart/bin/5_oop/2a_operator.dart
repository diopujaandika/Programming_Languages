///Operator
///Operator adalah method dengan nama spesial
///Dart memperbolehkan kita untuk membuat method dengan nama operator
///

class Orange {
  int quantity = 0;

  Orange operator +(Orange other){
      var result = Orange();
      result.quantity = quantity + other.quantity;
      return result;
  }
}

void main(){
  var orange1 = Orange();
  orange1.quantity = 10;

  var orange2 = Orange();
  orange2.quantity = 15;

  var orange3 = orange2 + orange1;
  print(orange3.quantity);
}