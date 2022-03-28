class TrieNode {
	constructor() {
		this.children = {}; 	// table 
		this.endOfWord = false; 
	}
}


class Trie {
	constructor() {

		this.root = new TrieNode();
	}

	insert(word) {
		let current = this.root; 
		for(let i = 0; i < word.length; i++) {
			let ch= word.charAt(i);
			let node = current.children[ch];

			if(node == null) {
				node = new TrieNode();
				current.children[ch] = node;
			}
			current = node;
		}

		current.endOfWord = true;// mark the current nodes endOfWord as true
	}

	search(word) {
		let current= this.root; 
		for(let i = 0; i <  word.length; i++) {
			let ch = word.charAt(i);
			let node = current.children[ch];

			if(node == null) {
					return false;
			}
			current = node; 
		}

		return current.endOfWord;
	}

	delete(word) {
		this.deleteRecursively(this.root, word, 0);
	}


	deleteRecursively(current, word, index) {
		if(index == word.length) {
			//when end of word is reached only delete if current.end of
			// word is true
			if(!current.endOfWord) {
				return false;
			}

			current.endOfWord = false;

			// if current has no other mapping then return true
			return Object.keys(current.children).length == 0;
		}

		let ch = word. charAt(index);
		let node = current.children[ch];

		if(node == null) 
			return false;

		let shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1);


		//if true is retured then 
		//delete the mapping of character and trienode reference from map

		if(shouldDeleteCurrentNode) {
			delete current.children[ch];
			// retrun true if no mappings are left in the map.
			return Object.keys(current.children).length == 0;
		}
		return false;
	}

}

//test
let trie = new Trie(); 
trie.insert("sammie");
trie.insert("simran");
console.log(trie.search("simran")); 		// => true
console.log(trie.search("fake"));			// => false
console.log(trie.search("sim"));			// => false
trie.delete("sammie");
trie.delete("simran");
console.log(trie.search('sammie'));			// => false
console.log(trie.search('simran'));			// => falsle
