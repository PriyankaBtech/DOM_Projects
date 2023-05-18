// MouseOut

// MouseOut => This event gets activated when the mouse cursor hovers over an element and only activate when its touch the targeted area.

const displayElement = document.getElementById("display")

// Apply EventListener

displayElement.addEventListener("mouseout", function () {
    alert(
        "Its is Safe Zone"
    );
});