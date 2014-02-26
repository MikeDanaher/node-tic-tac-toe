var HumanPlayer = require('../src/human');
var input = require('../src/input');

describe('human player', function() {
    it('creates a new human player and assignes their symbol', function() {
        var player1 = new HumanPlayer('x');

        expect(player1.symbol).toEqual('x');
    });

    it('chooses a valid move from the empty cells', function(done) {
        var player2 = new HumanPlayer('x');
        var mockBoard = {
            getOpenCells: function() {
                return [3, 5, 7];
            }
        };

        var expectation = function(move) {
            expect(mockBoard.getOpenCells()).toContain(move);
            done();
        };

        spyOn(input, 'promptForNumber').andCallFake(function(message, callback) {
            callback(5);
        });

        player2.getMove(mockBoard, expectation);

    });

});
