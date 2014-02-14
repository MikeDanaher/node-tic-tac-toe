var board = require('../src/board');

describe('board', function() {

    beforeEach(function() {
        board.reset();
    });

    it('gets empty horizontal rows', function() {
        expect(board.getHorizontalRows()).toEqual([
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]);
    });

    it('gets filled horizontal rows', function() {
        board.update(1, 'x');
        board.update(5, 'o');
        board.update(8, 'x');

        expect(board.getHorizontalRows()).toEqual([
            ['x', ' ', ' '],
            [' ', 'o', ' '],
            [' ', 'x', ' ']
        ]);
    });

    it('gets empty possible wins', function() {
        expect(board.getPossibleWins()).toEqual([
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]);
    });

    it('gets filled possible wins', function() {
        board.update(3, 'x');
        board.update(5, 'o');
        board.update(7, 'x');

        expect(board.getPossibleWins()).toEqual([
            [' ', ' ', 'x'],
            [' ', 'o', ' '],
            ['x', ' ', ' '],
            [' ', ' ', 'x'],
            [' ', 'o', ' '],
            ['x', ' ', ' '],
            [' ', 'o', ' '],
            ['x', 'o', 'x']
        ]);
    });

    it('gets available cells', function() {
        expect(board.getOpenCells()).toMatch(/[1-9]/);
    });

    it('selects an open cell', function() {
        board.update(1, 'x');
        board.update(8, 'o');

        var boardState = board.getHorizontalRows();

        expect(boardState[0][0]).toEqual('x');
        expect(boardState[2][1]).toEqual('o');
    });

    it('does not allow the caller to modify the board state', function() {
        var state = board.getHorizontalRows();
        expect(state[1][0]).toBe(' ');

        state[1][0] = 'x';

        var currentState = board.getHorizontalRows();
        expect(currentState[1][0]).toBe(' ');
    });

});
