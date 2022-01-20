function vectorAdd(v1, v2) {
	return [v1[0] + v2[0], v1[1] + v2[1] ];
}

console.log(vectorAdd([1, 2], [3, 4])); 		//  => [4, 6]

function vectorAddA([x1, y1], [x2, y2]) {  		// Unpack 2 arguments into 4 parameters
	return [x1 + x2, y1 + y2];
}

console.log(vectorAddA([1, 2], [3, 4]));		// =>[4, 6]



// Multiply the vector {x, y} by a scalar value
function  vectorMuiltiply({x, y}, scalar) {
	return {x: x * scalar, y: y * scalar};
}

console.log(vectorMuiltiply({x:1, y: 2}, 2));  // => { x: 2, y: 4 }


function vectorAddO(
	{x: x1, y: y1}, 						  // Unpack 1st object into x1 into y1 params
	{x: x2, y: y2}							  // Unpack 2nd object into x2 and y2 params
) {
	return {x: x1 + x2, y: y1 + y2};
}

console.log(vectorAddO({x: 1, y: 2}, {x: 3, y: 4 }));   // => { x: 4, y: 6 }