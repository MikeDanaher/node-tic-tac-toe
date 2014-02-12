var board = require('../src/board');
var input = require('../src/input');

describe('input', function() {
    describe('prompt', function() {
        it('displays the prompt', function() {
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
        it('calls the callback with the number entered', function(done) {
            var line = '500\n';
            var callback = function(value) {
                expect(value).toBe(500);
                done();
            };

            input.promptForNumber('Enter number of cookies:', callback, process.stdin, process.stdout);

            process.stdin.emit('data', line);
        });
    });
});
