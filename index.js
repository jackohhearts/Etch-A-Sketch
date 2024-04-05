const container = document.getElementById("container")
const button = document.getElementById("gridSize-btn")
const buttonclear = document.getElementById("clear-btn")
let size = "16"


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


    function canvas(xAxis=size,yAxis=size) {
        
        
        for (let i = 0; i < yAxis; i++) {
            let gridRow = document.createElement("div");
            gridRow.classList.add("grid-row");
            for (let k = 0; k < xAxis; k++) {
                let gridCell = document.createElement("div");
                gridCell.classList.add("grid-cell");
                gridRow.addEventListener('mouseover', changeColor)
        gridRow.addEventListener('mousedown', changeColor)
        gridCell.addEventListener('mouseover', changeColor)
        gridCell.addEventListener('mousedown', changeColor)
                gridRow.appendChild(gridCell);
                
            }
            container.appendChild(gridRow);
            
            
        }
        
    }

    function checkSize(e) {
        deleteGridElements()
        if (e > 100) {
            alert("That's Too Large! Please Select A Value Less Than 100")
            canvas(xAxis=16,yAxis=16)

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
        const allGridRow = document.querySelectorAll(".grid-row");
        const allGridCell = document.querySelectorAll(".grid-cell");
        allGridRow.forEach((allGridRow)=>{
            allGridRow.remove();
        })
        allGridCell.forEach((allGridCell)=>{
            allGridCell.remove();
        })
    }

 canvas()
    