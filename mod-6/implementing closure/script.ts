function createMultiplier(multiplier: number): (value: number) => number {
  return function(value: number): number {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10



function applyDiscount(discountRate: number): (price: number) => number {
  return function(price: number): number {
    return price - (price * discountRate);
  };
}


const tenPercentDiscount = applyDiscount(0.10);
console.log(tenPercentDiscount(100)); // Output: 90

