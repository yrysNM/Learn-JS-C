function getCurrentVersionNumber(versionCallback) {		//Note callback argument
	//  Make a scripted HTTP request toa backend version API
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

	let request = new XMLHttpRequest();

	request.open("GET", "https://www.iana.org/domains/reserved");
	request.send();

	//Reqister a callback that will be invoked when the response arrives
	request.onload = function() {
		if(request.status === 200) {
			// if HTTP status is good get version number  and call callback
			let currentVersion = parseFloat(request.responseText);
			versionCallback(null, currentVersion);
		}else {
			//Otherwise report an errorto the callback
			versionCallback(request.statusText, null);
		}
	};

	//Register another callback that will be invoked for network errors

	request.oneerror = request.ontimeout = function(e) {
		versionCallback(e.type, null);
	};
}

function test(val, text){
	console.log(val + " " + text);
}
 getCurrentVersionNumber(test);
