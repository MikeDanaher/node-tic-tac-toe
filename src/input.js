var readlineInterface = function(message, callback) {
    var rl = require('readline');
    var rlInterface = rl.createInterface(process.stdin, process.stdout);
    var selectedCell = 0;

    rlInterface.question(message, function(input) {
        //move = parseInt(move, 10);
        selectedCell = input;
        rlInterface.close();
        callback(selectedCell);
    });
};

var theyPressedEnter = function(input) {
    return input.indexOf('\n') !== -1;
};

exports.prompt = function(message, callback, input, output) {
    output.write(message);

    var userInput = '';

    input.resume();
    input.setEncoding('utf8');

    var finished = function(value) {
        input.pause();
        input.removeListener('data', dataCallback);
        callback(value);
    };

    var dataCallback = function(chunk) {
        userInput += chunk;

        if (theyPressedEnter(chunk)) {
            finished(userInput.replace('\n', ''));
        }
    };

    input.on('data', dataCallback);
};

exports.promptForNumber = function(message, callback, input, output) {
    var convertToNumber = function(input) {
        var number = parseInt(input, 10);
        callback(number);
    };

    exports.prompt(message, convertToNumber, input, output);
};
