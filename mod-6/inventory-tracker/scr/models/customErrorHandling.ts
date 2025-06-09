//Takes an order object with properties: productId, quantity, and price.
interface Order {
    productID: number;
    quantity: number;
    price: number;
}

//Create two custom error classes: ValidationError and PaymentError.
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

//Throws a ValidationError if quantity is less than 1.
function validateQuantity(quantity: number) {
    if (quantity < 0) {
        throw new ValidationError("Quantity Must be larger than 0");
    }
}


//Create two custom error classes: ValidationError and PaymentError.
class PaymentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PaymentError";
  }
}

//Throws a PaymentError if price is not a positive number.
function validatePrice(price: number) {
    if (price <= 0) {
        throw new PaymentError("product must have valid price")
    }
}

//Implement a function called handleOrder that catches and logs these custom errors.

let handleOrder: Order = {
    productID: 123
    quantity: 1
    price: 10
};

console.log(handleOrder)