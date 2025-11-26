const fruits = [
  "apple",
  "Banana",
  "Apple",
  "Cherry",
  "Date",
  "Grape",
  "Kiwi",
  "Mango",
  "Orange",
  "Pineapple",
  "Strawberry",
];

// Get references to the DOM elements
const filterInput = document.getElementById("filterInput");
const fruitList = document.getElementById("fruitList");

// Function to render the list of fruits
function renderFruitList(filteredFruits) {
  // Clear the current list
  fruitList.innerHTML = "";
  // Add filtered fruits to the list
  filteredFruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
}

// Initial render of all fruits
renderFruitList(fruits);

// Add event listener for filtering
filterInput.addEventListener("input", () => {
  const filterValue = filterInput.value.toLowerCase();
  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(filterValue)
  );
  renderFruitList(filteredFruits);
});