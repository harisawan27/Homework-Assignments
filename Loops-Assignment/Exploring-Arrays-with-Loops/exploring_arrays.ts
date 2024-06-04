// 5.Exploring Arrays with Loops(Using loop )
/* Objective: Practice working with arrays in TypeScript and using for loops and for...of
loops to iterate through array elements. */

// Create an empty array
let myArray:string[] = []

// Run a loop 10 times, adding a new incrementing value to the array
for (let i=1; i<=10; i++){
    myArray.push(`Value-${i}`)
}

// Log the array into the console with the specified format using a for loop
console.log('INDEX          VALUE');
for (let i = 0; i < myArray.length; i++) {
    console.log(`   ${i}          ${myArray[i]}`);
}

// Use the for...of loop to output the value into the console from the array
for (let value of myArray) {
    console.log(value);
}
