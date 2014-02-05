var defaultOutput = function(toPrint) {
  console.log(toPrint);
};

exports.insertVerticles = function(rows) {
  var lines = [];
  for(var i = 0; i < rows.length; i++) {
    lines.push(rows[i].join(' | '));
  }
  return lines;
};

exports.insertHorizontals = function(lines) {
  var newLine = '\n ';
  newLine += lines.join(' \n------------\n ');
  newLine += ' \n';
  return newLine;
};

exports.printBoard = function(horizontalRows) {
  var board = exports.insertVerticles(horizontalRows);
  board = exports.insertHorizontals(board);
  exports.printString(board);
};

exports.printString = function(message, outputMethod) {
  if(typeof(outputMethod) === 'undefined') outputMethod = defaultOutput;

  outputMethod(message);
};

