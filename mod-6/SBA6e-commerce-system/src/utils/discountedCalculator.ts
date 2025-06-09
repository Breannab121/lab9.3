/**
 * Calculates the dollar amount of the discount for a product.
 * @param price The original price of the product.
 * @param discountPercentage The discount percentage (e.g., 10 for 10%).
 * @returns The dollar amount of the discount.
 */
export function calculateDiscount(price: number, discountPercentage: number): number {
  // Convert percentage to a decimal (e.g., 10% becomes 0.10)
  const discountRate = discountPercentage / 100;
  return price * discountRate;
}