///PROPERTIES & METHODES
///Method adalah function yang berada di dalam class

import '2_properties_methods_2.dart';

void main(){
  var dicodingCat = Animal('Gray', 2, 3.10)
    ..sleep();

  dicodingCat.eat();
  dicodingCat.poop();

  print(dicodingCat.weight);
}