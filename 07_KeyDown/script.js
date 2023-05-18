// keydown and keyup event

// keydown
// The keydown event is active when a key is pressed

//keyup
// The keyup event is active when a key is released.


const displayElement = document.getElementById("display");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  displayElement.style.color = "red";
  displayElement.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  displayElement.style.color = "green";
  displayElement.innerText = e.key + " is keyUp";
});