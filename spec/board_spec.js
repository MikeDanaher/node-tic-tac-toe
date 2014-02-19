var gameBoard = require('../src/board');
var Board = new gameBoard();

describe('board', function() {

    beforeEach(function() {
        Board.reset();
    });

    it('gets empty horizontal rows', function() {
        expect(Board.getHorizontalRows()).toEqual([
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]);
    });

    it('gets filled horizontal rows', function() {
        Board.update(1, 'x');
        Board.update(5, 'o');
        Board.update(8, 'x');

        expect(Board.getHorizontalRows()).toEqual([
            ['x', ' ', ' '],
            [' ', 'o', ' '],
            [' ', 'x', ' ']
        ]);
    });

    it('gets empty possible wins', function() {
        expect(Board.getPossibleWins()).toEqual([
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
        Board.update(3, 'x');
        Board.update(5, 'o');
        Board.update(7, 'x');

        expect(Board.getPossibleWins()).toEqual([
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
        expect(Board.getOpenCells()).toMatch(/[1-9]/);
        expect(Board.getOpenCells().length).toEqual(9);
    });

    it('selects an open cell', function() {
        Board.update(1, 'x');
        Board.update(8, 'o');

        var boardState = Board.getHorizontalRows();

        expect(boardState[0][0]).toEqual('x');
        expect(boardState[2][1]).toEqual('o');
    });

    it('removes a cell that was already taken', function() {
        Board.update(3, 'o');
        Board.update(7, 'x');

        Board.remove(3);
        var boardState = Board.getHorizontalRows();

        expect(boardState[0][2]).toEqual(' ');
        expect(boardState[2][0]).toEqual('x');
    });

    it('sets the state of the board given an array of symbols', function() {
        var arrayOfSymbols = ['x', 'o', 'x', ' ', 'o', 'x', ' ', 'o', 'x'];

        Board.setState(arrayOfSymbols);

        expect(Board.getHorizontalRows()).toEqual([
            ['x', 'o', 'x'],
            [' ', 'o', 'x'],
            [' ', 'o', 'x']
        ]);
    });

    it('does not allow the caller to modify the board state', function() {
        var state = Board.getHorizontalRows();
        expect(state[1][0]).toBe(' ');

        state[1][0] = 'x';

        var currentState = Board.getHorizontalRows();
        expect(currentState[1][0]).toBe(' ');
    });

});
