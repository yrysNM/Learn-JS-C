function fib(number) {
	function calc(number) {
		if(number <= 1) {
			return number;
		}

		return calc(number - 1) + calc(number - 2);
	}
}

let string = "";
for(let i = 1; i <= number; i++) {
	string += `${calc(i)}`;
}

console.log(string);