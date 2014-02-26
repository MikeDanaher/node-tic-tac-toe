var Computer = require('../src/computer');
var Board = require('../src/board');
var Human = require('../src/human');

describe('computer', function() {

    var computer = new Computer('o');

    it('creates a new computer player', function() {
        expect(computer.symbol).toEqual('o');
    });

    it('calls minimax on an empty board', function(done) {
        var board = new Board();
        var opponent = new Human('n');

        board.reset();

        var expectation = function(bestMove) {
            expect(bestMove).toEqual(1);
            done();
        };

        computer.getMove(board, expectation, opponent);
    });

});
