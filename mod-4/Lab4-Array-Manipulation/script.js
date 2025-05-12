let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let itemList = document.getElementById("itemList");

let items = [];

function renderList() {
  itemList.innerHTML = ""; // Clear the list
  items.forEach((itemText) => {
    let listItem = document.createElement("li");
    listItem.innerText = itemText;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);

    itemList.appendChild(listItem);
  });
}

addItemButton.addEventListener("click", function () {
  let itemText = itemInput.value.trim();

  if (itemText === "") {
    alert("Please enter a task!");
    return;
  }

  // Add item to array using push()
  items.push(itemText);

  renderList(); // Update the DOM
  itemInput.value = "";
});

// Remove task from array and DOM when list item is clicked
itemList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const text = event.target.childNodes[0].nodeValue.trim();
    items = items.filter((item) => item !== text); // Remove from array
    renderList(); // Re-render
  }

  if (event.target.tagName === "INPUT") {
    event.target.parentNode.classList.toggle("completed");
  }
});

// Optional: Add pop and shift buttons
const popButton = document.createElement("button");
popButton.innerText = "Remove Last Task";
document.body.appendChild(popButton);

popButton.addEventListener("click", () => {
  items.pop(); // Remove last item
  renderList();
});

const shiftButton = document.createElement("button");
shiftButton.innerText = "Remove First Task";
document.body.appendChild(shiftButton);

shiftButton.addEventListener("click", () => {
  items.shift(); // Remove first item
  renderList();
});