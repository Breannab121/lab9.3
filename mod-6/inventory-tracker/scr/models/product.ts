//Properties: sku (string), name (string), price (number).
//methods: 
//displayDetails() - a method that returns a formatted string with the product’s details.
class Product {
    sku: string;
    name: string;
    price: number;

constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
}


displayDetails(): string {
return `This ${this.sku} product ${this.name} costs $${this.price}`;
}
}

const product1 = new Product ("0001", "Laptop", 900);
console.log(product1.displayDetails());


//getPriceWithTax() - a method that calculates the final price of the product with tax.
/// Function overloads for calculating squares or summing arrays
function getPriceTax(price: number): number {
    const taxRate = .10;
    const total = price + (price * taxRate);
    return total
}



