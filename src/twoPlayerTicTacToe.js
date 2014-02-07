var board = require('./board');
var players = require('./players');
var input = require('./gatherInput');
var output = require('./printOutput');
var winner = require('./checkForWinner');
var rules = require('./rules');
var moveCount = 0;
var validateMove, checkWinner, updateBoard, endGame, playAgain;

validateMove = function(move) {
    if (rules.validMove(move, board.getOpenCells())) {
        updateBoard(move);
    } else {
        exports.getMove('Cell taken, try another: ', validateMove);
    }
};

checkWinner = function(currentPlayer) {
    var isWinner = winner.check(board.getPossibleWins());

    if (isWinner) {
        endGame(currentPlayer);
    } else {
        players.switchPlayers();
        output.printBoard(board.getHorizontalRows());
        exports.getMove('Please enter an available cell: ', validateMove);
    }
};

updateBoard = function(cell) {
    var currentPlayer = players.getCurrentPlayer();
    board.update(cell, currentPlayer);
    moveCount++;
    if (moveCount < 9) {
        checkWinner(currentPlayer);
    } else {
        endGame();
    }
};

endGame = function(player) {
    output.printBoard(board.getHorizontalRows());
    if (player) {
        output.printString('Player ' + player + ' Wins!');
    } else {
        output.printString("It's a tie!");
    }
    input.promptInput('Play again? (y/n): ', playAgain);
};

playAgain = function(answer) {
    if (answer === 'y') {
        exports.newGame();
    }
};

exports.getMove = function(message, nextStep) {
    input.promptInput(message, nextStep);
};

exports.newGame = function() {
    board.reset();
    players.reset();
    winner.reset();
    moveCount = 0;
    output.printBoard(board.getHorizontalRows());
    exports.getMove('Please enter an available cell: ', validateMove);
};
