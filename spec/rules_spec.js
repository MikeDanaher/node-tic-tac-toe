var rules = require('../src/rules');

describe('rules', function() {

    it('can determine if a move is valid', function() {
        var emptyCells = [1, 3, 5];

        expect(rules.validMove(3, emptyCells)).toBe(true);
        expect(rules.validMove(9, emptyCells)).toBe(false);
    });

    it('can determine if a symbol is valid', function() {

        expect(rules.validSymbol('x')).toBeTruthy();
        expect(rules.validSymbol('o')).toBeTruthy();
        expect(rules.validSymbol('what')).toBeFalsy();
    });

    it('can get the opposite symbol when given a symbol', function() {

        expect(rules.getOtherSymbol('x')).toEqual('o');
    });

});
