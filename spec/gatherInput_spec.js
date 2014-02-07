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
    var stubReturn = function(input) {
      return input;
    };

   var stub = function(message, callback) {
      if(message) {
        callback(3);
      }
    };

    expect(input.promptInput(message, stubReturn, stub)).toEqual(3);
  });

});
