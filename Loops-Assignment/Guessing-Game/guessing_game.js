// 2. Guessing Game (Using while loop )
/* Objective: Create a simple number guessing game where the user tries to guess a randomly generated number between 1 and a specified
maximum value using a predefined set of guesses. */
// Set a maximum value
var maximumValue = 27;
// Generate a random number
var randomNumber = Math.floor(Math.random() * maximumValue) + 1;
console.log("Random number (for development purposes): ".concat(randomNumber));
// Track the guess status 
var isGuessedCorrect = false;
// Simulate user guesses
var guesses = [12, 4, 6, 15, 28, 27];
// Iterate over guesses
var index = 0;
while (!isGuessedCorrect && index < guesses.length) {
    var currentGuess = guesses[index];
    console.log("Guess #".concat(index + 1, ": ").concat(currentGuess));
    // 6. Check the user's guess
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number");
        isGuessedCorrect = true;
    }
    else if (currentGuess > randomNumber) {
        console.log("You guessed too high...");
    }
    else {
        console.log("You guessed too low...");
    }
    index++;
}
if (!isGuessedCorrect) {
    console.log("You didn't guess the correct number: The correct number was: ".concat(randomNumber));
}
