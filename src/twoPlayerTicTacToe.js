var Board = require('./board');
var output = require('./output');
var HumanPlayer = require('./human');
var input = require('./input');
var winner = require('./checkForWinner');
var ComputerPlayer = require('./computer');

var board = new Board();

var game = {
    moveCount: 0
};

game.reset = function() {
    board.reset();
    var currentPlayer = new HumanPlayer('x');
    var opponent = new ComputerPlayer('o');
    game.moveCount = 0;
    game.playTurn(currentPlayer, opponent);
};

game.playTurn = function(currentPlayer, opponent) {
    output.printBoard(board.getHorizontalRows());

    var moveCallback = function(move) {
        board.update(move, currentPlayer.symbol);
        game.moveCount++;
        var isWinner = winner.check(board.getPossibleWins());

        if (isWinner) {
            game.finish(currentPlayer.symbol);
        } else if (game.moveCount === 9) {
            game.finish();
        } else {
            game.playTurn(opponent, currentPlayer);
        }
    };

    currentPlayer.getMove(board, moveCallback);
};

game.finish = function(player) {
    output.printBoard(board.getHorizontalRows());
    if (player) {
        output.printString('Player ' + player + ' Wins!');
    } else {
        output.printString("It's a tie!");
    }
    input.prompt('Play again? (y/n): ', game.playAgain);
};

game.playAgain = function(answer) {
    if (answer === 'y' || answer === 'Y') {
        game.reset();
    }
};

module.exports = game;
