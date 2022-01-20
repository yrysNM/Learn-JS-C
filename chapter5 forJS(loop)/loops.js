let count = 0; 
while(count  < 10) {
	console.log(count);
	count++;
}

function printArray(a) {
	let len = a.length, i = 0;
	if(len === 0) {
		console.log("EMpty Array");
	}else {
		do{
			console.log(a[i]);
		}while(++i < len);
	}
}

printArray(new Array("yrys_NM",  "Hi", "?", "Hello"));

for(let count = 0; count < 10; count++) {
	console.log(count);
}

