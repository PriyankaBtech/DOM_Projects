// Mouseover

// mouseove => This event gets activated when the mouse cursor hovers over an element and its surrounding

const displayElement = document.getElementById("display");

// Apply EventListener
displayElement.addEventListener("mouseover", function () {
  alert(
    "You Entered in Restricted Area"
  );
});