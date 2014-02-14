var input = {};

var theyPressedEnter = function(chunk) {
    return chunk.indexOf('\n') !== -1;
};

input.prompt = function(message, callback, input_method, output_method) {
    input_method = input_method || process.stdin;
    output_method = output_method || process.stdout;

    output_method.write(message);

    var userInput = '';

    input_method.resume();
    input_method.setEncoding('utf8');

    var finished = function(value) {
        input_method.pause();
        input_method.removeListener('data', dataCallback);
        callback(value);
    };

    var dataCallback = function(chunk) {
        userInput += chunk;

        if (theyPressedEnter(chunk)) {
            finished(userInput.replace('\n', ''));
        }
    };

    input_method.on('data', dataCallback);
};

module.exports = input;
