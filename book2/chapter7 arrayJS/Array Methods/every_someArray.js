let a= [1 , 2, 3, 4, 5];

/**
	The every() method is like the mathematical “for all” quantifier ∀:
	it returns true if and only if your predicate function returns true for
	all elements in the array */

console.log(a.every(x => x < 10)); // => true all values are < 10
console.log(a.every(x => x % 2 === 0)); //=> false not all valeus are even

/*  The some() method is like the mathematical “there exists” quantifier
	∃: it returns true if there exists at least one element in the array for
	which the predicate returns true and returns false if and only if the
	predicate returns false for all elements of the array:*/

console.log(a.some(x => x % 2 === 0)); // => true a  has some even numbers
console.log(isNaN); //=> false a has no non-numbers
