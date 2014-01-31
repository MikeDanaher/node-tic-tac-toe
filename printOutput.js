var defaultOutput = function(toPrint) {
  console.log(toPrint);
};

var boardToString = function(arr) {
  var line = [];
  var vSpacer = ' | ';
  var hSpacer = ' -------------';
  var newLine = '\n';
  line.push(newLine);
  for(var i = 0; i < arr.length; i += 3){
    line.push(hSpacer);
    line.push(vSpacer + arr[i] + vSpacer + arr[i+1] + vSpacer + arr[i+2] + vSpacer);
  };
  line.push(hSpacer);
  line.push(newLine);

  return line;
};

exports.printBoard = function(board) {
  var boardString = boardToString(board);

  for(var j = 0; j < boardString.length; j++) {
    defaultOutput(boardString[j]);
  }
};

exports.endGameMessage = function(endMessage) {
  console.log(endMessage);
};

exports.printBoard(['x','o',' ','o','x','o',' ','o','x']);
