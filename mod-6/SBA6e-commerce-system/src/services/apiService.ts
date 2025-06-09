import { AppError } from './errorHandler';
import { Product } from '/product.ts'; // We'll need the Product class for typing

const BASE_URL = 'https://dummyjson.com';

/**
 * Fetches a single product by its ID from the API.
 * @param id The ID of the product to fetch.
 * @returns A Promise that resolves to a Product object.
 * @throws AppError if the network request fails or the product is not found.
 */
export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      // If the response is not OK (e.g., 404, 500), throw a custom AppError
      if (response.status === 404) {
        throw new AppError(`Product with ID ${id} not found.`, 404);
      } else {
        throw new AppError(`Failed to fetch product data. Status: ${response.status}`, response.status);
      }
    }

    const data = await response.json();

    if (!data.category) {
        throw new AppError(`Product data for ID ${id} is missing 'category'.`, 500);
    }

    // Construct a Product object from the fetched data
    // Ensure the order and types match your Product constructor
    const product = new Product(
      data.id,
      data.title,
      data.description,
      data.price,
      data.discountPercentage,
      data.reviews ? data.reviews[0]?.comment : 'No review available', // dummyjson product 1 has reviews array
      data.category
    );

    return product;

  } catch (error) {
    // Re-throw AppError or wrap other errors in AppError
    if (error instanceof AppError) {
      throw error;
    } else if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        // This handles network errors, e.g., no internet connection
        throw new AppError('Network error: Could not connect to the API.', 503);
    }
    else {
      throw new AppError(`An unexpected error occurred while fetching product ${id}: ${error instanceof Error ? error.message : String(error)}`, 500);
    }
  }
}

/**
 * Fetches multiple products from the API.
 * This is an optional extension, but good for demonstrating more API functionality.
 * @param limit The number of products to fetch (default: 10).
 * @returns A Promise that resolves to an array of Product objects.
 * @throws AppError if the network request fails.
 */
export async function fetchProducts(limit: number = 10): Promise<Product[]> {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);

    if (!response.ok) {
      throw new AppError(`Failed to fetch products list. Status: ${response.status}`, response.status);
    }

    const result = await response.json();
    // dummyjson returns an object with a 'products' array
    if (!result.products || !Array.isArray(result.products)) {
        throw new AppError("Invalid API response format for products list.", 500);
    }

    // Map the raw data to Product objects
    const products: Product[] = result.products.map((data: any) => {
        if (!data.category) {
            // Log or handle missing category for individual products
            console.warn(`Product ID ${data.id} is missing 'category'. Skipping or setting default.`);
            // You might choose to skip this product, use a default category, or throw an error.
            // For now, let's just use a placeholder if category is missing.
            data.category = 'unknown';
        }
        return new Product(
            data.id,
            data.title,
            data.description,
            data.price,
            data.discountPercentage,
            data.reviews && data.reviews.length > 0 ? data.reviews[0].comment : 'No review available',
            data.category
        );
    });

    return products;

  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    } else if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        throw new AppError('Network error: Could not connect to the API.', 503);
    }
    else {
      throw new AppError(`An unexpected error occurred while fetching products: ${error instanceof Error ? error.message : String(error)}`, 500);
    }
  }
}