function convert(x) {
	switch(typeof x) {
		case "number":  //Convert the number to hexadecimal integer
			return x.toString(16);
		case "string": //Return the string enclosed in quotes
			return '"' + x + '"';
		default: //COnvert any other type in the usual way
			return String(x);
	}
}

console.log(convert("yrys_NM"));