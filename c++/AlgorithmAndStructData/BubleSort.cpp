#include <iostream>
using namespace std;

class BubleSort
{
public:
  void sort()
  {
    int digitals[10];
    cout << "Enter 10 numbes: " << endl;

    for (int i = 0; i < 10; i++)
    {
      cin >> digitals[i];
    }

    for (int i = 0; i < 10; i++)
    {
      for (int j = 0; j < i + 1; j++)
      {
        if (digitals[i] > digitals[j])
        {
          int temp = digitals[i];
          digitals[i] = digitals[j];
          digitals[j] = temp;
        }
      }
    }
    cout << "Array sorted: ";

    for (int i = 0; i < 10; i++)
    {
      cout << digitals[i] << " ";
    }
  }
};