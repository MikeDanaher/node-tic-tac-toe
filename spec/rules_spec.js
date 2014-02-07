var rules = require('../src/rules');

describe('rules', function() {

    it('can determine if a move is valid', function() {
        var emptyCells = [1, 3, 5];

        expect(rules.validMove(3, emptyCells)).toBe(true);
        expect(rules.validMove(9, emptyCells)).toBe(false);
    });
});
