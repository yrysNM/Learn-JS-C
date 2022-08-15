let frequency = {};

for(let letter of "missisippi") {
	if(frequency[letter]) {
		frequency[letter]++;
	}else {
		frequency[letter] = 1;
	}
}

console.log(frequency); //=>  { m: 1, i: 4, s: 3, p: 2 }