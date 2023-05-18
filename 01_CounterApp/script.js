
// title
const mainTitle = document.getElementByClassName("titleValue")

// button
const addButton = document.getElementById("increment");
const subractButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let currentValue = 0

// for increment button click
addButton.addEventListener('click', () => {
  currentValue = currentValue + 1;
  mainTitle.innerText = currentValue;
})  

// for decrement button click
subractButton.addEventListener('click', () => {
  currentValue = currentValue - 1;
  mainTitle.innerText = currentValue;
})

// for reset button click
resetButton.addEventListener('click', () => {
  currentValue = 0;
  mainTitle.innerText = currentValue;
})



