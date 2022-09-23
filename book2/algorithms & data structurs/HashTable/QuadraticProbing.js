function HashTable(size) {
	this.size = size;
	this.keys = this.initArray(size);
	this.values= this.initArray(size);
	this.limit = 0;
}

HashTable.prototype.put = function(key, value) {
	if(this.limit >= this.size) throw "hash table is full"

	let hashedIndex = this.hash(key), squareIndex = 1;

	//quadratic probing
	while(this.keys[hashedIndex] != null ){
		hashedIndex += Math.pow(squareIndex, 2);
		hashedIndex
		squareIndex++;
	}

	this.keys[hashedIndex] = key;
	this.values[hashedIndex] = value;
	this.limit++;
}	

HashTable.prototype.get = function(key) {
	let hashedIndex = this.hash(key), sqauredIndex = 1; 

	while(this.keys[hashedIndex] != key) {
		hashedIndex += Math.pow(squareIndex, 2);

		hashedIndex = hashedIndex  % this.size;

		squaredIndex++;
	}

	return this.values[hashedIndex];

}


HashTable.prototype.hash = function(key) {
	//Cehck if int 
	if(!Number.isInteger(key)) {
		throw "must be int";
	}

	return key % this.size;
}

HashTable.prototype.initArray = function(size) {
	let array = [];

	for(let i = 0; i < size;i++ ) {
		array.push(null);

	}

	return array;
}



let exampleTable = new HashTable(13);
exampleTable.put(7, "hi");
exampleTable.put(20, "hello");
exampleTable.put(33, "sunny");
exampleTable.put(46, "weather");
exampleTable.put(72, "forty");
exampleTable.put(85, "happy");
exampleTable.put(98, "sad");

//console.log(exampleTable);
console.log(exampleTable.keys);
console.log(exampleTable.values, "\n", exampleTable.limit);

