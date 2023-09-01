function Stack(array) {
	this.array = [];
	if (array)
		this.array = array;
}

Stack.prototype.isEmpty = function () {
	return this.array.length == 0;
};

Stack.prototype.push = function (value) {
	return this.array.push(value);
};

Stack.prototype.pop = function () {
	return this.array.pop();
};


function isParenthesisValid(validationString) {
	let stack = new Stack();

	for (let pos = 0; pos < validationString.length; pos++) {
		let currentChar = validationString.charAt(pos);

		if (currentChar == "(" || currentChar == "{" || currentChar == "[") {
			stack.push(currentChar);
		} else if (currentChar == ")" || currentChar == "}" || currentChar == "]") {
			if (stack.isEmpty()) {
				return false;
			}
			stack.pop();
		}
	}

	return stack.isEmpty();						// Time complexity: o(n)
}

console.log(isParenthesisValid("(((()"));		// => false
console.log(isParenthesisValid("(())()"));		// => true
console.log(isParenthesisValid("([{}])"));