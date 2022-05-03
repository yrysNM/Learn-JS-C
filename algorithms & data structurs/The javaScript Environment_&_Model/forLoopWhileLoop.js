let number = 1, sum = 0; 
for(let  number = 1; number < 11; number++) {
	sum += number;
	
}

while(sum >= number) {
	sum -= number;
	number++;
}

console.log(sum);