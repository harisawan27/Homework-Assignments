// Assignment 3: Company Product Catalo
// Task: Create a program to represent a product catalog using an array and perform basic queries.

//Define an array named inventory to store product information.
const inventory: {
    name:string;
    model:string;
    cost:number;
    quantity:number;
}[] = []

// Create three separate objects
let product1 = {
    name: 'airpod',
    model: 'Apple Airpods Pro 2nd Generation',
    cost: 73000,
    quantity:4
}

let product2 = {
    name: 'mobile',
    model: 'Iphone 15 Pro Max',
    cost: 502500,
    quantity:5
}

let product3 = {
    name: 'smartwatch',
    model: 'Apple Watch Series 9',
    cost: 107999,
    quantity:9
}

// Add these product objects to the inventory array 
inventory.push(product1,product2,product3);

// Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log(`The quantity of '${inventory[2].model}' is ${inventory[2].quantity}.`);

// Explore adding and accessing more elements within the inventory array
let product4 = {
    name: 'laptop',
    model: 'Apple MacBook Pro 13 Inches Core i5',
    cost: 265999,
    quantity:27
}

inventory.push(product4);
    
console.log(`The price of '${inventory[0].model}' is PKR.${inventory[0].cost}.`);
console.log(`The model of ${inventory[1].name} is '${inventory[1].model}' and its quantity is ${inventory[1].quantity}.`);
console.log(`The model of ${inventory[3].name} is '${inventory[3].model}' and its price is PKR.${inventory[3].cost}.`);