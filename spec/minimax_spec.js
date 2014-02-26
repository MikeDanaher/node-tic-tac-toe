var minimax = require('../src/minimax');
var gameBoard = require('../src/board');

describe('minimax', function() {

    var callingPlayer = 'o',
        player = 'o',
        opponent = 'x';

    it('determines the minimax score when o wins', function() {
        var depth = 0;

        minimax.baseScore = 2;

        var mockBoard = {
            getPossibleWins: function() {
                return [
                    ['x', 'o', 'o'], ['x', 'o', 'x'], ['o', 'o', 'o']
                ];
            }
        };

        expect(minimax.score(mockBoard, depth, callingPlayer, player, opponent)).toEqual(2);
    });

    it('returns the best move when given a board where x could win next', function() {
        var Board1 = new gameBoard();
        Board1.setState(['o', 'x', 'o', ' ', 'x', ' ', ' ', ' ', 'x']);

        expect(minimax.run(Board1, callingPlayer, opponent)).toEqual(8);
    });

    it('returns the best move when o could win next', function() {
        var Board2 = new gameBoard();
        Board2.setState(['o', 'x', 'o', 'x', 'x', 'o', 'x', ' ', ' ']);

        expect(minimax.run(Board2, callingPlayer, opponent)).toEqual(9);
    });


    it('should choose a corner when x sets up a future move', function() {
        var corners = [3, 7];

        var Board3 = new gameBoard();
        Board3.setState(['o', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x']);

        expect(corners).toContain(minimax.run(Board3, callingPlayer, opponent));
    });

    it('should choose a side when x sets up a future move', function() {
        var sides = [2, 4, 6, 8];

        var Board4 = new gameBoard();
        Board4.setState(['x', ' ', ' ', ' ', 'o', ' ', ' ', ' ', 'x']);

        expect(sides).toContain(minimax.run(Board4, callingPlayer, opponent));
    });

});
