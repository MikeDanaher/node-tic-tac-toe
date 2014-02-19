var minimax = require('../src/minimax');
var gameBoard = require('../src/board');

describe('minimax', function() {

    it('determines the minimax score when o wins', function() {
        var player = 'o',
            opponent = 'x',
            depth = 0,
            upperBound = 2;

        var mockBoard = {
            getHorizontalRows: function() {
                return [
                    ['x', 'o', 'o'], ['x', 'o', 'x'], ['o', 'o', 'o']
                ];
            }
        };

        expect(minimax.score(mockBoard, depth, upperBound, player, opponent)).toEqual(2);
    });

    it('returns the best move when given a board where x will win', function() {
        var player = 'o',
            opponent = 'x';

        var Board = new gameBoard();
        Board.setState(['o', 'x', 'o', ' ', 'x', 'x', ' ', 'o', 'x']);

        expect(minimax.run(Board, player, opponent)).toEqual(4);
    });

    it('should choose a corner when x takes the middle and bottom corner', function() {
        var player = 'o',
            opponent = 'x',
            corners = [3, 7];

        var Board = new gameBoard();
        Board.setState(['o', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x']);

        expect(corners).toContain(minimax.run(Board, player, opponent));
    });

});
