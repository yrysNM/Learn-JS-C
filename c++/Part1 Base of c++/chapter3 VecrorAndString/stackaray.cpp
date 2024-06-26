#include <iostream>
using namespace std;

class Stack
{
private:
    enum
    {
        Max = 10
    };
    int st[Max];
    int top;

public:
    Stack()
    {
        top = 0;
    }
    void push(int var)
    {
        st[++top] = var;
    }
    int pop()
    {
        return st[top--];
    }
};

main(int argc, char const *argv[])
{
    Stack s1;
    s1.push(11);
    s1.push(22);
    cout << "1: " << s1.pop() << endl;
    cout << "2: " << s1.pop() << endl;

    s1.push(33);
    s1.push(44);
    s1.push(55);
    s1.push(66);
    cout << "3: " << s1.pop() << endl;
    cout << "4: " << s1.pop() << endl;
    cout << "5: " << s1.pop() << endl;
    cout << "6: " << s1.pop() << endl;

    return 0;
}
