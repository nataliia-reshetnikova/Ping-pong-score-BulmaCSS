const playerOneBtn = document.querySelector("#playerOne");
const playerTwoBtn = document.querySelector("#playerTwo");
const reset = document.querySelector("#reset");
const selectRounds = document.querySelector("#rounds");
const playerOneScoreEl = document.querySelector("#playerOneScore");
const playerTwoScoreEl = document.querySelector("#playerTwoScore");

//set initial score
let playerOneScore = 0;
let playerTwoScore = 0;
let winScore = parseInt(selectRounds.value);

selectRounds.addEventListener("change", (e) => {
  winScore = parseInt(e.target.value);
});

//select input value will reset automatically
reset.addEventListener("click", () => {
  playerOneScoreEl.innerText = "0";
  playerTwoScoreEl.innerText = "0";
  playerOneScoreEl.classList.remove("has-text-success");
  playerTwoScoreEl.classList.remove("has-text-success");
  playerOneScore = 0;
  playerTwoScore = 0;
  selectRounds.removeAttribute("disabled");
  playerOneBtn.removeAttribute("disabled");
  playerTwoBtn.removeAttribute("disabled");
});

playerOneBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scorePlayer(1);
});

playerTwoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scorePlayer(2);
});

function scorePlayer(player) {
  selectRounds.setAttribute("disabled", "");
  winScore = parseInt(selectRounds.value);
  if (player === 1) {
    playerOneScore++;
    playerOneScoreEl.innerText = playerOneScore;
    if (playerOneScore === winScore) {
      playerOneScoreEl.classList.add("has-text-success");
      playerOneBtn.setAttribute("disabled", "");
      playerTwoBtn.setAttribute("disabled", "");
    }
  } else if (player === 2) {
    playerTwoScore++;
    playerTwoScoreEl.innerText = playerTwoScore;
    if (playerTwoScore === winScore) {
      playerTwoScoreEl.classList.add("has-text-success");
      playerOneBtn.setAttribute("disabled", "");
      playerTwoBtn.setAttribute("disabled", "");
    }
  }
}
