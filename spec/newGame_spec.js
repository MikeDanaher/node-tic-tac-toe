var newGame = require('../src/newGame');
var game = require('../src/game');

describe('start a new game', function() {

    it('gets the users chosen symbol', function() {
        spyOn(game, 'setup');
        var playAgain = newGame.playAgain;

        newGame.start();

        process.stdin.emit('data', 'x\n');

        expect(game.setup).toHaveBeenCalledWith('x', playAgain);
    });

    it('plays a new game given an antry of y', function() {
        spyOn(newGame, 'start');

        newGame.playAgain('Play again? ');

        process.stdin.emit('data', 'y\n');

        expect(newGame.start).toHaveBeenCalled();
    });
});
