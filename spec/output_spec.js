var board = require('../src/board');
var output = require('../src/output');


describe('output', function() {

    it('prints a message to the default output', function() {
        spyOn(output, 'printString');
        output.printString('This is a message');

        expect(output.printString).toHaveBeenCalled();
    });

    it('inserts verticle lines between each value', function() {
        var horizontalRows = [
            ['x', 'o', ' '],
            ['o', 'x', 'o'],
            [' ', 'o', ' ']
        ];

        expect(output.insertVerticles(horizontalRows)).toEqual(['x | o |  ', 'o | x | o', '  | o |  ']);
    });

    it('inserts new lines and horizontal lines between each and returns a string', function() {
        var lines = [
            'x | o |  ',
            'o | x | o',
            '  | o |  '
        ];

        expect(output.insertHorizontals(lines)).toEqual('\n x | o |   \n------------\n o | x | o \n------------\n   | o |   \n');
    });

    it('prints the board from the horizontal rows', function() {
        spyOn(output, 'printBoard');
        var horizontalRows = [
            ['x', 'x', ' '],
            ['o', 'o', 'x'],
            [' ', 'x', 'o']
        ];
        output.printBoard(horizontalRows);

        expect(output.printBoard).toHaveBeenCalled();
    });

});
