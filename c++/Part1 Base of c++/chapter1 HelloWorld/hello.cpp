#include <iostream>
#include <string>

int main()
{
    std::cout << "Hello world!\n";

    // valriables
    std::string name;
    std::cout << "What is your name ?\n";
    // std::cin >> name;
    std::getline(std::cin, name);
    std::cout << "Hello, " << name << " !\n";
}