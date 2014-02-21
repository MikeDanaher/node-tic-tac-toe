var input = require('./input');
var rules = require('./rules');

function Human(symbol) {
    this.symbol = symbol;
    this.message = 'Player ' + this.symbol + ', please enter a valid cell: ';
}

Human.prototype.getMove = function(board, callback, message) {
    message = message || this.message;

    var checkIfMoveValid = function(move) {
        if (rules.validMove(move, board.getOpenCells())) {
            callback(move);
            return;
        } else {
            var invalidMsg = 'Invalid, try again: ';
            Human.prototype.getMove(board, callback, invalidMsg);
        }
    };

    input.promptForNumber(message, checkIfMoveValid);
};

module.exports = Human;
