var board = require('./board');
var winner = require('./checkForWinner');
var players = require('./players');
var moveCount = 0;

exports.validMove = function(move) {
  var cells = board.getOpenCells();
  if(cells.indexOf(move) !== -1) {
    updateBoard(move);
  }else {
    twoPlayerTicTacToe.getMove('Cell taken, try again: ');
  }
};

var updateBoard = function(cell) {
  var currentPlayer = players.getCurrentPlayer();
  board.update(cell, currentPlayer);
  moveCount ++;
  if(moveCount < 9) {
    checkWinner(currentPlayer);
  }else {
    twoPlayerTicTacToe.endGame();
  }
};

var checkWinner = function(currentPlayer) {
  var isWinner = winner.check(board.getPossibleWins());

  if(isWinner) {
    twoPlayerTicTacToe.endGame(currentPlayer);
  }else {
    players.switchPlayers();
    output.printBoard(board.getHorizontalRows());
    twoPlayerTicTacToe.getMove('Next player, enter an open cell: ');
  }
};

exports.reset = function() {
  board.reset();
  players.reset();
  winner.reset();
  moveCount = 0;
};
