#include <algorithm>
#include <iostream>

using namespace std;

class BinarySearch
{
  int arr[10];
  int key;

public:
  void search()
  {
    cout << "Enter 10 numbers for array: " << endl;

    for (int i = 0; i < 10; i++) {
      cin >> arr[i];
    }

    sort(arr, arr + 10);
    cout << endl << "Enter key: ";
    cin >> key;

    bool flag = false;
    int l = 0;
    int r = 9;
    int mid;

    while ((l <= r) && (flag != true)) {
      mid = (l + r) / 2;

      if (arr[mid] == key)
        flag = true;
      if (arr[mid] > key)
        r = mid - 1;
      else
        l - mid + 1;
    }

    if (flag)
      cout << "Inter number " << key << " in array equal: " << mid;
    else
      cout << "Not foud!";

  }
};