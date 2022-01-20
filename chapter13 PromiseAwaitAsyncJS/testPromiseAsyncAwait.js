const enterNumber = () =>{
	return new Promise((resolve, reject) => {
		//Let's start fromhere
		const userNumber = Number(window.prompt("Enter a number1-6):"));	// ask the user to enter a number
		const randomNumber = Math.floor(Math.random() * 6 + 1);				// Pick a  random number 1 and 6


		if(isNaN(userNumber)) {
			reject(new Error("Wrong input Type")); // if the user entres a value that is not a number, run reject with an error 
		}

		if(userNumber === randomNumber) {
			resolve({
				points: 2, 
				randomNumber,
			});
		}else if(userNumber === randomNumber - 1 ||
					userNumber === randomNumber + 1) {
			resolve({
				points: 1,
				randomNumber
			});
		}else {
			resolve({
				points: 0,
				randomNumber,
			});
		}
	});
};


const continueGame = () => {
	return new Promise((resolve) => {
		if(window.confirm("Do you want to continue?")) {	// ask user 
			resolve(true);
		}else {
			resolve(false);
		}
	})
}

/* const handleGuess = () => {
	enterNumber()		// This returns a PRomise
		.then((result) => {
			alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);		/// When resolve is run, we get the points and the random number 

			//continue?
			continueGame().then((result) => {
				if(result) {
					handleGuess(); // if yes we run handleGuess again

				}else {
					alert("Game ends:(");	// if no we show an alert
				}
			});
		})
		.catch((error) => {
			alert(error);
		});
}; */

const handleGuess = async () => {
	try {
		const result = await enterNumber();		// Instead of the then method, we can get the result directly by just putting await before the promise
		
		alert(`Dice ${result.randomNumber}: you got ${result.points} points`);

		const isContinuing = await continueGame();

		if(isContinuing) {
			handleGuess();
		}else {
			alert("Game ends");
		}
	}catch(error) {	
		alert(error);
	}
};

handleGuess();