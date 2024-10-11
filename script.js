document.getElementById("start-game").addEventListener("click", startGame);

function startGame() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = ""; // Clear the board
    // Here you can add logic to generate cards, shuffle them, etc.
}
