var winner = require('../checkForWinner');

describe('winner', function() {

  beforeEach( function(){
    winner.reset();
  });

  it('adds an array of all x', function() {
    expect(winner.addArray(['x','x','x'])).toEqual(3);
  });

  it('adds an array of all o', function() {
    expect(winner.addArray(['o','o','o'])).toEqual(12);
  });

  it('adds a mixed array', function() {
    expect(winner.addArray(['x','o','x'])).toEqual(6);
  });

  it('knows if three of the same are in the first row', function() {
    expect(winner.check([['o','o','o'],['','o','x'],['x','','x']])).toBeTruthy();
  });

  it('knows if three of the same are in the second row', function() {
    expect(winner.check([['x','o',''],['x','x','x'],['x','o','x']])).toBeTruthy();
  });

  it('knows if thee of the same are in one of the diagonals', function() {
    expect(winner.check([['x','o','o'],['o','o','o']])).toBeTruthy();
  });

  it('knows if three of the same are in the last column', function() {
    expect(winner.check([['o','x','o'],['x','x',''],['o','o','o']])).toBeTruthy();
  });

  it('knows if three of the same are not in any rows', function() {
    expect(winner.check([['o','','o'],['x','x','o'],['','o','x']])).toBeFalsy();
  });

});

