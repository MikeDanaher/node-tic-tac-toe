var input = require('./input');
var rules = require('./rules');

function Human(symbol) {
    this.symbol = symbol;
}

Human.prototype.getMove = function(board, callback) {
    var message = 'Player ' + this.symbol + ', please enter a valid cell: ';

    var checkIfMoveValid = function(move) {
        if (rules.validMove(move, board.getOpenCells())) {
            callback(move);
        } else {
            message = 'Invalid, try again: ';
            input.promptForNumber(message, checkIfMoveValid);
        }
    };

    input.promptForNumber(message, checkIfMoveValid);
};

module.exports = Human;
