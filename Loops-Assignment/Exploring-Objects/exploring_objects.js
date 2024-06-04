// 4.Exploring Objects with for...in Loop
/* Objective: Practice working with objects in TypeScript and iterating over their properties using
a for...in loop. */
// Create a simple object with three items
var myObject = {
    item1: 'Book',
    item2: 'Bag',
    item3: 'Pen'
};
// Use a for...in loop to get properties' names and values from the object
for (var property in myObject) {
    console.log("".concat(property, " : ").concat(myObject[property]));
}
;
