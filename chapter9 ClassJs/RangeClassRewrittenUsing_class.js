class Range {
	constructor(from, to) {
		// Store the start and  end points (state) of this new range object
		// These are noninherited properties that are unique to this object

		this.from = from;
		this.to = to;

	}

	// Return true if x is in the range, false otherwise 
	// This method works for textual and Date ranges as well as numeric.

	includes(x) {
		return this.from <= x && x <= this.to;
	}

	// A generator function  that makes instances of the class iterable
	// Note that  it only workd for  numeric ranges.

	*[Symbol.iterator]() {
		for(let x = Math.ceil(this.from);  x <= this.to; x++) {
			yield x;
		}
	}

	//  Return a string representation of the range
	toString() {
		return `(${this.from}...${this.to}).`;
	}

	static parse(s) {
		let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
		if(!matches) {
			throw new Error(`cannot parse Range from "${s}"`);
		}

		return new Range(parseInt(matches[1]),  parseInt(matches[2]));
	}
}



// demonstrate
let r = new Range(1, 3);			//Create a  Range object 
console.log(r.includes(2));			// => true: 2 is in the range
console.log(r.toString());			// => (1...3).
console.log([...r]);				// =>  [1, 2, 3]

let rp = Range.parse("(1...10)"); 	// Returns a new Range object
//console.log(rp.parse("1...10"));	// TypeError: r.parse is not a function
console.log([...rp]);