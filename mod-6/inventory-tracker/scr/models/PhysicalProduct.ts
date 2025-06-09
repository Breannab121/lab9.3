class PhysicalProduct extends Product {
    weight: number;
    //Add a weight property (number) for physical products.
    constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
}
  // Getter that returns the formatted weight as a string
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  displayDetails(): string {
    // Use the getter here instead of formatting manually
    return super.displayDetails() + ` It weighs ${this.formattedWeight}.`;
  }
}


const laptop = new PhysicalProduct ("001", "Laptop", 800, 3.6);
//console.log(laptop.displayDetails());

//Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
const originalPrice = 900;
const finalPrice = getPriceTax(originalPrice);

//console.log(`Price with tax: $${finalPrice.toFixed(2)}`);


 
// elsewhere, this would now work without errors as a read-only property
//console.log("The wight of the laptop is: " + laptop.weight);