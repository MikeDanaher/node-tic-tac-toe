function Computer(symbol) {
    this.symbol = symbol;
}

Computer.prototype.getMove = function(openCells, callback) {
    var move = openCells[0];

    callback(move);
};

module.exports = Computer;
