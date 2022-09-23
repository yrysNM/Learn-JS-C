Promise.allSettled([Promise.resolve(1), 
					Promise.reject(2), 3]).then(results => {
						console.log(results[0]);	// => { status: 'fulfilled', value: 1 }
						console.log(results[1]);	// => { status: 'rejected', reason: 2 }
						console.log(results[2]);	// => { status: 'fulfilled', value: 3 }
					});