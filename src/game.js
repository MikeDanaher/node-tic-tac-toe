var Board = require('./board');
var HumanPlayer = require('./human');
var ComputerPlayer = require('./computer');
var output = require('./output');
var rules = require('./rules');
var winner = require('./checkForWinner');

var board = new Board();

var game = {};

game.setup = function(humanSymbol, computerSymbol, newGame) {
    board.reset();
    game.playAgain = newGame;
    game.moveCount = 0;

    var humanPlayer = new HumanPlayer(humanSymbol);
    var computerPlayer = new ComputerPlayer(computerSymbol);

    game.playTurn(humanPlayer, computerPlayer);
};

game.playTurn = function(currentPlayer, opponent) {
    output.printBoard(board.getHorizontalRows());

    var makeMove = function(move) {
        board.update(move, currentPlayer.symbol);
        game.moveCount++;
        var isWinner = winner.check(board.getPossibleWins(), currentPlayer.symbol, opponent.symbol);

        if (isWinner) {
            game.finish(currentPlayer.symbol);
        } else if (game.moveCount === 9) {
            game.finish();
        } else {
            game.playTurn(opponent, currentPlayer);
        }
    };

    currentPlayer.getMove(board, makeMove, opponent);
};

game.finish = function(player) {
    output.printBoard(board.getHorizontalRows());
    if (player) {
        output.printString('Player ' + player + ' Wins!');
    } else {
        output.printString("It's a tie!");
    }
    game.playAgain('Play again? (y/n): ');
};


module.exports = game;
