var input = require('./gatherInput');
var rules = require('./rules');

var getMove = function(emptyCells, callback) {
    var message = 'Please enter a valid cell: ';

    var checkIfMoveValid = function(move) {
        if (rules.validMove(move, emptyCells)) {
            console.log('valid');
            callback(move);
            return;
        } else {
            console.log('invalid');
            getMove(emptyCells, callback);
        }
    };

    input.promptInput(message, checkIfMoveValid);
};

exports.getMove = getMove;
