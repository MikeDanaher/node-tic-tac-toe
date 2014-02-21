var winner = require('./checkForWinner');

var minimax = {
    callingPlayer: '',
    baseScore: 0
};

minimax.run = function(board, player, opponent) {
    minimax.callingPlayer = player;
    minimax.baseScore = board.getOpenCells().length + 1;
    var bound = minimax.baseScore + 1;
    var depth = 0;
    return minimax.loop(board, depth, -bound, bound, player, opponent);
};

minimax.loop = function(board, depth, lowerBound, upperBound, player, opponent) {
    if (winner.check(board.getPossibleWins()) || board.getOpenCells().length === 0) {
        return minimax.score(board, depth, minimax.callingPlayer);
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

        if (upperBound < lowerBound) {
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

minimax.score = function(board, depth, callingPlayer) {
    var winningPlayer = winner.who(board.getPossibleWins());

    if (winningPlayer === callingPlayer) {
        return minimax.baseScore - depth;
    } else if (winningPlayer !== undefined) {
        return depth - minimax.baseScore;
    } else {
        return 0;
    }
};

module.exports = minimax;
