var player = require('../players');

describe('player', function() {

  beforeEach( function() {
    player.reset();
  });

  it('sets the current player', function() {
    player.setCurrentPlayer(2);

    expect(player.getCurrentPlayer()).toEqual('o');
  });


  it('gets the current player', function() {
    expect(player.getCurrentPlayer()).toEqual('x');
  });

  it('switches current player', function() {
    player.setCurrentPlayer(1);
    player.switchPlayers();

    expect(player.getCurrentPlayer()).toEqual('o');
  });

});
