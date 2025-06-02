import {
    fetchProductCatalog, fetchProductReviews, fetchSalesReport
} from "./apiSimulator"

async function runFetchReport (){
    try {
        const products = await fetchProductCatalog()
        console.log(products)
    } catch (error) {
        console.log(error)
    }
}

runFetchReport()