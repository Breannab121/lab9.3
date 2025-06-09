//addition
function add(a: number = 0, b: number = 0): number {
    return a + b;
}

//subtraciton
function sub(a: number = 0, b: number = 0): number {
    return a - b;
}

// Division function with zero handling
function divide(a: number, b: number = 1): number | null {
  return b === 0 ? null : a / b;
}

//multiplication
function multiplication(a: number, b: number): number {
    return a * b;
}

// Function overloads for calculating squares or summing arrays
function calculate(value: number): number;
function calculate(values: number[]): number;
 
function calculate(input: number | number[]): number {
  if (typeof input === "number") {
    return input ** 2;
  } else {
    return input.reduce((acc, val) => acc + val, 0);
  }
}