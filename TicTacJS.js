let boxes= document.querySelectorAll(".box");
let resetButton= document.querySelector("#reset");
let newButton= document.querySelector(".new");
let winDiv= document.querySelector(".winDiv");
let winMsg= document.querySelector("#winMsg");


let playerO=true; // playerO playerX

const winPatterns=[               // 2D Array of WinPatterns.
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

boxes.forEach((box)=>{
    box.addEventListener(("click"),() =>{
        if(playerO){
            box.innerText = "O";  //playerO
            playerO = false ; 
        }
        else{
            box.innerText = "X";  // playerX
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const disableBoxes = () => {                     // DisableBoxes Function
    for (let box of boxes) {
      box.disabled = true;
    }
  };
const showWinner=(winner)=>{                  // ShowWinner Function
    winMsg.innerText = `Congratulations, Winner is ${winner}`;
    winDiv.classList.remove("hide");
    newButton.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{                             // CheckWinner Function
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
const resetGame=()=>{               // ResetGame Function
    disableBoxes();
    playerO = true;
    enableBoxes();
    winDiv.classList.add("hide");
    newButton.classList.add("hide");
};

newButton.addEventListener("click",resetGame);             
resetButton.addEventListener("click",resetGame);         

 