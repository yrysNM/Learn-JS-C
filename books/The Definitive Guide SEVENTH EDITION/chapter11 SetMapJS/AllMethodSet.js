let s  = new Set(); 				//Startempty
console.log(s.size);				// => 0
console.log(s.add(1));				// => Add a number
console.log(s.size);				// => 1; now the set  has one member
console.log(s.add(1));				// => Add the same number again 
console.log(s.size);				// => 1; the size does not change
console.log(s.add(true));			// => Add another value: note trhat it is fine to mix types
console.log(s.size);				// => 2
console.log(s.add([1, 2, 3])); 		// => Add an array value
console.log(s.size);				// => 3 the array was added , not its elements
console.log(s.delete(1));			// => true successfully deletd element 1
console.log(s.size); 				// => 2: the size is back down to 2
console.log(s.delete("test"));		// => false:  "test" was not a member deletion failed
console.log(s.delete(true));		// => true: delete succeeded
console.log(s.delete([1, 2, 3]));	// =>  false:the array inthe set is deffrent
console.log(s.size);				// => 1: there is still that one array in the set
console.log(s.clear());				// remove everything from  theset 
console.log(s.size);				// => 0

