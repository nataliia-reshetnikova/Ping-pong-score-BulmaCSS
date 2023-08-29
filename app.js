const p1 = {
  button: document.querySelector("#playerOne"),
  display: document.querySelector("#playerOneScore"),
  score: 0
};

const p2 = {
  button: document.querySelector("#playerTwo"),
  display: document.querySelector("#playerTwoScore"),
  score: 0
};

const reset = document.querySelector("#reset");
const selectRounds = document.querySelector("#rounds");
let winScore = parseInt(selectRounds.value);

selectRounds.addEventListener("change", () => {
  winScore = parseInt(this.value);
});

//select input value will reset automatically
reset.addEventListener("click", () => {
  for (p of [p1, p2]) {
    p.display.innerText = "0";
    p.display.classList.remove(...p.display.classList);
    p.button.disabled = false;
    p.score = 0;
  }
  selectRounds.removeAttribute("disabled");
});

p1.button.addEventListener("click", (e) => {
  e.preventDefault();
  scorePlayers(p1, p2);
});

p2.button.addEventListener("click", (e) => {
  e.preventDefault();
  scorePlayers(p2, p1);
});

function scorePlayers(player, opponent) {
  selectRounds.setAttribute("disabled", "");
  winScore = parseInt(selectRounds.value);
  player.score++;
  player.display.innerText = player.score;
  if (player.score === winScore) {
    player.display.classList.add("has-text-success");
    opponent.display.classList.add("has-text-danger");
    player.button.disabled = true;
    opponent.button.disabled = true;
  }
}
