#include <iostream>
#include <string>

using namespace std;

int main(int argc, char const *argv[])
{
    string s = "Some string";
    s += " ";
    s += "functions";
    cout << s << "\n";

    // substr
    string sub1 = s.substr(5, 6);
    string sub2 = s.substr(12);

    size_t pos1 = s.find(" ");
    size_t pos2 = s.find(' ', pos1 + 1);
    size_t pos3 = s.find("str");
    size_t pos4 = s.find("#");

    cout << pos3 << "\n";

    // insert
    s.insert(5, "std::");
    cout << s << "\n";

    s.replace(0, 4, "Special");
    cout << s << "\n";

    s.erase(8, 5);

    cout << s << "\n";

    return 0;
}
