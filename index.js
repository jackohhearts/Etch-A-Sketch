const container = document.getElementById("container")


let mouseDown = false;
document.body.onmouseover = function() {
  mouseDown = true;
};
document.body.onmouseup = function() {
  mouseDown = false;
};

for(i = 0; i <= 256; i++){
const cell = document.createElement("div")
cell.addEventListener('mouseover', changeColor)
cell.addEventListener('mousedown', changeColor)
document.getElementById("container").appendChild(cell)
container.appendChild(cell).className = 'grid-items'
}


function changeColor(e) {
    if (mouseDown) {
    e.target.style.backgroundColor = "black"
    }
}