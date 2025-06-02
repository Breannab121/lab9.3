export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};


export const fetchProductReviews = (): Promise<{productId: number; review: string }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 1) {
        resolve([
            { productId: 1, review: "Great product" },
            { productId: 2, review: "Oh no! I had to send this back. Not for me" },
        ]);
        } else {
        reject("Failed to fetch reviews for product ID ${productId}");
        }
    }, 1500);
    });
};

export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 1) {
        resolve([
            { totalSales: 1, unitsSold: 2, averagePrice: 1200 },
            { totalSales: 3, unitsSold: 3, averagePrice: 900 },
        ]);
        } else {
        reject("Failed to fetch sales report");
        }
    }, 1000);
    });
};