const fs  = require("fs");

async function parseFile(fileName) {
	let  stream = fs.createReadStream(fileName, {endcoding: "utf-8"});

	for await(let chunk of stream) {
		parseChunk(chunk);			// Assume parseChunk() is defined elsewhere
		console.log(chunk);
	}
}

parseFile("config.json");