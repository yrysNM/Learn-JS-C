let classNames = [
	"header", "menu-item", "menu-item", "menu-item", "footer",  "menu", "menu", "link", "link", "link" , "link"
];

let classNamesCount = {};
let arrayUniq = [];

for(let i =  0; i < classNames.length; i++){
	let current = classNames[i];

	if(classNamesCount[current]) {
		classNamesCount[current] += 1
		
	}else {
		classNamesCount[current] = 1;
		
	}

}

let result = Object.keys(classNamesCount).sort((a, b) => classNamesCount[b] - classNamesCount[a]);

console.log(result);
