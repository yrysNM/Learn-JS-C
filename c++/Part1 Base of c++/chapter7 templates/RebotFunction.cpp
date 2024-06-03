#include <iostream>
#include <string>
#include <vector>

using namespace std;

void Print(int value)
{
    cout << value << "\n";
}

void Print(const string &name, int value)
{
    cout << name << ": " << value << "\n";
}

void Print(const string &str)
{
    cout << str << "\n";
}

// int Max(int x, int y)
// {
//     if (x > y)
//     {
//         return x;
//     }
//     else
//     {
//         return y;
//     }
// }

// double Max(double x, double y)
// {
//     if (x > y)
//     {
//         return x;
//     }
//     else
//     {
//         return y;
//     }
// }

// std::string Max(const std::string &x, const std::string &y)
// {
//     if (x > y)
//     {
//         return x;
//     }
//     else
//     {
//         return y;
//     }
// }

template <typename T>
T Max(const T &x, const T &y)
{
    if (x > y)
    {
        return x;
    }
    else
    {
        return y;
    }
}

// перегрузка для векторов
template <typename T>
const vector<T> &Max(const vector<T> &v1, const vector<T> &v2)
{
    if (v1.size() > v2.size())
    {
        return v1;
    }
    else if (v1.size() < v2.size())
    {
        return v2;
    }
    else if (v1 > v2)
    {
        return v1;
    }
    else
    {
        return v2;
    }
}

template <typename T1, typename T2, typename T3>
struct Triple
{
    T1 first;
    T2 second;
    T3 third;
};

int main(int argc, char const *argv[])
{
    Print(42);       // v1
    Print("zz", 33); // v2
    Print("bye");    // v3

    std::cout << Max(1, 2) << "\n";             // 2
    std::cout << Max(3.14159, 2.71828) << "\n"; // 3.14159

    std::string word1 = "hello", word2 = "world";
    std::cout << Max(word1, word2) << "\n"; // world

    std::vector<int> v1 = {1, 2, 3};
    std::vector<int> v2 = {4, 5};
    for (int x : Max(v1, v2))
    {                          // вызов перегруженной версии
        std::cout << x << " "; // 1 2 3
    }
    std::cout << "\n";

    Triple<int, int, int> point = {-1, 2, 4};
    Triple<string, string, int> wordPairsFreq = {"hello", "world", 33};

    cout << point.first << wordPairsFreq.second << "\n";

    return 0;
}
