///VARIABLE SCOPE
//Setiap variable memliki scope atau lingkupnya masing-masing. Variable dianggap satu scope yang sama, jika masih berada dalam satu blok kurung kurawal yang sama.

void main(){
  //1. Conth pertama variable dalam 1 scope yang sama
  var isAvailableForDiscount = true;
  var price = 30000;
  num discount = 0;
  if (isAvailableForDiscount){
    discount = 10/10 * price;
  }
  print('You need to pay: ${price - discount}');

  //2.1 Contoh kedua variable dalam scope yang berbeda
  var price1 = 400000;
  var discount1 = checkDisount1(price1);
  print('You need to pay: ${price1-discount1}');
}

//2.2 Contoh kedua variable dalam scope yang berbeda
num checkDisount1(num price1){
  num discount1 = 0;
  if(price1 >= 100000){
    discount1 = 10/10*price1;
  }
  return discount1;
}
