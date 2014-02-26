var minimax = require('./minimax');
var rules = require('./rules');

function Computer(symbol) {
    this.symbol = symbol;
}

Computer.prototype.getMove = function(board, callback, opponent) {
    var computer = this.symbol;
    var human = opponent.symbol;
    var bestMove = minimax.run(board, computer, human);

    callback(bestMove);
};

module.exports = Computer;
