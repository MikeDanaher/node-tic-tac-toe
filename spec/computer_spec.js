var Computer = require('../src/computer');
var computerPlayer = new Computer('o');

describe('computer', function() {

    it('creates a new computer player', function() {
        expect(computerPlayer.symbol).toEqual('o');
    });

    it('gets the next move from the computer from the valid cells', function(done) {
        var openCells = [2, 3, 4, 7, 9];

        var expectation = function(move) {
            expect(openCells).toContain(move);
            done();
        };

        computerPlayer.getMove(openCells, expectation);
    });

});
