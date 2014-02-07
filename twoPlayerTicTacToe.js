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
  getMove();
};

var getMove = function() {
  var promptMessage = 'Please enter the number of an available cell: ';
  input.promptInput(promptMessage, validMove);
};

var validMove = function(move) {
  var cells = board.getOpenCells();
  if(cells.indexOf(move) !== -1) {
    selectCell(move);
  }else {
    getMove();
  }
};

var selectCell = function(cell) {
  var currentPlayer = players.getCurrentPlayer();
  board.selectCell(cell, currentPlayer);
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
    getMove();
  }
};

var endGame = function(player) {
  output.printBoard(board.getHorizontalRows());
  if(player) {
    output.printString('Player ' + player + ' Wins!');
  }else {
    output.printString("It's a tie!");
  }
};

