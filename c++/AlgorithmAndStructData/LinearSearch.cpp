#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

class LinearSearch
{
public:
  void search()
  {
    setlocale(LC_ALL, "rus");

    int ans[20];
    int h = 0;
    int arr[20];
    int key;

    srand(time(NULL));

    for (int i = 0; i < 20; i++) {
      arr[i] = 1 + rand() % 20;
      cout << arr[i] << " ";

      if (i == 9) {
        cout << endl;
      }
    }

    cout << endl << endl << "Enter key: ";
    cin >> key;

    for (int i = 0; i < 20; i++) {
      if (arr[i] == key) {
        ans[h++] = i;
      }
    }

    if (h != 0) {
      for (int i = 0; i < h; i++) {
        cout << "Key " << key << " stay in box " << ans[i] << endl;
      }
    } else {
      cout << "We can't find key " << key << " in array";
    }
  }

  void searchHomeWork() { 
      setlocale(LC_ALL, "rus");

    int ans[10];
    int h = 0; 
    int arr[10]; 
    int key; 

    for (int i = 0; i < 10; i++) {
      arr[i] = (rand() % (10 - 1 + 1)) + 1;
      cout << arr[i] << ", "; 
    }

    cout << endl << endl << "Enter key: "; 
    
    cin >> key; 

    for (int i = 0; i < 10; i++) {
      if (arr[i] == key) {
        ans[h++] = i;
      }
    }

    if (h != 0) {
      for (int i = 0; i < h; i++) {
        cout << "Key " << key << " value -> " << ans[i] << endl;
      }
    } else {
        cout << "Empty " << key << endl;
    }

  }
};
