class gradesStudent {
	constructor() {
		this.grade = [];
	}

	addGrade(dig) {
		return this.grade.push(dig);
	} 

	getAvg() {
		let avg = 0.0;
		this.grade.forEach(item => {
				avg += parseInt(item);
		});	

		return (avg / this.grade.length).toFixed(2);
	}
}



let total = 0;
let average = 0.0; 

let grade = new gradesStudent();

for(let i = 0; i < 5; i++) {
	grade.addGrade((Math.random() * 30).toFixed(2));
}

console.log(grade.grade);
console.log(grade.getAvg());