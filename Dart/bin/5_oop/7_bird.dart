import '7_animal.dart';
import '7_flyable.dart';

class Bird extends Animal implements Flyable{
  String featherColor;

  Bird(String name, int age, double weight, this.featherColor)
  : super(name, age, weight);

  @override
  void fly() {
    print('$name is flaying');
  }
}