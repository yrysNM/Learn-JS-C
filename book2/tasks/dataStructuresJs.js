// Array 
function insertToTail(array, element){
	//array.push(element);					// => [ 1, 2, 3, 4 ]
	array.unshift(element);					// => [ 4, 1, 2, 3 ]
	return array;


}

const array = [1, 2, 3];
/* console.log(insertToTail(array, 4)); */		


//Search
function search(array, element) {
	for(let index = 0; index < array.length; index++){
		if(element === array[index]) {
			return index;
		}
	}
}

const arrayS = [1, "word", 3.14, {a: 1}];
/* console.log(search(arrayS, "word"));			// => 1
console.log(search(arrayS, 3.14)); // => 2 */

// Deleting elements from an arra 
function remove(array, element){
	const index = search(array, element);
	//splice remove 1 element
	array.splice(index, 1);
	return array;
}

const array1 = [0, 1, 2, 3];
//console.log(remove(array1, 1));				// => [ 0, 2, 3 ]



//HashMaps
/* Naïve HashMap implementation */
class NaiveHashMap {
	constructor(initialCapacity = 2){
		this.buckets = new Array(initialCapacity);

	}

	set(key, value){
		const index = this.getIndex(key);
		this.buckets[index] = value;
	}

	get(key){
		const index = this.getIndex(key);
		return this.buckets[index];

	}

	hash(key){
// 		let hashValue = 0;
// 		const stringKey = key.toString();
// 
// 		for(let i = 0;i < stringKey.length; i++){
// 			const charCode = stringKey.charCodeAt(i);
// 			hashValue  += charCode;
// 		}
// 		return hashValue;
		 return key.toString().length;
	}

	getIndex(key){
		const indexHash  = this.hash(key);
		const index = indexHash % this.buckets.length; 
		return index;
	}
}

//Usage: 
const assert = require("assert");
const hashMap = new NaiveHashMap(); 

hashMap.set("cat", 2);
hashMap.set("rat", 7);
hashMap.set("dog", 1);
hashMap.set("art", 8);

console.log(hashMap.buckets);
/*
  bucket #0: <1 empty item>,
  bucket #1: 8
*/

assert.equal(hashMap.get("art"), 8); // this one is ok
assert.equal(hashMap.get('cat'), 8); // got overwritten by art 
assert.equal(hashMap.get('rat'), 8); // got overwritten by art 
assert.equal(hashMap.get('dog'), 8); // got overwritten by art 
console.log(hashMap.get("cat"));	 // => 8
console.log(hashMap.hash("cat"));	 



// Linked List
class Node {
	cinstructor(value){
		this.value = value; 
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.root= null; 	// first/head/ root element 
		this.size = 0;		// totoal number of  element in the list
		
	}
}