// Multiply thevector {x, y} or {x, y, z} by a scalar value
function vectorMultiply({x, y, z = 0}, scalar) {
	return {x : x * scalar, y: y * scalar, z: z * scalar}; 
}

console.log(vectorMultiply({x: 1, y: 2}, 2)); // => { x: 2, y: 4, z: 0 }