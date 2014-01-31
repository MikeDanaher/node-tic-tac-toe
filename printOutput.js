
exports.printBoard = function(boardState) {
  console.log('\n');
  for(i = 0; i < boardState.length; i += 3){
    console.log('-------------');
    console.log('| ' + boardState[i] + ' | ' + boardState[i+1] + ' | ' + boardState[i+2] + ' |');
  };
  console.log('-------------');
  console.log('\n');
};

exports.endGameMessage = function(endMessage) {
  console.log(endMessage);
};


