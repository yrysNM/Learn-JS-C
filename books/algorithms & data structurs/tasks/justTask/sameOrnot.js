function sameOrnot(arr) {
		let s = new Set(); 				//A  new, empty set 
		//let t= new Set([1, s]);		// A new set with two members

		let  t = new  Set(s);				 // A new set that copies
		let unique = new Set("Missisippi");  // 4 elements: "M", "i", "s", and "p"

		console.log(unique.size);			// => 4
		console.log(unique);				// => Set(4) { 'M', 'i', 's', 'p' }

	let st= new Set(arr);

	return arr.length != st.size; 


}

function sameorNotLoop(arr) {
	let bol = false;
	for(let  i = 0;i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++){
		//	console.log(arr[i], arr[j]);

			if(arr[i] == arr[j]) 
			{
				bol = true;
				break;
			}

		}
	}

	console.log(bol);
}

console.log(sameOrnot([33,  33, 343]));	    // => true if have same number

sameorNotLoop([32, 22, 333, 33]);