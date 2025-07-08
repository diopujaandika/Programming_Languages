///COLLECTION
///SET digunakan untuk menyimpan data yang unik.
///Sintak => Set<dataType> setName = new Set.from([value1, value2, value3, ..., valueN]);

void main(){
  mySet();
  mySetUnionIntersection();
}

void mySet(){
  Set<int>anothers = new Set.from([1, 2, 3, 4, 1, 2]);
  print(anothers);

  //Menambahkan Data => add() atau addAll()
  anothers.add(6);
  anothers.addAll({2,4,10,11});
  print(anothers);

  //Menghapus Data => remove()
  anothers.remove(3);
  print(anothers);
  
  //Menampilkan data tertentu => elementAt()
  print(anothers.elementAt(5));
}

//Union dan Intersection
void mySetUnionIntersection(){
  var setA = {1, 2, 3, 4, 5};
  var setB = {3, 1, 4, 7, 8};

  var union = setA.union(setB);  //Union => Gabungan
  var intersection = setA.intersection(setB);  //Intersection => Irisan

  print("union: $union");
  print("intersection: $intersection");
}