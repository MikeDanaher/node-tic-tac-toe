var rules = {};

rules.validMove = function(move, cells) {
    return cells.indexOf(move) !== -1;
};

rules.validSymbol = function(symbol) {
    if (symbol === 'x' || symbol === 'o') {
        return true;
    } else {
        return false;
    }
};

rules.getOtherSymbol = function(symbol) {
    var oppositeSymbol = '';

    if (symbol === 'x') {
        oppositeSymbol = 'o';
    } else {
        oppositeSymbol = 'x';
    }

    return oppositeSymbol;
};

rules.newGamePrompt = function(choice) {
    var options = ['y', 'Y', 'Yes'];

    return options.indexOf(choice) !== -1;
};

module.exports = rules;
