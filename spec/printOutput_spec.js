var board = require('../board'); 
var output = require('../printOutput');


describe('output', function() {

  it('prints the board state', function() {
    spyOn(output, 'printBoard');
    output.printBoard(board.getState());
    expect(output.printBoard).toHaveBeenCalled();
  });

  it('prints the end game message', function() {
    var endMessage = 'Player 1 Wins!';

    spyOn(output, 'endGameMessage');
    output.endGameMessage(endMessage);
    expect(output.endGameMessage).toHaveBeenCalled();
  });

});

