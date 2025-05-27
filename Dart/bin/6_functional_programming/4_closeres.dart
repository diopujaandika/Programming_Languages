void main(){
  var contohClosure = penjumlahan(2);
  contohClosure();
  contohClosure();
}

Function penjumlahan(range){
  var count = 1;
  return()=>print("value is ${range+count++}");
}