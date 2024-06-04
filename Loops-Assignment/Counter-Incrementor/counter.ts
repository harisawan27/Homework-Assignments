// 3. Counter Incrementer (Using do while loop )
/* Objective: Create a program that increments a counter by a specified step value using a
do...while loop and prints the counter value to the console until it reaches or exceeds
100. */

// Set the starting counter to 0
let counter:number = 0;

// Create a variable "step" to increase your counter by
let step:number = 4;

// Add a do...while loop
do {
    console.log(`Counter: ${counter}`);
    counter += step;
} while (counter < 100);