const display = document.getElementById("display")
const subtract = document.getElementById("subtract")
const add = document.getElementById("add")
const reset = document.getElementById("reset")

let count = 0

subtract.addEventListener("click", subtractNum)
add.addEventListener("click", addNum)
reset.addEventListener("click", resetNum)
  
function subtractNum(){
  count = count - 1
  display.textContent = count
}

function addNum(){
  count = count + 1
  display.textContent = count
}
function resetNum(){
  count = 0
  display.textContent = count
}