/**
 * Custom error class for application-specific errors.
 */
export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    // This line is important for proper stack traces in TypeScript
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

/**
 * Handles and logs different types of errors.
 * @param error The error object to handle.
 */
export function handleError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(`Application Error (${error.statusCode}): ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`General Error: ${error.message}`);
    console.error(error.stack); // Log stack trace for general errors
  } else {
    console.error('An unknown error occurred:', error);
  }
}