///Mengubah Tipe Data

void main(){
  //1. String => int
  var eleven = int.parse("111");
  print('$eleven bertipe ${eleven.runtimeType}');

  //2. String => double
  var elevenPointTwo = double.parse('11.11');
  print('$elevenPointTwo bertipe ${elevenPointTwo.runtimeType}');

  //3. int => String
  var elevenAsString = 111.toString();
  print('$elevenAsString bertipe ${elevenAsString.runtimeType}');

  //4. double => String
  var piAsString = 3.14159.toStringAsFixed(2);
  print('$piAsString bertipe ${piAsString.runtimeType}');
}