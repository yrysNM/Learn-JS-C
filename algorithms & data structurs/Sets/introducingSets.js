//Insertion
let exampleSet = new Set();
exampleSet.add(1);				// => exmappleSet: Set{1}
exampleSet.add(1);				// => exmapleSet: Set {1}
exampleSet.add(2);				// => exampleSet: set{1, 2}

//Deletion
//console.log(exampleSet.delete(1));			// => tue

//Contains 
//console.log(exampleSet.has(1));				// => false


//Intersection
function intersectSets(setA, setB) {
	let intersection = new Set();

	for(let elem of setB) {

		if(setA.has(elem)) {
			intersection.add(elem)
		}
	}

	return intersection;
}

/* let setA = new Set([1, 2,3, 4]),
	setB = new Set([2, 3]); */



//isSuperSet 
function isSuperSet(setA, subset) {
	for(let elem of subset) {
		if(!setA.has(elem)) {
			return false;
		}
	}

	return true;
}

//union
function unionSet(setA, setB) {
	let union = new Set(setA);
	for(let elem of setB) {
		union.add(elem);
	}

	return union;
}

//difference
function diffrenceSet(setA, setB) {
	let difference = new Set(setA);
	for(let elem of setB) {
		difference.delete(elem);
	}
	return difference;
}

let setA = new Set([1, 2, 3, 4]),
	setB = new Set([2, 3]),
	setC = new Set([5]);

console.log(intersectSets(setA, setB));	// => Set(2) { 2, 3 }

console.log(isSuperSet(setA, setB));	// => tue
//becouse setA has all elements that setB does 
console.log(isSuperSet(setA, setC));	// => false
// becouse setA does not contain 5 which setC contains

console.log(unionSet(setA,setB));		// => Set(4) { 1, 2, 3, 4 }
console.log(unionSet(setA, setC));		// => Set(4) { 1, 2, 3, 4, 5 }

console.log(diffrenceSet(setA, setB));	// => Set(2) { 1, 4 }