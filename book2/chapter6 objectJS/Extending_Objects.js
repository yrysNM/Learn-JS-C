let target = {
	x: 1
}, source = {
	y: 2,
	z: 3
};

for(let k of Object.keys(source)) {
	target[k] = source[k];
	
}

console.log(target);