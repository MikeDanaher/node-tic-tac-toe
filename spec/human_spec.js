var humanPlayer = require('../src/human');

describe('human player', function() {
    it('creates a new human player and assignes their symbol', function() {
        var player1 = new humanPlayer('x');

        expect(player1.symbol).toEqual('x');
    });

    it('chooses a valid move from the empty cells', function(done) {
        var player2 = new humanPlayer('x');
        var emptyCells = ['1', '3', '5', '7'];
        var choice = '5\n';

        var expectation = function(move) {
            expect(emptyCells).toContain(move);
            done();
        };

        player2.getMove(emptyCells, expectation);

        process.stdin.emit('data', choice);
    });

});
