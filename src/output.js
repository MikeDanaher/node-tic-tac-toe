var defaultOutput = function(toPrint) {
    console.log(toPrint);
};

var output = {};

output.insertVerticles = function(rows) {
    var lines = [];
    for (var i = 0; i < rows.length; i++) {
        lines.push(rows[i].join(' | '));
    }
    return lines;
};

output.insertHorizontals = function(lines) {
    var newLine = '\n ';
    newLine += lines.join(' \n------------\n ');
    newLine += ' \n';
    return newLine;
};

output.printBoard = function(horizontalRows) {
    var board = output.insertVerticles(horizontalRows);
    board = output.insertHorizontals(board);
    output.printString(board);
};

output.printString = function(message, outputMethod) {
    if (!outputMethod) {
        outputMethod = defaultOutput;
    }

    outputMethod(message);
};

module.exports = output;
