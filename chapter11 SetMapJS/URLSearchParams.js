let url = new URL("http://example.com");
let params = new URLSearchParams();
params.append("q", "term");
params.append("opts", "exact");
params.toString() 		// => "q=term&opts=exact"
url.search = params;
url.href; 				// => "http://example.com/?q=term&opts=exact"