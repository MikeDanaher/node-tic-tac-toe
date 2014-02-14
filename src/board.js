var board = {
    size: 9,
    winOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 4, 7, 2, 5, 8, 3, 6, 9, 1, 5, 9, 3, 5, 7]
};

board.reset = function() {
    for (var i = 1; i <= board.size; i++) {
        board[i] = ' ';
    }
};

board.getHorizontalRows = function() {
    var horizontalRows = [];
    var row = [];

    for (var i = 1; i <= board.size; i++) {
        row.push(board[i]);
        if (row.length === 3) {
            horizontalRows.push(row);
            row = [];
        }
    }

    return horizontalRows;
};

board.getPossibleWins = function() {
    var possibleWins = [];
    var win = [];

    for (var j = 0; j < board.winOrder.length; j++) {
        win.push(board[board.winOrder[j]]);
        if (win.length === 3) {
            possibleWins.push(win);
            win = [];
        }
    }

    return possibleWins;
};

board.getOpenCells = function() {
    var openCells = [];

    for (var i in board) {
        if (board.hasOwnProperty(i)) {
            if (board[i] !== 'x' && board[i] !== 'o') {
                openCells.push(i);
            }
        }
    }

    return openCells;
};

board.update = function(cell, symbol) {
    board[cell] = symbol;
};

module.exports = board;
