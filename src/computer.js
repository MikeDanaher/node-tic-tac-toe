var minimax = require('./minimax');

function Computer(symbol) {
    this.symbol = symbol;
}

Computer.prototype.getMove = function(board, callback) {
    var player = this.symbol;
    var opponent = '';

    if (player === 'x') {
        opponent = 'o';
    } else {
        opponent = 'x';
    }

    var bestMove = minimax.run(board, player, opponent);

    callback(bestMove);
};

module.exports = Computer;
