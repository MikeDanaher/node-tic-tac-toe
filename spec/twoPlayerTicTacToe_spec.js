var game = require('../src/twoPlayerTicTacToe');
var board = require('../src/board');
var output = require('../src/output');

describe('game', function() {

    describe('new game', function() {

        beforeEach(function() {
            spyOn(board, 'reset');
            spyOn(output, 'printBoard');
            game.newGame();
        });

        it('clears the board', function() {
            expect(board.reset).toHaveBeenCalled();
        });

        it('prints out a blank board', function() {
            expect(output.printBoard).toHaveBeenCalledWith([
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ]);
        });
    });

    describe('start game', function() {

        beforeEach(function() {
            var mockPlayer1 = {
                symbol: 'x',
                getMove: function(move) {
                    return move;
                }
            };

            var mockPlayer2 = {
                symbol: 'o',
                getMove: function(move) {
                    return move;
                }
            };

            game.start(mockPlayer1, mockPlayer2);
        });

        xit('chooses the correct cell', function() {
            expect(board.getHorizontalRows()).toEqual([
                [' ', ' ', ' '],
                [' ', 'x', ' '],
                [' ', ' ', ' ']
            ]);
        });
    });
});
