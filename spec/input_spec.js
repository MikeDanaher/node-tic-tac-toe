var input = require('../src/input');

describe('input', function() {
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

    it('returns a number from user prompt', function(done) {
        var line = '4\n';
        var callback = function(value) {
            expect(value).toBe(4);
            done();
        };

        input.promptForNumber('My prompt text here:', callback, process.stdin, process.stdout);

        process.stdin.emit('data', line);
    });

});
