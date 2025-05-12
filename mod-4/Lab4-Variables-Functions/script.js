let firstName = ('Breanna');
let lastName = ('Bennett');
let age = 18;
let employed= false;
let unemployed = true;

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
    let subtotal = price * quantity;

    if (discount > 0) {
        subtotal -= discount;
    }

    let total = subtotal * (1 + taxRate);
    console.log(`The total cost is ${total.toFixed(2)}.`);
}

// Example with discount
calculateTotalCost(10, 2, 0.07, 5);  // Applies $5 discount

// Example without discount
calculateTotalCost(10, 2, 0.07);     // No discount



if(firstName && lastName) {
    console.log(`Hello ${firstName + " " + lastName}!`)
} else if (firstName || lastName) {
    console.log('Invalid name input.'); 
} else {
    console.log('Invalid name input.')
};

if(age >= 18 && employed) {
    console.log(`You are eligible for the program`)
} else if (age >= 18 && unemployed) {
    console.log(`You are conditionally eligible`)
} else if (age < 18) {
    console.log(`You are not eligible`)
} else {
    console.log(`enter your age and employement`)
}


