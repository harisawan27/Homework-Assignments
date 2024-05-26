// Assignment 2:Manipulating an Array: Rearranging Words
// Objective: Rearrange an array using array methods to form the sentence "I am a student of GIAIC". 

// Initial scrambled array
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

// Rearrange the elements to form the correct sentence
// Desired order: ["I", "am", "a", "student", "of", "GIAIC"]
let correctOrder= [
scrambledArray.pop(), // "I"
scrambledArray.splice(4, 1), // "am"
scrambledArray.splice(4, 1), // "a"
scrambledArray.shift(), // "student"
scrambledArray.shift(), // "of"
scrambledArray.pop() // "GIAIC"
]

// Join the elements into a single string
const result = correctOrder.join(' ');

// Output the result
console.log(result); // "I am a student of GIAIC"
