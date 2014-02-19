var minimax = require('../src/minimax');

describe('minimax', function() {

    it('determines the minimax score when o wins', function() {
        var player = 'o',
            opponent = 'x',
            depth = 0,
            upperBound = 2;

        var boardState = [
            ['x', 'o', 'o'],
            ['x', 'o', 'x'],
            ['o', 'o', 'o']
        ];

        expect(minimax.score(boardState, depth, upperBound, player, opponent)).toEqual(2);
    });

});
