let data = [1, 2, 3, 4, 5], sum = 0; 

//Compute the sum of elemets of the array
data.forEach(value => {
	sum += value;
})
console.log(sum); // => sum == 15

// now incremnet  each array element
data.forEach(function(v, i, a) {
	a[i] = v + 1;
})

console.log(data); //=> [ 2, 3, 4, 5, 6 ]

