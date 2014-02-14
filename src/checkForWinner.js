var Winner = {};

Winner.who = function(winsArray) {
    var winningPlayer;

    for (var i = 0; i < winsArray.length; i++) {
        var row = winsArray[i];
        if (row[0] === 'x' && row[1] === 'x' && row[2] === 'x') {
            winningPlayer = 'x';
            break;
        } else if (row[0] === 'o' && row[1] === 'o' && row[2] === 'o') {
            winningPlayer = 'o';
            break;
        }
    }

    return winningPlayer;

};

Winner.check = function(winsArray) {
    var winningPlayer = Winner.who(winsArray);

    if (winningPlayer) {
        return true;
    } else {
        return false;
    }
};

module.exports = Winner;
