var winner = require('../src/checkForWinner');

describe('winner', function() {

    it('finds a winner with the computerPlayer', function() {
        var humanPlayer = 'j';
        var computerPlayer = 'k';
        var possibleWins = [
            ['k', 'k', 'k'],
            [' ', 'j', 'j'],
            ['j', ' ', 'k']
        ];

        expect(winner.who(possibleWins, humanPlayer, computerPlayer)).toEqual(computerPlayer);
    });

    it('does not find a winner', function() {
        var humanPlayer = 'j';
        var computerPlayer = 'k';
        var possibleWins = [
            ['j', 'j', 'k'],
            [' ', 'k', 'j'],
            [' ', 'k', ' ']
        ];

        expect(winner.check(possibleWins, humanPlayer, computerPlayer)).toBeFalsy();
    });

});
