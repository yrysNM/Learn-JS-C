import fetch from "node-fetch";

//Suppose you have  function like this to dislay a user profile
function displayUserProfile(profile) {	/* implementation omitted */
	console.log(profile);
}



fetch(doucmentURL) 						//Make an HTTP request
	.then(resonse => response.json())	// ASk for the JSON body of the reponse
	.then(document =>  {				// When we get the parsed JSOn 
		return render(document);		// display the document to the user
	})
	.then(rendered => {					// When we get the rendered document
		cacheInDatabase(rendered);		// cache it in the locla database
	})
	.catch(error => handle(error));		// Handle any errors that occur


fetch("/api/user/profile").then(response => {
	// When the promise resolves, we have status and headers
	if(response.ok &&  
		response.headers.get("Content-Type") === "application/json") {
		// What can we do here? We don't actually have the response body yet.
	}
});


fetch("/api/user/profile").then(response => {
	response.json().then(rpofile => {
		//	Ask for the JSONparsed body
		// When the body of the response arrives, it will be automatically
		// parsed as JSON and passed to this function.
		displayUserProfile(profile);
	});
});

//correclty
fetch("api/user/profile")
	.then(reponse  => {
		return response.json();
	})
	.then(profile => {
		displayUserProfile(profile);
	});

fetch(theURL) // task 1; returns promise 1
.then(callback1) // task 2; returns promise 2
.then(callback2); // task 3; returns promise 3


function c1(response) {			//Callback1

		let p4 = response.json();
		return p4;				// return promise 4
}

function c2(profile){			// callback 2
	displayUserProfile(profile);

}

let  p1 = fetch("https://api-football-v1.p.rapidapi.com/v3/timezone");			// promise 1, task 1
let p2 = p1.then(c1);			// promise 2, task 2
let p3 = p2.then(c2);			// promise 3, task 3