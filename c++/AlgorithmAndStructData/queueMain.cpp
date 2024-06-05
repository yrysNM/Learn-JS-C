#include <iostream>
#include "Queue.cpp"
#include <queue>

using namespace std;

void showq(queue<int> qq)
{
    queue<int> q = qq;
    while (!q.empty())
    {
        cout << "\t" << q.front();
        q.pop();
    }
    cout << endl;
}

int main(int argc, char const *argv[])
{
    class Queue q;

    queue<int> gquiz;
    gquiz.push(10);
    gquiz.push(20);
    gquiz.push(30);

    gquiz.pop();
    gquiz.pop();

    gquiz.push(50);

    gquiz.pop();

    cout
        << "------------------" << endl;
    showq(gquiz);
    cout << "------------------" << endl;

    q.deQueue();

    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(3);
    q.enQueue(4);
    q.enQueue(5);

    q.enQueue(6);

    q.display();

    q.deQueue();
    q.deQueue();
    q.display();

    q.enQueue(1);
    // q.enQueue(1);

    q.display();

    return 0;
}
