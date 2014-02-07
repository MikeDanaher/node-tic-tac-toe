var humanPlayer = require('../src/human');

describe('human player', function() {
    xit('chooses a move from the empty cells', function(done) {
        var emptyCells = [1, 3, 5, 7];

        var expectation = function(move) {
            expect(emptyCells).toContain(move);
            done();
        };

        humanPlayer.getMove(emptyCells, expectation);
    });
});
