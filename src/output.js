var defaultOutput = function(toPrint) {
    console.log(toPrint);
};

var insertVerticles = function(rows) {
    var lines = [];
    for (var i = 0; i < rows.length; i++) {
        lines.push(rows[i].join(' | '));
    }
    return lines;
};

var insertHorizontals = function(lines) {
    var newLine = '\n ';
    newLine += lines.join(' \n------------\n ');
    newLine += ' \n';
    return newLine;
};

var output = {};

output.printBoard = function(horizontalRows) {
    var board = insertVerticles(horizontalRows);
    board = insertHorizontals(board);
    output.printString(board);
};

output.printString = function(message, outputMethod) {
    if (!outputMethod) {
        outputMethod = defaultOutput;
    }

    outputMethod(message);
};

module.exports = output;
