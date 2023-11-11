function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backDrop.style.display = "block";
}
function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backDrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutput.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutput.textContent = "please enter valid name!";
    return;
  }
  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;
  if (editedPlayer === 1) {
    players[0].name = enteredPlayerName;
  } else {
    players[1].name = enteredPlayerName;
  }
  closePlayerConfig();
}
