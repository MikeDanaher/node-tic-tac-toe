var output = require('../src/output');

describe('output', function() {

    it('prints a message to the default output', function() {
        spyOn(output, 'printString');
        output.printString('This is a message');

        expect(output.printString).toHaveBeenCalledWith('This is a message');
    });

    it('prints the board using the horizontal rows', function() {
        spyOn(output, 'printString');
        var horizontalRows = [
            ['x', 'x', ' '],
            ['o', 'o', 'x'],
            [' ', 'x', 'o']
        ];
        output.printBoard(horizontalRows);

        expect(output.printString).toHaveBeenCalledWith('\n x | x |   \n------------\n o | o | x \n------------\n   | x | o \n');
    });

});
