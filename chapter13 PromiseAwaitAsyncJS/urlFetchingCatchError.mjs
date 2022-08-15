import fetch from "node-fetch";

fetch("'https://api-football-v1.p.rapidapi.com/v3/timezone")		//Start the  HTTP request
	.then(response => {			// Call this when status and headers are ready
		if(!response.ok)  {		// if we got a 404 Not found or similiar error 
			return null; 		// mayve user is logged out return null profile
		}

		//Now check  the header to ensure that the server sent us JSOn
		// If not our server is broken ,  and this is a serious error!
		let type = response.header.get("content-type");
		if(type !== "application/json") {
			throw new  TypeError(`Expexted JSON, got ${type}`);
		}

		// If we get here, then we got a 2xx status and a JSON content-type
			// so we can confidently return a Promise for the	response
			// body as a JSON object.
		return response.json();
	})
	.then(profile => {		//Called with the parsed response body or null

		if(profile) {
			displayUserProfile(profile);
		}else {				// if we got a 404 error above and retured null we  end up here
			displayLoggedOutProfilePage();
		}
	})
	.catch(e => {
		if(e instanceof NetworkError) {
			// fetch() can fail this way if the internet connection is down
			displayErrorMessage("Check your internet  connection.");
		}else if(e instanceof TypeError) {
			// fetch() can fail this way if the internet connection is down
			displayErrorMessage("Something is wrong with our server!");
		}else{
			// This must be some kind of unanticipated error
				console.error(e);
		}
	});