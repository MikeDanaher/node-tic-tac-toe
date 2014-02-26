function Board() {
    this.size = 9;
    this.winOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 4, 7, 2, 5, 8, 3, 6, 9, 1, 5, 9, 3, 5, 7];
}

// Create an empty board using 1 - 9 for cell indexes and filling each cell with a space
Board.prototype.reset = function() {
    for (var i = 1; i <= this.size; i++) {
        this[i] = ' ';
    }
};

Board.prototype.getHorizontalRows = function() {
    var horizontalRows = [];
    var row = [];

    for (var i = 1; i <= this.size; i++) {
        row.push(this[i]);
        if (row.length === 3) {
            horizontalRows.push(row);
            row = [];
        }
    }

    return horizontalRows;
};

Board.prototype.getPossibleWins = function() {
    var possibleWins = [];
    var win = [];

    for (var j = 0; j < this.winOrder.length; j++) {
        win.push(this[this.winOrder[j]]);
        if (win.length === 3) {
            possibleWins.push(win);
            win = [];
        }
    }

    return possibleWins;
};

Board.prototype.getOpenCells = function() {
    var openCells = [];

    for (var i = 1; i <= this.size; i++) {
        if (this[i] === ' ') {
            openCells.push(i);
        }
    }

    return openCells;
};

Board.prototype.update = function(cell, symbol) {
    this[cell] = symbol;
};

Board.prototype.remove = function(cell) {
    this[cell] = ' ';
};

Board.prototype.setState = function(arrayOfSymbols) {
    for (var i = 0; i < arrayOfSymbols.length; i++) {
        this[i + 1] = arrayOfSymbols[i];
    }
};

module.exports = Board;
