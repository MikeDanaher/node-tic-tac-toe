var winner = require('./checkForWinner');

var minimax = {
    callingPlayer: ''
};

minimax.run = function(board, player, opponent) {
    minimax.callingPlayer = player;
    var depth = 0;
    var bound = board.getOpenCells().length + 2;
    return minimax.loop(board, depth, -bound, bound, player, opponent);
};

minimax.loop = function(board, depth, lowerBound, upperBound, player, opponent) {
    if (winner.check(board) || board.getOpenCells().length === 0) {
        return minimax.score(board, depth, upperBound, player, opponent);
    }

    var openCells = board.getOpenCells();
    var bestMove = 0;

    for (var i = 0; i < openCells.length; i++) {
        board.update(openCells[i], player);
        var score = minimax.loop(board, depth + 1, lowerBound, upperBound, opponent, player);
        board.remove(openCells[i]);

        if (player === minimax.callingPlayer) {
            if (score > lowerBound) {
                lowerBound = score;
                bestMove = openCells[i];
            }
        } else {
            upperBound = Math.min(upperBound, score);
        }

        if (upperBound <= lowerBound) {
            break;
        }
    }

    if (depth === 0) {
        return bestMove;
    } else {
        if (player === minimax.callingPlayer) {
            return lowerBound;
        } else {
            return upperBound;
        }
    }

};

minimax.score = function(board, depth, upperBound, player, opponent) {
    var winningPlayer = winner.who(board.getHorizontalRows());

    if (winningPlayer === player) {
        return upperBound - depth;
    } else if (winningPlayer === opponent) {
        return depth - upperBound;
    } else {
        return 0;
    }
};

module.exports = minimax;
