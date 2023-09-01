const https = require("https");

//read the text content of the URl and asynchronously pass it to the callback
function getText(url, callback){
	// Start an HTTP GET request for the URL
	request = https.get(url);

	// Register a function to handle the "response" event.
	request.on("response", response => {
		// THe response event that response headers have been received
		let httpStatus =response.statusCode;

		// The body of the HTTP response has not been received yet
		// So we register more event handlers to to be called when it arrives.
		response.setEncoding("utf-8");	// We're  expecting Unicode text

		let body = "";					// Which we will accumulate here

		// This event handler is called when a chunk of the body is ready
		response.on("data", chunk => {body += chunk; });

		// This event handler is called when the response is complet
		response.on("end", () => {
			if(httpStatus === 200) {	// If the HTTP response was good
				callback(null, body);	// Pass reponse  body to the callback

			}else {
				callback(httpStatus, null);
			}
		});
	});

	// we also register an event handle for lower level network errors
	request.on("error",(err) => {
		callback(err, null);
	});
}

function callback(val, htmltext) {
	console.log( val  + " " + htmltext);
}
getText("https://yrysnm.github.io/Final-Project_Web/", callback);

