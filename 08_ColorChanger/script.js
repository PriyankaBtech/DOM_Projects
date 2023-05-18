// hexa. colors are created with combination of 6 value which invoved :-
// #
// 1234567890
// ABCDEF

const clickButton = document.getElementById("button")
const randomColor = () => {
    let hexaValue = "0123456789ABCDEF"
    let hexaSymbol = "#"
    for(let i = 0; i < 6; i ++){
        hexaSymbol = hexaSymbol + hexaValue[Math.floor(Math.random() * 16)]
    }
    return hexaSymbol
}
//console.log(randomColor()) // #7014E5, #87E3A1 etc

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor()
}

clickButton.addEventListener("click", changeRandomColor)
