var board = require('../board');
var io = require('../inputOutput');
var message = 'Make a move by entering an open cell: ';


describe('input', function(){

  it('prompts user to enter a new cell', function(){
    spyOn(io, "promptInput");
    io.promptInput(message);
    expect(io.promptInput).toHaveBeenCalled();
  });

  it('gets the value entered by the user', function() {
    var stub = function(message) {
      if(message) {
        return 3;
      }
    };

    expect(io.promptInput(message, stub)).toEqual(3);
  });

});

describe('output', function() {

  it('prints the board state', function() {
    spyOn(io, 'printBoard');
    io.printBoard(board.getState());
    expect(io.printBoard).toHaveBeenCalled();
  });

  it('prints the end game message', function() {
    var endMessage = 'Player 1 Wins!';

    spyOn(io, 'endGameMessage');
    io.endGameMessage(endMessage);
    expect(io.endGameMessage).toHaveBeenCalled();
  });

});

