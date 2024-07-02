#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int P;
    int num;
    int temp;
    cout << "Enter the number of elements: " << endl;
    cin >> num;
    cout << endl
         << "Enter the elements" << endl;

    int arr[num];

    for (int i = 0; i < num; i++)
    {
        cin >> arr[i];
    }

    for (int i = 0; i < num - 1; i++)
    {
        int min = arr[i];
        P = i;

        for (int j = i + 1; j < num; j++)
        {
            if (min > arr[j])
            {
                min = arr[j];
                P = j;
            }

            temp = arr[i];
            arr[i] = arr[P];
            arr[P] = temp;
        }
    }

    cout << "List array: " << endl;

    for (int num : arr)
    {
        cout << num << " ";
    }

    return 0;
}
