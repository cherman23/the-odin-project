let gameSquares = document.getElementsByClassName("game-square");

function gameBoard () {
    const cells = new Array(9).fill(null);

    const pTurn = (choice, token) => cells[choice] = token;

    const checkWin = () => {
        for (i = 0; i < 3; i++) {
            if (typeof cells[i] === "number") {  
                if ((cells[i] === cells[i+1]) && (cells[i+1] === cells[i+2])) {
                    return true;
                }
                if ((cells[i] === cells[i+3]) && (cells[i+3] === cells[i+6])){
                    return true;
                }
            }
        }
        return false;
    }

    return { cells, pTurn, checkWin };
}

function Player (token) {
    const playerNumber = token;
    const wins = 0;

    const getWins = () => wins;
    const addWin = () => wins++;

    return { playerNumber, wins, getWins, addWin };
}

function playGame() {
    const newGame = gameBoard();
    const playerOne = Player(0);
    const playerTwo = Player(1);
    let currPlayer = playerOne;
    let nextPlayer = () => {
        if (currPlayer === playerOne){
            return playerTwo;
        }
        else {
            return playerOne;
        }
    }

    while (newGame.checkWin() === false){
        pChoice = currChoice;

        newGame.pTurn(pChoice, currPlayer.playerNumber);
        currPlayer = nextPlayer();
    }
}
