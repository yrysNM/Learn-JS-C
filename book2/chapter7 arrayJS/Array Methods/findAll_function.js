// Find all occurrences of a value x in an array a and return
//an array
// of matching indexe

function findAll(a, x) {
	let results = [], 
	    len = a.length,
	    pos = 0; 				 // the position to search from

	while(pos < len) {
		pos = a.indexOf(x, pos); // Search

		if(pos === -1) break; 	// if nothing found we're done

		results. push(pos); 	// otherwise  store index in array

		pos = pos + 1; 			// and  start next  search at next element

	}

	return results; 			// return array  of indexes 

}

console.log(findAll(Array.of(..."yrys_NM"), "y"));