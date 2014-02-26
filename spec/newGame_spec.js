var newGame = require('../src/newGame');
var game = require('../src/game');
var input = require('../src/input');

describe('start a new game', function() {

    it('gets the users chosen symbol', function() {
        spyOn(game, 'setup');
        spyOn(input, 'prompt').andCallFake(function(message, callback) {
            callback('x');
        });

        var playAgain = newGame.playAgain;

        newGame.start();

        expect(game.setup).toHaveBeenCalledWith('x', 'x', playAgain);
    });

    it('plays a new game given an entry of y', function() {
        spyOn(newGame, 'start');

        spyOn(input, 'prompt').andCallFake(function(message, callback) {
            callback('y');
        });

        newGame.playAgain('Play again? ');

        expect(newGame.start).toHaveBeenCalled();
    });
});
