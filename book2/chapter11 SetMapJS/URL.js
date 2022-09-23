let url = new URL("https://example.com:8000/path/name?q=term#fragment");
url.href 		// => "https://example.com:8000/path/name?q=term#fragment"
url.origin 		// => "https://example.com:8000"
url.protocol 	// => "https:"
url.host 		// => "example.com:8000"
url.hostname 	// => "example.com"
url.port 		// => "8000"
url.pathname	 // => "/path/name"
url.search 		// => "?q=term"
url.hash 		// => "#fragment"
console.log(url.port);

let url2 = new URL("ftp://admin:1337!@ftp.example.com/");
url2.href // => "ftp://admin:1337!@ftp.example.com/"
url2.origin // => "ftp://ftp.example.com"
url2.username // => "admin"
url2.password // => "1337!"

console.log(url2.password);