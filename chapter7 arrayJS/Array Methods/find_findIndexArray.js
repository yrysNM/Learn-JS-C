let a = [1, 2, 3, 4, 5];


//findindex
console.log(a.findIndex(x => x === 3)); // => 2 the value 3 apears at index 2
console.log(a.findIndex(x => x < 0)); // => -1 no negattive number in the array

//find
console.log(a.find(x => x % 5 === 0)); // =>5
console.log(a.find(x => x %  7 === 0)); // => undefined no muiltiples of 7 in the array