var Board = require('./board');
var HumanPlayer = require('./human');
var ComputerPlayer = require('./computer');
var output = require('./output');
var rules = require('./rules');
var winner = require('./checkForWinner');

var board = new Board();

var game = {};

game.setup = function(humanSymbol, newGame) {
    board.reset();
    game.playAgain = newGame;
    game.moveCount = 0;

    var currentPlayer,
        opponent;

    var opponentSymbol = rules.getOtherSymbol(humanSymbol);
    var humanPlayer = new HumanPlayer(humanSymbol);
    var computerPlayer = new ComputerPlayer(opponentSymbol);

    if (humanSymbol === 'x') {
        currentPlayer = humanPlayer;
        opponent = computerPlayer;
    } else {
        currentPlayer = computerPlayer;
        opponent = humanPlayer;
    }

    game.playTurn(currentPlayer, opponent);
};

game.playTurn = function(currentPlayer, opponent) {
    output.printBoard(board.getHorizontalRows());

    var makeMove = function(move) {
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

    currentPlayer.getMove(board, makeMove);
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
