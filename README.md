### node-tic-tac-toe

A test driven, human vs. computer, tic-tac-toe game using node and jasmine-node. The computer player is implemented using minimax and thus should always win or tie the game.

The game is started by running 'node startGame.js.'. The human can choose any symbol they like for themselves and the computer. The board is referenced using numbers 1 through 9, with 1 being in the upper left and 9 being the bottom right. 

 1 | 2 | 3 
 4 | 5 | 6 
 7 | 8 | 9 

Currently, the human will always go first.

## tests

To run tests, type 'npm test' in the root directory. Tests can also be run using 'grunt' which also runs jshint and jsbeautifier to catch any syntax errors and ensure clean javascript. 
