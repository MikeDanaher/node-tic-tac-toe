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

