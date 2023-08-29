const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const reset = document.querySelector("#reset");
const selectRounds = document.querySelector("#rounds");
const playerOneScoreEl = document.querySelector("#playerOneScore");
const playerTwoScoreEl = document.querySelector("#playerTwoScore");

let playerOneScore = 0;
let platerTwoScore = 0;

selectRounds.addEventListener("select", (e) => {
  console.log(e);
});

reset.addEventListener("click", (e) => {
  playerOneScoreEl.innerText = "0";
  playerTwoScoreEl.innerText = "0";
  playerOneScore = 0;
  platerTwoScore = 0;
});

playerOne.addEventListener("click", () => {});

playerTwo.addEventListener("click", () => {});

const checkScore = () => {
  if (playerOneScore) {
  }
};
