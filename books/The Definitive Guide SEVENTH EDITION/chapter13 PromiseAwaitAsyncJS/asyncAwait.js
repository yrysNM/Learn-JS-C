let promise1 = Promise.resolve(5);
let promise2 = 44; 
let promise3 = new Promise(function(resolve, reject) {
	setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
	console.log(values);	// => [ 5, 44, 'foo' ]
});