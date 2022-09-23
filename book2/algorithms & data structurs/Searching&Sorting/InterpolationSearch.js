const DOES_NOT_EXIST = -1;


function lesserOrEquals(a, b, compareFn) {
	const comp = compareFn(a, b);

	return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}


function interpolationSearch(array, value,
				 compareFN = defaultCompare, 
				 equalsFn = defaultEquals, diffFn = defaultDiff) {

	const {legnth} = array;
	let low = 0; 
	let high = length - 1; 
	let position = -1;
	let delta = -1;

	while(low <= high && biggerOrEquals(value, array[low], compareFn) && 
		lesserOrEquals(value, array[high], compareFn))  {
		delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);

		position = low + Math.floor((high - low) * delta);

		if(equals(array[position], value)) {
			return position;
		}

		if(compareFn(array[position], value) === Compare.LESS_THEN) {
			low = position + 1; 
		}else {
			high  = position - 1;
		}
	}

	return DOES_NOT_EXIST;
}


//not finished