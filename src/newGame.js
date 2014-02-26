var game = require('./game');
var input = require('./input');
var rules = require('./rules');

var humanSymbolMessage = 'Enter the sybmol you would like to use: ',
    computerSymbolMessage = 'Enter the symbol for the computer: ',
    humanSymbol = '',
    computerSymbol = '';

var newGame = {};

newGame.start = function() {

    var saveComputerSymbol = function(nextChoice) {
        computerSymbol = nextChoice;
        game.setup(humanSymbol, computerSymbol, newGame.playAgain);
    };

    var saveHumanSymbol = function(choice) {
        humanSymbol = choice;
        input.prompt(computerSymbolMessage, saveComputerSymbol);
    };

    input.prompt(humanSymbolMessage, saveHumanSymbol);
};

newGame.playAgain = function(message) {
    var options = ['y', 'Y', 'Yes'];

    var checkNewGame = function(choice) {
        if (options.indexOf(choice) !== -1) {
            newGame.start();
        }
    };

    input.prompt(message, checkNewGame);
};

module.exports = newGame;
