const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let gameIsOver=false
const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    },
]
const gameOver = document.getElementById("game-over")
const playerConfigOverlay = document.getElementById("config-overlay")
const backDrop = document.getElementById("backdrop")
const formElement = document.querySelector("form")
const errorsOutput = document.getElementById("config-errors")
const startNewGame = document.getElementById("start-game-btn")
const gameArea = document.getElementById("active-game")
const activePlayerName = document.getElementById("active-player-name")

const cancelBtn = document.getElementById("cancel-btn")

const editPlayer1Btn = document.getElementById("edit-player-1-btn")
const editPlayer2Btn = document.getElementById("edit-player-2-btn")
let gameBoard  = document.getElementById("game-board")
const gameFields = document.querySelectorAll("#game-board li")

startNewGame.addEventListener("click", startNewGameFunction)
formElement.addEventListener("submit", savePlayerConfig)
editPlayer1Btn.addEventListener("click", openPlayerConfig)
editPlayer2Btn.addEventListener("click", openPlayerConfig)
cancelBtn.addEventListener("click", closePlayerConfig)
for (const gameField of gameFields) {
    gameField.addEventListener("click", selectGameField)

}