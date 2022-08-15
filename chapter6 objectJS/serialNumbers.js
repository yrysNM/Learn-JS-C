// this object generates strictly increasing serial numbes 
const serialnum = {
	// This data property holds the next serial number.
	// The _ in the property name hints that it is for internal use only
	_n: 0,

	//Return the current value and increment it
	get next() {
		return this._n++;
	},
	//set a new value of n but only if it is larger than current
	set next(n) {
		if(n > this._n) this._n = n;
		else throw new Error("serial number can only be set to larger value");
	},
};

console.log(serialnum.next = 10); // Set the starting serial number;
console.log(serialnum.next); // => 10
console.log(serialnum.next); // => 11 difrent value each time we get next