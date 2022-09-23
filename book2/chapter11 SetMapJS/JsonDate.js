

let text = JSON.stringify(new Date().toISOString());

let data = JSON.parse(text, function(key, value) {
	// Remove any values whose property name begins with an undescore 
	if(key[0] === "_") return undefined;

	// if the value is a string in ISO 8601 date  format conver it  to a Date 
	if(typeof value === "string" && 
			/^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
		return new Date(value);
	}


	return value;
});

console.log(data);