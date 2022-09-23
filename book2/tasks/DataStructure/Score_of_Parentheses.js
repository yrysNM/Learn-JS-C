class  Stack{
	constructor(array) {
		this.array= []; 

		if(array) {
			this.array = array;
		}
	}

	isEmpty() {
		return this.array.length == 0;
	}

	push(value) {
		return this.array.push(value);
	}

	pop() {
		return this.array.pop();
	}
}

/**
 * @param {string} s
 * @return {number}
 * 
 * (()) => 2 * A
 * ()() => A + B 
 * ()   => 1    !!!
 */
var scoreOfParentheses = function(s) {
  	let stack = new Stack();
  	let count = 0;
  	let res =  0;
  	for(let pos = 0; pos < s.length; pos++){
  		let currentChar = s.charAt(pos);

  		if(s[pos] == "(") {
  			stack.push(currentChar);
  			count++;
  		}else {
  			count--;
  			if(s[pos - 1] == "(") {
  				res += Math.pow(2, count);
  			}
  		}
  	}

  	return res;

};


console.log(scoreOfParentheses("(())()"));	// => 3
console.log(scoreOfParentheses("()"));		// => 1
console.log(scoreOfParentheses("(())"));	// => 2
console.log(scoreOfParentheses("()()"));	// => 2
console.log(scoreOfParentheses("(()(()))")); // => 6   

