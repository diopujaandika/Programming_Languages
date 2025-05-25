///EXCEPTIONS

void main(){
  try{
    var a = 7;
    var b = 0;
    print(a ~/ b);
  } catch (e, s){
    print('Exception happened: $e');
    print('Stack trace: $s');
  }finally{
    print("finally tetap akan dijalankan tanpa memperdulikan try dan catch.");
    print("this line still executerd!");
  }
}