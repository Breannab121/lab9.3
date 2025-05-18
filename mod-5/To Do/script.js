const productList = document.getElementById('taskList');
const addProductButton = document.getElementById('addTaskButton');

productList.addEventListener('click', (event) => {
if (event.target.classList.contains('add-to-cart')) {
const productId = event.target.closest('li').dataset.id;

console.log(`Added product ${productId} to cart.`);
}
});

// Dynamically add a new product
addProductButton.addEventListener('click', () => {
const newProduct = document.createElement('li');

newProduct.dataset.id = '3';
newProduct.innerHTML = 'Product 3 <button class="add-to-cart">Add to Cart</button>';

productList.appendChild(newProduct);
});

const list = document.getElementById('list');

list.addEventListener('click', (event) => {
if (event.target.classList.contains('remove')) {
const item = event.target.closest('li');
item.remove(); // Efficient removal
}
});