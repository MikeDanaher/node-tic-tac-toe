var Winner = {};

Winner.who = function(winsArray, currentPlayer, opponent) {
    var winningPlayer;

    for (var i = 0; i < winsArray.length; i++) {
        var row = winsArray[i];
        if (row[0] === currentPlayer && row[1] === currentPlayer && row[2] === currentPlayer) {
            winningPlayer = currentPlayer;
            break;
        } else if (row[0] === opponent && row[1] === opponent && row[2] === opponent) {
            winningPlayer = opponent;
            break;
        }
    }

    return winningPlayer;

};

Winner.check = function(winsArray, currentPlayer, opponent) {
    var winningPlayer = Winner.who(winsArray, currentPlayer, opponent);

    if (winningPlayer) {
        return true;
    } else {
        return false;
    }
};

module.exports = Winner;
