var Computer = require('../src/computer');
var Board = require('../src/board');

describe('computer', function() {

    var computer = new Computer('o');

    it('creates a new computer player', function() {
        expect(computer.symbol).toEqual('o');
    });

    it('calls minimax on an empty board', function(done) {
        var board = new Board();
        board.reset();

        var expectation = function(bestMove) {
            expect(bestMove).toEqual(1);
            done();
        };

        computer.getMove(board, expectation);
    });

});
