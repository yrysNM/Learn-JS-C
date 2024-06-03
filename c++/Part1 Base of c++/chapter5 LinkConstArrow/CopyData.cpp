#include <iostream>

using namespace std;

struct Point
{
    double x, y, z;
};

int main(int argc, char const *argv[])
{
    string s1 = "Elementary my dear Watson!";
    string s2 = s1;

    s1.clear();

    cout << s1 << "\n";
    cout << s2 << "\n";

    // link
    int x = 33;
    int &ref = x;

    ++x;
    cout << ref << "\n";

    // Signposts
    int var = 42;    // обычная переменная
    int *ptr = &var; // указатель на переменную var

    std::cout << "Значение var: " << var << std::endl;            // 42
    std::cout << "Адрес var: " << &var << std::endl;              // Адрес var в памяти
    std::cout << "Значение указателя ptr: " << ptr << std::endl;  // Адрес var (значение указателя)
    std::cout << "Значение по адресу ptr: " << *ptr << std::endl; // 42 (разыменование указателя)

    // Изменение значения через указатель
    *ptr = 100;
    std::cout << "Новое значение var: " << var << std::endl;            // 100
    std::cout << "Новое значение по адресу ptr: " << *ptr << std::endl; // 100

    Point p = {3.0, 4.0, 5.0};

    Point *ptr1 = &p;

    cout << (*ptr1).x << "\n";
    cout << ptr1->z << "\n";

    return 0;
}
