let game = createGame()
let gameSquares = document.getElementsByClassName("game-square");
let newGameButton = document.getElementsByClassName("new-game-btn")[0];

function gameBoard () {
    let cells = new Array(9).fill(null);

    let pTurn = (choice, token) => cells[choice] = token;

    return { cells, pTurn };
}

function checkWin(cells) {
    const winCond = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]        
    ];

    for (i = 0; i < winCond.length; i++) {
        let a = winCond[i][0];
        let b = winCond[i][1];
        let c = winCond[i][2];
        if ((cells[a] === cells[b]) && (cells[a] === cells[c])) {
            if (typeof cells[a] === 'number') {
                return true;
            }
        }
    }
    return false;
}

function Player (token, symbol) {
    const playerNumber = token;
    const playerSymbol = symbol;
    let wins = 0;
    const getWins = () => wins;
    const addWin = () => wins++;

    return { playerNumber, playerSymbol, wins, getWins, addWin };
}

function createGame() {
    let board = gameBoard();
    let playerOne = Player(1, "X");
    let playerTwo = Player(2, "O");
    let currPlayer = playerOne;
    function nextPlayer() {
        if (game.currPlayer.playerNumber == 1) {
            game.currPlayer = game.playerTwo;
        }
        else if (game.currPlayer.playerNumber == 2) {
            game.currPlayer = game.playerOne;
        }
    }
    return { board, playerOne, playerTwo, currPlayer, nextPlayer };
}

function newGame() {
    game.board.cells = new Array(9).fill(null);
    for (i = 0; i < gameSquares.length; i++) {
        gameSquares[i].textContent = "";
    }
}

function makeClickable(cell, idx) {
    cell.addEventListener("click", () => {
        if (game.board.cells[idx] === null){
            game.board.cells[idx] = game.currPlayer.playerNumber;
            cell.textContent = game.currPlayer.playerSymbol;
            if (checkWin(game.board.cells)) {
                alert(`Player ${game.currPlayer.playerNumber} won!`)
                newGame();
            }
            else {
                game.nextPlayer();
            }
        }
    });
}

newGameButton.addEventListener("click", () => {
    newGame();
})

function updateDOM() {
    for (i = 0; i < gameSquares.length; i++){
        makeClickable(gameSquares[i], i);
    }
}
updateDOM();