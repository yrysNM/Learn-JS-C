// import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users/2") 				//Make an HTTP (or HTTPS ) GET request
	.then(response => {					// When we get a reponse first check it
		if(response.ok &&				// for a success code and theexpected type
			 response.headers.get("Content-type") === "application/json")  {
			
			return response.json();		// Return a PRomise for the body
		
		}else {
			throw new Error(`Unpexted response  status ${response.status} or content type`);
		}

	})
	.then(currentUser => {				//  When the response json Promise resolves
		displayUserInfo(currentUser);   // do something with the parsed body
		console.log(JSON.stringify(currentUser));
	})
	.catch(error =>  {
		/* Or if anything went wrong,
		just log the error.
		If the user's browser is offline, fetch() itself
		will reject.
		If the server returns a bad response then we throw
		an error above. */
		console.log("Error while fetching current user: ", error);
	});

function displayUserInfo(cur) {
	return JSON.stringify(cur);
}

