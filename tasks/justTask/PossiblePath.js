function solve(a, b, x,  y) {
	let baseCase  = [x,  y]; 
	

	return (gcd(a,b) ==  gcd(x, y)) ? "YES" : "NO";

}

const gcd = (a,b) => {
	if(!b){
		return a;
	}

	return gcd(b,  a % b); 	
};


function smallestPossibleNumber(num){
	  //Create a character array and sort it
	  let sorted = num.split('').sort();
	  
	  //Check if first character is not 0 then join and return it
	  if(sorted[0] != '0'){
	     return sorted.join('');
	  }
	  
	  //find the index of the first non - zero character
	  let index = 0;
	  for(let i = 0; i < sorted.length; i++){
	     if(sorted[i] > "0"){
	       index = i;
	       break;
	     }
	  }
	  
	  //Swap the indexes
	  let temp = sorted[0];
	  sorted[0] = sorted[index];
	  sorted[index] = temp;
	 
	  //return the string after joining the characters of array
	  return sorted.join('');
}
//solve(1471922852, 714664297, 860782108, 1824439163);
console.log(solve(1, 1, 2, 3));
//solve(3299, 7314, 6015, 6906);
console.log(solve(5564, 1059, 4129, 3475));
console.log(solve(7545, 2436, 3299, 4059));
let s = "161168";
console.log(smallestPossibleNumber(s));