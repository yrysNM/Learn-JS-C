const gridTraveler = (m, n) => {
	if(m == 1 && n == 1) return 1;
	if(m == 0 || n == 0) return 0; 

	return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);			// Time  complexity: O(2^m+n)
};

// console.log(gridTraveler(1, 1));			// => 1
// console.log(gridTraveler(2,3));			// => 3
// console.log(gridTraveler(3, 2));			// => 3
// console.log(gridTraveler(3, 3));			// => 6
// console.log(gridTraveler(18 , 18));		// => 2333606220 56.3s very slow  👎📛

//memoization DP 
const gridTravelerDP = (m, n, memo = {}) => {
	const key = m + "," + n;
	
	if(key in memo) return memo[key];

	if(m === 1 && n === 1) return 1;
	if(m === 0 || n === 0) return 0; 

	memo[key] = gridTravelerDP(m - 1, n, memo) + gridTravelerDP(m, n - 1, memo);			// Time  complexity: O(2^m+n)

	return memo[key];											// Time complexity: O(m*n)
};


console.log(gridTravelerDP(1, 1));			// => 1
console.log(gridTravelerDP(2, 3));			// => 3
console.log(gridTravelerDP(3, 2));			// => 3
console.log(gridTravelerDP(3, 3));			// => 6
console.log(gridTravelerDP(18 , 18));		// => 2333606220 109mss good time 👏👍