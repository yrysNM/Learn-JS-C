function ageDog(num) {
	let ageDog = 0;
	if(num < 0) {
		console.log("Number have to positive");
	}else if(num <= 2){
		ageDog = num * 10.5;
	}else {
		ageDog = 21 + (num - 2) * 4;
	}

	console.log("Age: " + ageDog);
}

ageDog(15); 