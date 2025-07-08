///COLLECTION
///LIST digunakan untuk menyimpan segala jenis data!
///Sintak => List<dataType> listName = [value1, value2, value3, ...];

void main(){
  mylist();
  myListLoop();
  myListForEach();
  addList();
  mySpreadOperator();
}

//Cara membuat List => List<dataType> listName = [value1, value2, value3, ...];
void mylist (){
  List<int> numberList = [1,2,3,4,5]; 
  List<String> stringList = ['a', 'b', 'c', 'd', 'e'];
  List dynamicList = [1, 10.1, 'Dicoding', true];

  //Cara memanggil semua data list
  print(numberList);
  print(stringList);
  print(dynamicList);

  //Cara memanggil per data melalui index []
  print(numberList[0]);
  print(stringList[1]);
  print(dynamicList[2]);
}

//List dengan Looping
void myListLoop (){
  List<String> stringList = ['JavaScript', 'Dart', 'Python', 'Kotlin', 'Java', 'C#', 'PHP'];
  for(int i=0; i<stringList.length; i++){ //Banyak data dalam list dapat dipanggil dengan .length
    print(stringList[i]);
  }
}

//List .forEach
void myListForEach(){
  List<String> stringList = ['Dio', 'Puja', 'Andika'];
  stringList.forEach((s)=>print(s)); //Menampilkan data menggunakan .forEach
}

//List .add / .insert => Menambahkan data
void addList(){
  List<String> stringList = ['USA', 'Swiss', 'Singapore'];
  stringList.add('Japan');  //.add => menambahkan list
  print(stringList);
  stringList.insert(0, 'English'); //.insert => Tambah data di depan
  print(stringList);
  stringList[4]= 'UEA';
  print(stringList);
}

//Spread Operator
void mySpreadOperator(){
  var favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
  var others = ['Cake', 'Pie', 'Donut'];
  var allFavorites = [...favorites, ...others]; //...namaList => Menggabungkan beberapa list.
  print(allFavorites);

  //Untuk mengatasi list yang bernilai null:
  List<dynamic>? list1;
  List<dynamic>? list2 = [0, ...?list1];
  print(list2);
}