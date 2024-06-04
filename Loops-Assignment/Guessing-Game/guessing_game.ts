// 2. Guessing Game (Using while loop )
/* Objective: Create a simple number guessing game where the user tries to guess a randomly generated number between 1 and a specified
maximum value using a predefined set of guesses. */

// Set a maximum value
let maximumValue:number = 27;

// Generate a random number
let randomNumber: number = Math.floor(Math.random() * maximumValue) + 1;
console.log(`Random number (for development purposes): ${randomNumber}`);

// Track the guess status 
let isGuessedCorrect: boolean = false;

// Simulate user guesses
let guesses: number[] = [12, 4, 6, 15, 28, 27];

// Iterate over guesses
let index: number = 0;
while (!isGuessedCorrect && index < guesses.length) {
  let currentGuess: number = guesses[index];
  console.log(`Guess #${index + 1}: ${currentGuess}`);

  // 6. Check the user's guess
  if (currentGuess === randomNumber) {
    console.log("Congratulations! You guessed the correct number");
    isGuessedCorrect = true;
  } else if (currentGuess > randomNumber) {
    console.log("You guessed too high...");
  } else {
    console.log("You guessed too low...");
  }
  index++;
}
if (!isGuessedCorrect) {
  console.log(`You didn't guess the correct number: The correct number was: ${randomNumber}`);
}