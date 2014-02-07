var board = require('./board');
var players = require('./players');
var input = require('./gatherInput');
var output = require('./printOutput');
var winner = require('./checkForWinner');
var moveCount = 0;

exports.newGame = function() {
  board.reset();
  players.reset();
  winner.reset();
  moveCount = 0;
  output.printBoard(board.getHorizontalRows());
  getMove('Please enter an available cell: ', validMove);
};

var getMove = function(message, nextStep) {
  input.promptInput(message, nextStep);
};

var validMove = function(move) {
  var cells = board.getOpenCells();
  if(cells.indexOf(move) !== -1) {
    updateBoard(move);
  }else {
    getMove('Cell taken, try another: ', validMove);
  }
};

var updateBoard = function(cell) {
  var currentPlayer = players.getCurrentPlayer();
  board.update(cell, currentPlayer);
  moveCount ++;
  if(moveCount < 9) {
    checkWinner(currentPlayer);
  }else {
    endGame();
  }
};

var checkWinner = function(currentPlayer) {
  var isWinner = winner.check(board.getPossibleWins());

  if(isWinner) {
    endGame(currentPlayer);
  }else {
    players.switchPlayers();
    output.printBoard(board.getHorizontalRows());
    getMove('Please enter an available cell: ', validMove);
  }
};

var endGame = function(player) {
  output.printBoard(board.getHorizontalRows());
  if(player) {
    output.printString('Player ' + player + ' Wins!');
  }else {
    output.printString("It's a tie!");
  }
  input.promptInput('Play again? (y/n): ', playAgain);
};

var playAgain = function(answer) {
  if(answer == 'y') {
    exports.newGame();
  }
};
