// Assignment 1: Building Your Friend List
// Task: Create a program that manages a simple friend list.
// Define an object named people containing an empty array called friends. 
var people = {
    friends: []
};
// Create three separate objects
var friend1 = {
    firstName: "Haris",
    lastName: "Awan",
    id: 1527
};
var friend2 = {
    firstName: "Adeel",
    lastName: "Ahmed",
};
var friend3 = {
    firstName: "Abuzar",
    lastName: "Jutt",
    id: 2828
};
// Add these friend objects to the friends array within the people object. 
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
// Output the entire people object
console.log(people.friends);
