window.onload = function () {
  let boxes = document.querySelectorAll(".box");
  let resetBtn = document.querySelector("#reset-btn");
  let msgContainer = document.querySelector(".msg-container");
  let msg = document.querySelector("#msg");
  let newGame = document.querySelector("#new-btn");

  let turnO = true;

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
  };

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("Hey I'm Kuni funni");
      if (turnO) {
        box.innerHTML = "O";
        turnO = false;
      } else {
        box.innerHTML = "X";
        turnO = true;
      }
      box.disabled = true;

      checkWinner();
    });
  });

  const disabledBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enabledBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerHTML = "";
    }
  };

  const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
  };

  const checkWinner = () => {
    for (let patterns of winPatterns) {
      let posVal1 = boxes[patterns[0]].innerHTML;
      let posVal2 = boxes[patterns[1]].innerHTML;
      let posVal3 = boxes[patterns[2]].innerHTML;

      if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
        if (posVal1 === posVal2 && posVal2 === posVal3) {
          console.log("Winner");
          showWinner(posVal1);
        }
      }
    }
  };

  newGame.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);
};
