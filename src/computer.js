var minimax = require('./minimax');
var rules = require('./rules');

function Computer(symbol) {
    this.symbol = symbol;
}

Computer.prototype.getMove = function(board, callback) {
    var player = this.symbol;
    var opponent = rules.getOtherSymbol(player);
    var bestMove = minimax.run(board, player, opponent);

    callback(bestMove);
};

module.exports = Computer;
