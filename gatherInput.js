var defaultInterface = function(message, callback) {
  var rl = require('readline');
  var rlInterface = rl.createInterface(process.stdin, process.stdout);
  var selectedCell = 0;

  rlInterface.question(message, function(input) {
    selectedCell = input;
    rlInterface.close();
    callback(selectedCell);
  });
};

exports.promptInput = function(message, callback, inputInterface){
  if(typeof(inputInterface) === 'undefined') inputInterface = defaultInterface;

  inputInterface(message, callback);
};

