#include "Stack.cpp"

#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{
    class Stack s;
    for (int i = 1; i <= 3; i++)
    {

        s.push(i);
    }
    int elementPopped = s.pop();

    cout << elementPopped << " Popped from stack" << endl;

    return 0;
}
