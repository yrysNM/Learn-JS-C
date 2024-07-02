#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int num;
    int temp;

    cout << "Enter the number of elements: ";
    cin >> num;
    int arr[num];

    cout << "Enter the elements: ";
    for (int i = 0; i < num; i++)
    {
        cin >> arr[i];
    }

    for (int i = 1; i <= num - 1; i++)
    {
        temp = arr[i];
        int j = i - 1;

        while ((temp < arr[j]) && (j >= 0))
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = temp;
    }

    for (int num : arr)
    {
        cout << num << " ";
    }
    return 0;
}
