/**
 * Calculates the dollar amount of tax for a product based on its category.
 * @param price The original price of the product.
 * @param category The category of the product (e.g., "groceries").
 * @returns The dollar amount of tax.
 */
export function calculateTax(price: number, category: string): number {
  const STANDARD_TAX_RATE = 0.0475; // 4.75%
  const GROCERY_TAX_RATE = 0.03;    // 3%

  let taxRate: number;

  if (category.toLowerCase() === 'groceries') {
    taxRate = GROCERY_TAX_RATE;
  } else {
    taxRate = STANDARD_TAX_RATE;
  }

  return price * taxRate;
}