var rules = {};

rules.validMove = function(move, cells) {
    return cells.indexOf(move) !== -1;
};

module.exports = rules;
