#include <cstdint>
#include <iostream>
#include <vector>

std::uint64_t Factorial(std::uint64_t n)
{
    if (n == 0)
    {
        return 1;
    }
    return n * Factorial(n - 1);
}

void Swap(int &x, int &y)
{
    int z = x;
    x = y;
    y = z;
}

void f(const std::vector<int> &y)
{
    // y.clear() // error
}

std::string Concatenate(const std::vector<std::string> &parts)
{
    std::string result;
    for (const auto &part : parts)
    {
        result += part;
    }
    return result;
}

int &Sum(int a, int b)
{ // ошибка!
    int result = a + b;
    return result;
}

int main(int argc, char const *argv[])
{
    /* code */
    std::cout << Factorial(5) << "\n";
    int a = 1, b = 2;

    Swap(a, b);
    std::cout << a << " " << b << "\n";

    std::vector<std::string> parts = {"abra", "ca", "dabra"};
    std::cout << Concatenate(parts) << "\n"; // abracadabra

    // std::cout << Sum(2, 5) << "\n";

    return 0;
}
