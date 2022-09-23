//Take care of some UI details
let  nick = prompt("Enter your nickname");				//Get user's nivkname
let input = document.getElementById("input");			// Find the input field

input.focus();											// Set keyboard focus


//Reqister for notification of new message using EventSourse 
let chat = new EventSource("/chat");
chat.addEventListener("chat", event => {				// When a chat message arrives

		let div = document.createElement("div");		// Create a <div>
		div.append(event.data);							// Add text from the message
		
		input.before(div);								// And add div before input
		
		input.scroolIntoView();							// Ensure input elt is visible
		
});


//Post the user's message to the server using fetch
input.addEventListener("change", () => {				// when the user strikes return
		fetch("/chat", {								// Start an HTTP request to theis url
			method: "POST",								// Make it a Post requeest with body
			body: nick + ": " + input.value				// set to the users nick and input
		})		
		.catch(error => console.error);				    // Ignore reponse but log any error

	input.value = "";									// Clear the input
});