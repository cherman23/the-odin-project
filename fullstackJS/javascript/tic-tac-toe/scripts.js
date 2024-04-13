function gameBoard() {
    const cells = [];
}

function Player (token) {
    const playerNumber = token;
    const wins = 0;

    const getWins = () => wins;
    const addWin = () => wins++;

    return { playerNumber, wins, getWins, addWin };
}
