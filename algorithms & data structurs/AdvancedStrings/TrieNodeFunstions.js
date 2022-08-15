function TrieNode() {
    this.children = {};       //table
    this.endOfWord = false;
}

function Trie() {
    this.root = new TrieNode();   
}

Trie.prototype.insert = function(word) {
    let current = this.root;
    for(let i = 0; i< word.length; i++) {
        let ch= word.charAt(i);
        let node = current.children[ch];
        if(node == null) {
            node= new TrieNode(); 
            current.children[ch] = node; 
        }
        current = node; 
    }
    current.endOfWord = true;   //mark the curent nodes endOfWord as true
};

Trie.prototype.search = function(word) {
    let current = this.root; 
    for(let i =0 ; i < word.length; i++) {
        let ch = word.charAt(i);
        let node = current.children[ch];
        if(node == null) {
            return false;               //node doesn't exist
        }

        current = node;
    }

    return current.endOfWord;
};

let trie = new Trie(); 

trie.insert("sammie");
trie.insert("simran");
console.log(trie.search("fake"));
console.log(trie.search("simran"));