let a = [5, 4, 3, 2, 1];

console.log(a.filter(x => x < 3)); // => [2, 1]: values less than 3

console.log(
	a.filter((x, i) => i % 2 === 0)); // [5,  3, 1] every other value

