const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetBtn = document.getElementById('reset');


let turnO = true;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]           // diagonals
];
const resetButton = () => {
  turnO = true;
  statusText.innerText = "";
  enabledBtn();

}

let disabledBtn = () => {
  for (cell of cells) {
    cell.disabled = true;
  }
}
let enabledBtn = () => {
  for (cell of cells) {
    cell.disabled = false;
    cell.innerText = ""
  }
}
let showinner = (winner) => {
  statusText.innerText = `Winner ${winner}`
  disabledBtn();

}
cells.forEach((cell) => {
  cell.addEventListener("click", () => {

    if (turnO) {
      cell.innerText = "O"
      cell.style = "color:red;"
      turnO = false;
    } else {
      cell.innerText = "X"
      cell.style = "color:yellow;"
      turnO = true;
    }
    cell.disabled = true;
    checkWinner();
  })
});
const checkWinner = () => {
  for (let winning of winningCombinations) {
    let pos1Val = cells[winning[0]].innerText;
    let pos2Val = cells[winning[1]].innerText;
    let pos3Val = cells[winning[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showinner(pos1Val);
      }
    }
  }

};
resetBtn.addEventListener("click", resetButton);

let btnblack1 = document.querySelector(".btnblack")
let btnwhite2 = document.querySelector(".btnwhite")


let btn = document.querySelector("#btn")
let body = document.querySelector("body")
let togglebtn = "light";
btn.addEventListener("click", () => {
  if (togglebtn === "light") {

    togglebtn = "dark";
    body.classList.add("dark")
    body.classList.remove("white")
    statusText.style = "color:white;"
   body.classList.add(" btnblack")
   body.classList.remove(" btnwhite")
    // btn.innerText = "light mode"
  } else {

    togglebtn = "light";
     body.classList.add("white")
   body.classList.remove("dark")
    statusText.style = "color:black;"
    body.classList.add("btnwhite ")
    body.classList.remove(" btnblack")
    //  btn.innerText = "dark mode"
  }
  console.log(togglebtn)

});
