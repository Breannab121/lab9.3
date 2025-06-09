
function calculatorTotalCost(price, percentage) {
    let discount = (price * percentage) / 100;
    let totalCost = price - discount;
    return totalCost
}

console.log(calculatorTotalCost(100, 20));