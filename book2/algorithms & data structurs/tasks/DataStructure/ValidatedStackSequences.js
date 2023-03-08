/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */


class Stack {
	constructor(array) {
		this.array = []; 

		if(array) {
			this.array = array;
		}
	}

	getBuffer() {
		return this.array.slice(); 
	}

	isEmpty() {
		return this.array.length ==  0;
	}

	peek() {
		return this.array[this.array.length - 1];
	}

	push(value) {
		this.array.push(value);
	}

	pop() {
		return this.array.pop();
	}
}

function reverseArray(pushed, popped) {
	let st = new Stack(pushed);

	for(let i =0; i < popped.length; i++) {
		if(st.peek() == popped[i]) {
			popped.splice(i, 1);
			pushed.splice(pushed.length - 1, 1);
		}
	}


	let revPopped = popped.reverse();
	let checkValue = []; 
	// console.log(pushed, revPopped);
	for(let i =0; i < revPopped. length; i++){
		if(revPopped[i] == pushed[i]) {
			checkValue.push(true);
		}else {
			checkValue.push(false);
		}
 	}
  		
  	

  	for(let i =0; i < checkValue.length; i++) {
  		if(checkValue[i] != true) {
  		 	return false;
  		}
  	}

  	return true;


}

function withoutreverArray(pushed, popped) {
	let st = new Stack(pushed);

	let checkValue = [];

	for(let i =0; i < popped.length; i++) {
		if(st.peek() == popped[i]) {
			popped.splice(i, 1);
			pushed.splice(pushed.length - 1, 1);
		}
	}


	// console.log(pushed, popped);
	// console.log(reverseArray(pushed,popped));
	
		while(pushed.length && popped.length) {
			let tempPush = pushed.shift(); 
			let tempPopped = popped.pop(); 


			if(tempPush == tempPopped) {
				checkValue.push(true);
			}else {

		 		checkValue.push(false);
			}

		}
  		
  	
  	for(let i =0; i < checkValue.length; i++) {
  		if(checkValue[i] != true) {
  		 	return false;
  		}
  	}
	 
  	return true;
}


var validateStackSequences = function(pushed, popped) {
	

	//console.log(reverseArray(pushed, popped), withoutreverArray(pushed, popped));

	//return (reverseArray(pushed, popped) || withoutreverArray(pushed, popped)) ? true : false;  
	
	let st = new Stack();
	let j = 0, n = pushed.length;
	for(let i = 0; i< pushed.length; i++) {
		st.push(pushed[i]);

		while(!st.isEmpty() && st.peek() == popped[j]) {
			st.pop();
			j++;
		}
	}

	return j === n;


	   /* let checkRes = []; 
    while(pushed.length && popped.length) {
    	let tempPush = pushed.shift(); 
    	let tempPopped = popped.pop(); 


    	if(tempPush == tempPopped) {
    		checkRes.push(true);
    	}else {

     		checkRes.push(false);
    	}

    }
    console.log(checkRes);
    for(let i =0; i < checkRes.length; i++) {
    	if(checkRes[i] == false) {
    		return false;
    	}
    }

    return true; */


    /*   
     while(pushed.length && popped.length) {
    	let tempPush = pushed.shift(); 
    	let tempPopped = popped.pop(); 


    	if(tempPush == tempPopped) {
    		return true;
    	}

    }

    return false; */
};


//tests
let pushed1 = [1,2,3,4,5];
let popped1 = [4,5,3,2,1];


let pushed = [0, 2, 1];
let popped = [0, 1, 2];



//[2,1,0]


console.log(validateStackSequences([1,2,3,4,5], [5, 4, 3, 1, 2]));

console.log(validateStackSequences(pushed, popped));
console.log(validateStackSequences(pushed1, popped1));