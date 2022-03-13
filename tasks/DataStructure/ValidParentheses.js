/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    if(!str || str.length == 0) return true; 

	let st =  []; 
	let ch = '';
	for(let i = 0; i < str.length; i++) {
		ch = str[i];
      
		if(ch == "(") {
			st.push(")");
		}else if(ch == "[") {
			st.push("]");
		}else if(ch == "{") {
			st.push("}");
		}else {
			
			if(st.length  == 0 || st.pop() != ch) {
				return false;
			}
		}

	}

	return st.length == 0; 
};

//test
let s = "()[]{}";
let s1 = "(]";
console.log(isValid(s));		// => true
console.log(isValid(s1));		// => false