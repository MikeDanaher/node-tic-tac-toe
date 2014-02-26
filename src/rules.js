var rules = {};

rules.validMove = function(move, cells) {
    return cells.indexOf(move) !== -1;
};

//Used only if game requires x and o as symbols
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

module.exports = rules;
