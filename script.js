//your code here
// Generate a random number between 1 and 100
		const secretNumber = Math.floor(Math.random() * 100) + 1;

		// Keep track of the previous guess
		let prevGuess = null;

		function checkGuess() {
			// Get the user's guess
			const guess = parseInt(document.getElementById("guess").value);

			// Make sure the guess is valid
			if (isNaN(guess) || guess < 1 || guess > 100) {
				document.getElementById("response").textContent = "Please enter a number between 1 and 100.";
				return;
			}

			// Calculate the difference between the guess and the secret number
			const diff = Math.abs(guess - secretNumber);

			// Check if the guess is correct
			if (guess === secretNumber) {
				document.getElementById("response").textContent = "Congratulations, you guessed the number!";
				return;
			}

			// Check if this is the first guess
			if (prevGuess === null) {
				prevGuess = guess;
				document.getElementById("response").textContent = (guess < secretNumber) ? "Guess higher." : "Guess lower.";
				return;
			}

			// Calculate the difference between this guess and the secret number
			const newDiff = Math.abs(guess - secretNumber);

			// Check if the guess is getting hotter or colder
			if (newDiff < diff) {
				document.getElementById("response").textContent = "Getting hotter! " + ((guess < prevGuess) ? "Guess higher." : "Guess lower.");
			} else {
				document.getElementById("response").textContent = "Getting colder. " + ((guess < secretNumber) ? "Guess higher." : "Guess lower.");
			}

			// Update the previous guess
			prevGuess = guess;
		}
