import { Product } from './product'; 
import { fetchProductById } from './apiService';
import { calculateDiscount } from './discountCalculator';
import { calculateTax } from './taxCalculator';
import { handleError } from './errorHandler';

/**
 * Main function to demonstrate fetching product data, calculations, and error handling.
 */
async function main() {
  console.log("--- Starting Product Application ---");

  // --- Demonstrating fetching a single product ---
  const productIdToFetch = 1;
  console.log(`\nFetching product with ID: ${productIdToFetch}...`);

  try {
    const product: Product = await fetchProductById(productIdToFetch);
    console.log("\n--- Product Details ---");
    product.displayDetails();

    // Demonstrate discount calculation
    const discountAmount = calculateDiscount(product.price, product.discountPercentage);
    console.log(`\nCalculated Discount Amount: $${discountAmount.toFixed(2)}`);

    // Demonstrate tax calculation
    const taxAmount = calculateTax(product.price - discountAmount, product.category); // Tax on discounted price
    console.log(`Calculated Tax Amount (on discounted price): $${taxAmount.toFixed(2)}`);

    const finalPrice = (product.price - discountAmount + taxAmount);
    console.log(`Final Price (after discount and tax): $${finalPrice.toFixed(2)}`);


  } catch (error) {
    console.error(`\nFailed to process product ID ${productIdToFetch}:`);
    handleError(error); // Use our custom error handler
  }

  // --- Demonstrating error handling for a non-existent product ---
  const nonExistentProductId = 9999;
  console.log(`\nAttempting to fetch non-existent product with ID: ${nonExistentProductId}...`);
  try {
    await fetchProductById(nonExistentProductId);
    // This line should ideally not be reached if the ID is truly non-existent
    console.log(`\nUnexpected: Product ID ${nonExistentProductId} was found.`);
  } catch (error) {
    console.error(`\nExpected error for product ID ${nonExistentProductId}:`);
    handleError(error);
  }

    
    console.log(`\nAttempting to fetch product ID ${nonExistentProductId} to simulate network error...`);
    try {
        
        const productWithNetworkIssue = await fetchProductById(nonExistentProductId);
        console.log(`Successfully fetched product ${productWithNetworkIssue.id} (network error not simulated).`);
    } catch (error) {
        console.error(`\nSimulated network error caught for product ID ${nonExistentProductId}:`);
        handleError(error);
    }


  console.log("\n--- Application Finished ---");
}

// Call the main function to start the application
main();