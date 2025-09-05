import 'dart:io';

void main(){
  print("Program Konversi Suhu!");
  stdout.write("Masukan suhu dalam fahrenheit!:");
  var fahrenheit = num.parse(stdin.readLineSync()!);
  var celsius = (fahrenheit-32)*5/9;
  print('$fahrenheit derajat fahrenheit = $celsius derajat celcius.');
}