import fetch from "node-fetch";

const fetchData = async() =>{
	const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); 	/* fetch() returns a promise, so we ned to wait for it */

	const country = await res.json();	// res is now only an HTTP response, so we need to call res.json()

	console.log(country);
};

fetchData();