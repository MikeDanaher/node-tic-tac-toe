var board = require('./board');
var winner = require('./checkForWinner');

var minimax = {};

minimax.loop = function(boardState, depth, lowerBound, upperBound, player, opponent) {
    if (winner.check(boardState) || board.getOpenCells().length === 0) {
        return minimax.score(boardState, depth, upperBound, player, opponent);
    }

    var openCells = board.getOpenCells();
    var bestMove = 0;

    for (var i = 0; i < openCells.length; i++) {
        board.update(openCells[i], player.symbol);
        boardState = board.getHorziontalRows();
        var score = minimax(boardState, depth + 1; lowerBound, upperBound, opponent, player);
        board.remove(openCells[i]);

        if (player.minimaxPlayer) {
          if(score > lowerBound) {
            lowerBound = score;
            bestMove = openCells[i];
          }
        } else {
          upperbound = Math.min(upperBound, score);
        }

        if (upperBound <= lowerBound) {
          break;
        }
    }

    if (depth === 0) {
      return bestMove;
    } else {
      if (player.minimaxPlayer) {
        return lowerBound;
      } else {
        return upperbound;
      }
    }

};

minimax.score = function(boardState, depth, upperBound, player, opponent) {
    var winningPlayer = winner.who(boardState);

    if (winningPlayer === player) {
        return upperBound - depth;
    } else if (winningPlayer === opponent) {
        return depth - upperBound;
    } else {
        return 0;
    }
};

module.exports = minimax;
