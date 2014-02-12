var board = require('./board');
var output = require('./output');
var humanPlayer = require('./human');
var input = require('./input');
var winner = require('./checkForWinner');
var moveCount, playAgain, endGame, startGame;

playAgain = function(answer) {
    if (answer === 'y') {
        exports.newGame();
    }
};

endGame = function(player) {
    output.printBoard(board.getHorizontalRows());
    if (player) {
        output.printString('Player ' + player + ' Wins!');
    } else {
        output.printString("It's a tie!");
    }
    input.prompt('Play again? (y/n): ', playAgain, process.stdin, process.stdout);
};

startGame = function(currentPlayer, opponent) {
    output.printBoard(board.getHorizontalRows());

    var openCells = board.getOpenCells();

    var moveCallback = function(move) {
        board.update(move, currentPlayer.symbol);
        moveCount++;
        var isWinner = winner.check(board.getPossibleWins());

        if (isWinner) {
            endGame(currentPlayer.symbol);
        } else if (moveCount === 9) {
            endGame();
        } else {
            startGame(opponent, currentPlayer);
        }
    };

    currentPlayer.getMove(openCells, moveCallback);
};

exports.newGame = function() {
    board.reset();
    var currentPlayer = new humanPlayer('x');
    var opponent = new humanPlayer('o');
    moveCount = 0;
    startGame(currentPlayer, opponent);
};
