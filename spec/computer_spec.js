var Computer = require('../src/computer');
var Human = require('../src/human');
var gameBoard = require('../src/board');

var computerPlayer = new Computer('o');
var humanPlayer = new Human('x');

describe('computer', function() {

    it('creates a new computer player', function() {
        expect(computerPlayer.symbol).toEqual('o');
    });

    xit('gets the next best move from the computer', function(done) {
        var Board = new gameBoard();
        Board.setState('o', 'x', 'o', ' ', 'x', 'x', ' ', 'o', 'x');

        var expectation = function(move) {
            expect(move).toEqual(4);
            done();
        };

        computerPlayer.getBestMove(Board, expectation);
    });

});
