var game = require('../src/twoPlayerTicTacToe');

describe('game', function() {

    it('calls for the next move', function() {
        spyOn(game, 'getMove');
        game.newGame();

        expect(game.getMove).toHaveBeenCalled();
    });
});
