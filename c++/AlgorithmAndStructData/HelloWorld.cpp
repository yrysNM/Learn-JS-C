#include "LinearSearch.cpp";
#include "hashTable.cpp";
#include "BinarySearch.cpp";
#include <iostream>
#include <string>

using namespace std;

void
displayLineText(int lineLength, string text);

int
main()
{
  displayLineText(20, "HashTable");

  int key[] = { 231, 321, 132, 143, 234, 232 };
  int date[] = { 123, 432, 234, 234, 232, 132 };
  int size = sizeof(key) / sizeof(key[0]);

  HashTable h(size);

  for (int i = 0; i < size; i++) {
    h.insertItem(key[i], date[i]);
  }

  h.deleteItem(12);
  h.displayHash();

  //displayLineText(20, "LineSearch");
  LinearSearch ls;
  //ls.search();
  displayLineText(20, "LineSearch HomeWork");
  ls.searchHomeWork();
  displayLineText(20, "Binary search");
  BinarySearch bs; 
  bs.search();

  return 0;
}

void
displayLineText(int lineLength, string text)
{
  for (int i = 0; i < lineLength; i++) {
    cout << "-";
    if (lineLength / 2 == i) {
      cout << text;
    }
  }

  cout << endl;
}