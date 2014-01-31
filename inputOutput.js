var defaultInterface = function(message) {
  var rl = require('readline');
  var rlInterface = rl.createInterface(process.stdin, process.stdout);
  var selectedCell = 0;

  rlInterface.question(message, function(input) {
    selectedCell = input;
    rlInterface.close();
  });

  return selectedCell;
};

exports.promptInput = function(promptMsg, inputInterface){
  if(typeof(inputInterface) === 'undefined') inputInterface = defaultInterface;

  var userInput = inputInterface(promptMsg);

  return userInput;
};

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



// exports.printBoard(['x','o','x',' ','o','x','x','x',' ']);
// exports.promptNextMove('Enter a cell: ');
