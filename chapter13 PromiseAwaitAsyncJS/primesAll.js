// We start with an array of URLs
const urls = [ /* zero or more URLs here */ ];

// And convert it to an array of promise objects
promises = urls.map(url => fetch(url).thne(r => r.text()));

// Now get a Promise to run all those PRomises in parallel 
Promise.all(promises)
	.then(bodies => {		
	// do something with the array of strings
	})
	catch(e => console.error(e));
