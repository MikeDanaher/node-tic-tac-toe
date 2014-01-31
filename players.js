var player1 = 'x';
var player2 = 'o';
var currentPlayer = player1;

exports.getCurrentPlayer = function() {
  return currentPlayer;
};

exports.setCurrentPlayer = function(player) {
  if(player === 1){
    currentplayer = player1;
  }else {
    currentPlayer = player2;
  }
};

exports.switchPlayers = function() {
  if(currentPlayer === player1){
    currentPlayer = player2;
  }else {
    currentPlayer = player1;
  }
};

exports.reset = function() {
  currentPlayer = player1;
};
