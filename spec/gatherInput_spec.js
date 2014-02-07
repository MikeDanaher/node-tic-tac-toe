var board = require('../src/board');
var input = require('../src/gatherInput');
var message = 'Make a move by entering an open cell: ';

describe('input', function() {
    describe('prompt', function() {
        xit('displays the prompt', function() {
            var mockOutput = {
                write: jasmine.createSpy('write')
            };

            input.prompt('My prompt text here:', function() {}, process.stdin, mockOutput);

            expect(mockOutput.write).toHaveBeenCalledWith('My prompt text here:');
        });

        it('calls the callback with the enter line', function(done) {
            var line = '4\n';
            var callback = function(value) {
                expect(value).toBe('4');
                done();
            };

            input.prompt('My prompt text here:', callback, process.stdin, process.stdout);

            process.stdin.emit('data', line);
        });
    });

    describe('promptForNumber', function() {
        xit('calls the callback with the number entered', function(done) {
            var line = '500\n';
            var callback = function(value) {
                expect(value).toBe(500);
                done();
            };

            input.promptForNumber('Enter number of cookies:', callback, process.stdin, process.stdout);

            process.stdin.emit('data', line);
        });
    });

    // xit('prompts user to enter a new cell', function(){
    //   spyOn(input, "promptInput");

    //   input.promptInput(message);

    //   expect(input.promptInput).toHaveBeenCalled();
    // });

    // xit('gets the value entered by the user', function() {
    //   var stubReturn = function(input) {
    //     expect(input).toEqual(3);
    //   };

    //  var stub = function(message, callback) {
    //     if(message) {
    //       callback(3);
    //     }
    //   };
    // });

    // xit('converts the input string to a number', function() {
    //   expect(true).toBe(false);
    // });
});
