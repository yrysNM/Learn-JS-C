// The canvas.toBlob() function is callback-based.
// This is a Promise-based wrapper for it.


let UPcanvas = document.getElementById("upFile");

async function getCanvasBlob(canvas) {
	return new Promise((resolve, reject) => {
		canvas.toBlob(resolve);
	});
}

//Here is how we upload a PNG file from a canvas
async function uploadCanvasImage(canvas) {
	let pngblob = await getCanvasBlob(canvas);
	let formdata = new FormData();
	
	formdata.set("canvasimage", pngblob);

	let response = await fetch("http://localhost:4000/canvasTest.html", {method: "POST", body: formdata});
	let body = await response.json(); 
	console.log(body);
}
//getCanvasBlob(UPcanvas);
uploadCanvasImage(UPcanvas);