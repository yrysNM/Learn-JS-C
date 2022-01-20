let a = {}; //start with a requla empty object


//add properties to make it "array-like"
let i = 0;

while(i < 10) {
	a[i] = i * i;
	i++;
}

a.length = i;

// now iterate through it  as if it were real array
let total = 0;
for(let j = 0; j < a.length; j++) {
	total  += a[j];
}
console.log(a);
console.log("Total sum: " + total);