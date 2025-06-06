/*Define a Product class that includes the appropriate
properties based on data provided in the API response.*/

export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  review: string;
  category: string; // Add the category property

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    review: string,
    category: string // Add category to the constructor
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.review = review;
    this.category = category; // Initialize category
  }

  // Include methods displayDetails() and getPriceWithDiscount()
  displayDetails(): void {
    console.log(`Id: ${this.id}`);
    console.log(`Title: ${this.title}`); // Corrected 'Name' to 'Title' for consistency
    console.log(`Description: ${this.description}`);
    console.log(`Price: $${this.price.toFixed(2)}`); // Format price to 2 decimal places
    console.log(`Discount Percentage: ${this.discountPercentage}%`); // Added '%' for clarity
    console.log(`Review: ${this.review}`);
    console.log(`Category: ${this.category}`); // Display category
  }

  // This method calculates the price AFTER the discount has been applied
  getPriceWithDiscount(discountRate: number): number {
    return this.price * (1 - discountRate);
  }
}