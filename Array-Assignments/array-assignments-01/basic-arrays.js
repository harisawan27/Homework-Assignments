"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Create an array 
const products = [
    {
        name: 'Shirts',
        price: 1000,
        inventory: {
            stock: 130,
            colorOptions: ['Green', 'Black', 'Red'],
        },
    },
    {
        name: 'Shoes',
        price: 600,
        inventory: {
            stock: 50,
            colorOptions: ['Black', 'Blue', 'White'],
        },
    },
    {
        name: 'Caps',
        price: 150,
        inventory: {
            stock: 70,
            colorOptions: ['Red', 'Blue', 'Yellow'],
        },
    },
];
// 3. Implement a function named changeColor 
function changeColor(product, newColor) {
    if (product.inventory.colorOptions.includes(newColor)) {
        switch (newColor.toLowerCase()) {
            case 'red':
                product.price *= 1.10; // Increase price by 10%
                break;
            case 'blue':
                product.price *= 0.95; // Decrease price by 5%
                break;
            default:
                // No price change for other colors
                break;
        }
        console.log(`The color of the ${product.name} has been changed to ${newColor}. New price: $${product.price}`);
    }
    else {
        console.log(`Color ${newColor} is not available for the ${product.name}.`);
    }
}
// 4. Display each product's name, price, stock, and available colors
function displayProducts(products) {
    products.forEach(product => {
        console.log(`Product: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Stock: ${product.inventory.stock}`);
        console.log(`Available Colors: ${product.inventory.colorOptions}`);
        console.log('---');
    });
}
// Display all products
displayProducts(products);
// Change color of a specific product
changeColor(products[0], 'Red'); // Change color of Shirts to Red
changeColor(products[1], 'Blue'); // Change color of Shoes to Blue
// Display all products after changes
displayProducts(products);
