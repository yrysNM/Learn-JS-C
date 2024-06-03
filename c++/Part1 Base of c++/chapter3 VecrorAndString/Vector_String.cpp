#include <iostream>
#include <vector>

int main(int argc, char const *argv[])
{
    std::vector<int> data = {1, 2, 3, 4, 5};
    for (int num : data)
    {
        std::cout << num << " ";
    }

    std::cout << "\n";

    // initialization vector
    std::vector<std::string> v1;
    std::vector<std::string> v2(5);
    std::vector<std::string> v3(5, "hello");

    int a = data[0];
    int b = data[3];
    data[2] = 2;

    std::cout << data.size() << "\n";

    std::cout << data[42] << "\n";   // неопределённое поведение: может произойти всё что угодно
    std::cout << data.at(0) << "\n"; // напечатается 1
    // std::cout << data.at(42) << "\n";

    std::cout << data.front() << "\n";
    std::cout << data.back() << "\n";

    for (size_t i = 0; i != data.size(); ++i)
    {
        std::cout << data[i] << " ";
    }

    // ssize for vectors
    for (std::int64_t i = 0; i + 1 < data.size(); i++)
    {
        if (data[i] == data[i + 1])
        {
            std::cout << "Duplicate value: " << data[i] << "\n";
        }
    }

    // adding and deleting value in vector

    int x;
    std::vector<int> data_num;
    while (std::cin >> x)
    {
        data_num.push_back(x);
    }

    std::cout << data_num.size();

    while (!data_num.empty() && data.back() == 0)
    {
        data.pop_back();
    }
}
