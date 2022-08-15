// Determine if o is an array-like object.
// Strings and functions have numeric length properties, butare
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType !== 3 test.

function isArrayLike(o) {
	if(o &&  typeof o === "object" &&		// // o is an objectand is  not nulll
		Number.isfinite(o.length)  &&		// o.length is a finite number
		o.length >= 0 			   && 		// o.length is non-negative
		Number.isInteger(o.length) && 		// o.length is an integer
		o.length <  4294967295)				// 0.length < 2^32
	{
		return true;
	}else {
		return false;
	}

}	