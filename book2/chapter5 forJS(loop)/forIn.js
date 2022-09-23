let o =  {
	x: 1,
	y: 2,
	c: 3
};

for(let p  in o) { // Assign property names of o to variable p
	console.log(o[p]); //Print the value ofeach property
}

let a = [], i = 0;
for(a[i++] in o) /* empty */

for(let i in a) console.log(i);