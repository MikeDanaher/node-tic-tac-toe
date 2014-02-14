var winner = require('../src/checkForWinner');

describe('winner', function() {

    it('finds a winner with three o', function() {
        var possibleWins = [
            ['o', 'o', 'o'],
            [' ', 'o', 'x'],
            ['x', ' ', 'x']
        ];

        expect(winner.check(possibleWins)).toBeTruthy();
    });

    it('finds a winner with three x', function() {
        var possibleWins = [
            ['x', 'o', 'o'],
            ['o', 'o', 'x'],
            ['x', 'x', 'x']
        ];

        expect(winner.check(possibleWins)).toBeTruthy();
    });

    it('does not find a winner', function() {
        var possibleWins = [
            ['o', 'x', 'o'],
            [' ', 'o', 'x'],
            [' ', ' ', ' ']
        ];

        expect(winner.check(possibleWins)).toBeFalsy();
    });

});
