function fetchSequentially(urls) {
	// We'll store the URL bodies here as we fetch then 
	const bodies = [];

	//Here's a Promise-returning function that fetched one body
	function fetchOne(url) {
		return fetch(url)
			.then(response => response.text())
			.then(body => {
				// we save the body to the array and we're purposely
				//omitting a return value here (returning undefined)
				bodies.push(body);
			});
	}

	// Start with a Promise that will fulfill right away 
	// (with value undefiend)
	let p = Promise.resolve(undefined);

	// Now loop through the desired URLs, building a Promise chain
	// of arbitrary length, fetching one URL at each stage of the chain
	for(url of urls) {
		p = p.then(() => fetchOne(url));
	}

	return p.then(() => bodies);
}

fetchSequentially(urls)
	.then(bodies => {
		/* do something with the array  of strins */
	})
	.catch(e => console.error(e));