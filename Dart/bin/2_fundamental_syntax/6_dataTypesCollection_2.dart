///COLLECTION

void main(){
  mylist();
  myListLoop();
  myListForEach();
  addList();
}

//List
void mylist (){
  List<int> numberList = [1,2,3,4,5];
  List<String> stringList = ['a', 'b', 'c', 'd', 'e'];
  List dynamicList = [1, 10.1, 'Dicoding', true];

  print(numberList);
  print(stringList);
  print(dynamicList);


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
  stringList.forEach((s)=>print(s));
}

//List .add / .insert
void addList(){
  List<String> stringList = ['USA', 'Swiss', 'Singapore'];
  stringList.add('Japan');  //.add => menambahkan list
  print(stringList);
  stringList.insert(0, 'English'); //.insert => Tambah data di depan
  print(stringList);
  stringList[4]= 'UEA';
  print(stringList);
}