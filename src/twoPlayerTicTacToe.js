var board = require('./board');
var output = require('./output');
var HumanPlayer = require('./human');
var input = require('./input');
var winner = require('./checkForWinner');
var moveCount, playAgain, endGame, playTurn;

playAgain = function(answer) {
    if (answer === 'y') {
        exports.newGame();
    }
};

exports.endGame = function(player) {
    output.printBoard(board.getHorizontalRows());
    if (player) {
        output.printString('Player ' + player + ' Wins!');
    } else {
        output.printString("It's a tie!");
    }
    input.prompt('Play again? (y/n): ', playAgain, process.stdin, process.stdout);
};

exports.playTurn = function(currentPlayer, opponent) {
    output.printBoard(board.getHorizontalRows());

    var openCells = board.getOpenCells();

    var moveCallback = function(move) {
        board.update(move, currentPlayer.symbol);
        moveCount++;
        var isWinner = winner.check(board.getPossibleWins());

        if (isWinner) {
            exports.endGame(currentPlayer.symbol);
        } else if (moveCount === 9) {
            exports.endGame();
        } else {
            exports.playTurn(opponent, currentPlayer);
        }
    };

    currentPlayer.getMove(openCells, moveCallback);
};

exports.newGame = function() {
    board.reset();
    var currentPlayer = new HumanPlayer('x');
    var opponent = new HumanPlayer('o');
    moveCount = 0;
    exports.playTurn(currentPlayer, opponent);
};
