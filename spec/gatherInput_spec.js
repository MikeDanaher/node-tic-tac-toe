var board = require('../board'); 
var input = require('../gatherInput');
var message = 'Make a move by entering an open cell: ';


describe('input', function(){

  it('prompts user to enter a new cell', function(){
    spyOn(input, "promptInput");
    input.promptInput(message);
    expect(input.promptInput).toHaveBeenCalled();
  });

  it('gets the value entered by the user', function() {
    var stub = function(message) {
      if(message) {
        return 3;
      }
    };

    expect(input.promptInput(message, stub)).toEqual(3);
  });

});
