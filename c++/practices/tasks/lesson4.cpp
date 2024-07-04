#include <iostream>

int main(int argc, char const *argv[])
{
    int arr1[] = {105, 84, 96, 12, 85};
    arr1[2] = 205;

    for (auto n : arr1)
    {
        std::cout << n << ", ";
    }
    return 0;
}
