#include <iostream>
#include <list>


using namespace std;

class HashTable {
	int capacity; 
	list<int>* table; 

public: 
	HashTable(int V) {
		int size = getPrime(V);
		this->capacity = size; 
		table = new list<int>[capacity]; 
	}

	void insertItem(int key, int data) {
		int index = hashFunction(key); 
		table[index].push_back(data);
	}

	void deleteItem(int key) {
		int index = hashFunction(key); 

		list<int>::iterator i; 
		for (i = table[index].begin(); i != table[index].end(); i++) {
			if (*i == key) {
				break;
			}
		}
		if (i != table[index].end()) {
			table[index].erase(i);
		}

	}

	int checkPrime(int n) {
		int i; 

		if(n == 1 || n == 0) {
			return 0;
		}
		
		for (i = 2; i < n / 2; i++) {
			if (n % i == 0) {
				return 0;
			}

			return 1;
		}
	}

	int getPrime(int n) {
		if (n % 2 == 0) {
			n++;
		}
		while (!checkPrime(n)) {
			n += 2;
		}
		return n;
	}

	int hashFunction(int key) {
		return key % capacity;
	}

	void displayHash() {
		for (int i = 0; i < capacity; i++) {
			cout << "table[" << i << "]" << endl;
			for (auto x : table[i]) {
				cout << " --> " << x << endl;
			}
				cout << endl;
		}
	}
};

