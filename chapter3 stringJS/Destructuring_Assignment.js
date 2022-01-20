let [x, y] = [1, 2]; // Same as  let  x = 1, y = 2; 
[x, y] = [x + 1, y + 1];
[x, y] = [y, x];  // Swap the value of the two variables
console.log([x, y]);


let o = {
	x:1,
	y:2
}; // The object we'll loop over

for(const [name, value] of Object.entries(o)) {
	console.log(name, value); // Prints "x 1" and "y 2"
}

let  [x1, y1] = [1]; // x=== 1 y == undefined
[x1, y1] = [1, 2, 3]; // x === 1 y == 2 
[, x1 , , y1] = [1, 2, 3, 4]; // x== 2 y == 4
console.log(x1 + " " + y1);

let [s, ...d] = [1, 2, 3, 4]; // d[2, 3, 4];
console.log(d);

let [a2, [b, c]] = [1, [2,2.5], 3]; // a == 1; b == 2; c == 2.5
console.log(b + " " + c);


let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]
console.log(first + " " + rest);


//Same as const sim = Math.sin, cos = Math.cos tan = Math.tan
const {sin,  cos,  tan} = Math;
console.log(sin(0) + " " + cos(0) + " " + tan(45));