var game = require('./game');
var input = require('./input');
var rules = require('./rules');

var newGame = {
    defaultMessage: 'Which symbol would you like to be? (x or o): ',
    invalidMessage: 'Please choose either x or o: '
};

newGame.start = function(message) {
    message = message || newGame.defaultMessage;

    var validSymbol = function(choice) {
        if (rules.validSymbol(choice)) {
            game.setup(choice, newGame.playAgain);
        } else {
            newGame.start(newGame.invalidMessage);
        }
    };

    input.prompt(message, validSymbol);
};

newGame.playAgain = function(message) {

    var validNewGame = function(choice) {
        if (rules.newGamePrompt(choice)) {
            newGame.start();
        }
    };

    input.prompt(message, validNewGame);
};

module.exports = newGame;
