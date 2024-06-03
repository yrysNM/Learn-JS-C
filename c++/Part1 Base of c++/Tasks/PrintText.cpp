#include <iostream>

int main(int argc, char const *argv[])
{
    std::cout << "C++ is a general-purpose programming language with a bias towards systems programming that\n"
              << "  - is a better C\n"
              << "  - supports data abstraction\n"
              << "  - supports object-oriented programming\n"
              << "  - supports generic programming.\n";

    std::cout <<
        R"~~~(C++ is a general-purpose programming language with a bias towards systems programming that
    - is a better C
    - supports data abstraction
    - supports object-oriented programming
    - supports generic programming.
    )~~~";
    return 0;
}
