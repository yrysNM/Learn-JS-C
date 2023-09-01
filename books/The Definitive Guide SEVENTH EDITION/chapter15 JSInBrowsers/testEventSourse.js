let ticker = new EventSourse("stockprices.php");
ticker.addEventListener("bid", (event) => {
		displayNewBid(event.data);
});

/* event: bid // sets the type of the event object
data: GOOG // sets the data property
data: 999 // appends a newline and more data
// a blank line marks the end of the event
 */