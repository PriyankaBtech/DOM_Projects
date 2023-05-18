// KeyPress

//KeyPress => When you active/press on keypress, its produce a character value in alphabetic, numeric, and punctuation form.

const displayElement = document.getElementById("display")
const inputButton = document.getElementById("input")

// Apply EventListener

inputButton.addEventListener('keypress', function(e){
    displayElement.innerText ="Enter the Character  " + e.key
})