const container = document.getElementById("container")
const button = document.getElementById("gridSize-btn")
const buttonclear = document.getElementById("clear-btn")
let size = ""


    let mouseDown = false
    document.body.onmouseover = function() {
    mouseDown = true
    }

    document.body.onmouseup = function() {
    mouseDown = false
    }

    buttonclear.addEventListener("click", function() {
        const cellReset = document.querySelectorAll(".grid-items")
        cellReset.forEach(cell => cell.style.backgroundColor = "")
        cellReset.forEach(cell => cell.classList.remove("hover-change"))
        
    })    

    button.addEventListener("click", function() {
        size = prompt("What size would you like your grid to be?")
        checkSize(size)
    }
    )

    function canvas(size) {
        container.style.setProperty('--grid-column', size);
        container.style.setProperty('--grid-row', size);

    for(i = 0; i < size * size; i++){
        const cell = document.createElement("div")
        cell.addEventListener('mouseover', changeColor)
        cell.addEventListener('mousedown', changeColor)
      
        container.appendChild(cell).className = 'grid-items'
    }
}

    function checkSize(e) {
        deleteGridElements()
        if (e > 100) {
            alert("That's Too Large! Please Select A Value Less Than 100")
            canvas(16)

        } else {
            canvas(e)
        }
    }


    function changeColor(e) {
        if (mouseDown) {
        e.target.style.backgroundColor = "black"
        }
    }

    function deleteGridElements(){
        const allGrid = document.querySelectorAll(".grid-items");
        allGrid.forEach((allGrid)=>{
            allGrid.remove();
        })
    }

 canvas(16)
    