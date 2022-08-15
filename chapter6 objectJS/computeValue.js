function computeValue(portfolio){
	let total = 0.0; 
	for(let stock in portfolio) //For each stock in the portfolio
	{
		let shares = portfolio[stock]; //get the number of shares

		let price = getQuote(stock); // loop up share  price

		total += shares * price; // Return total value 

	}

	return total; //Return total value;
}