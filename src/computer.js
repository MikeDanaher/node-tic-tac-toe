var board = require('./board');

function Computer(symbol) {
    this.symbol = symbol;
    this.minimaxPlayer = true;
}

Computer.prototype.getMove = function(openCells, callback) {
    var move = openCells[0];

    callback(move);
};

Computer.prototype.getBestMove = function(opencells, player, opponent, callback) {
    var boardState = board.getHorizontalRows();
    var depth = 0;
    var bound = openCells.length + 2;

    var bestMove = minimax(boardState, depth, -bound, bound, player, opponent);

    callback(bestMove);
}
module.exports = Computer;
