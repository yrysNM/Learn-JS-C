function checkForUpdates() {
	console.log(new Date().getSeconds());
}

// Call checkForUpdates in one minute and then again every minute after that
let updateIntervalId = setInterval(checkForUpdates, 6000);


// setInterval() returns a value that we can use to stop the repeated
// invocations by calling clearInterval(). (Similarly, setTimeout()
// returns a value that you can pass to clearTimeout())

function stopCheckingForUpdates() {
	cleaerInterval(updateIntervalId);
}
