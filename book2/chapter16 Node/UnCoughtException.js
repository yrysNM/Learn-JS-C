process.setUnCoughtExceptionCaptureCallback(e => {
	console.error("Uncought exception: ", e);
});

process.on("unhandleRejection", (reason, promise) =>  {
	/* reason is whatever value would have been passed to a
	.catch() function
	promise is the Promise object that rejected */
});