var game = require('../src/twoPlayerTicTacToe');
var board = require('../src/board');
var output = require('../src/output');
var HumanPlayer = require('../src/human');

describe('game', function() {

    describe('new game', function() {

        beforeEach(function() {
            spyOn(board, 'reset');
            spyOn(game, 'playTurn');
            game.newGame();
        });

        it('clears the board', function() {
            expect(board.reset).toHaveBeenCalled();
        });

        it('calls the start game function with the new players', function() {
            var currentPlayer = new HumanPlayer('x'),
                opponent = new HumanPlayer('o');

            expect(game.playTurn).toHaveBeenCalledWith(currentPlayer, opponent);
        });
    });

    describe('play game', function() {

        it('plays the game until x wins', function() {
            var mockPlayer1 = new HumanPlayer('x'),
                player1Moves = [1, 3, 5, 7];

            var mockPlayer2 = new HumanPlayer('o'),
                player2Moves = [2, 4, 6, 8];

            spyOn(mockPlayer1, 'getMove').andCallFake(function(openCells, moveCallback) {
                moveCallback(player1Moves.shift());
            });

            spyOn(mockPlayer2, 'getMove').andCallFake(function(openCells, moveCallback) {
                moveCallback(player2Moves.shift());
            });

            spyOn(game, 'endGame');

            game.playTurn(mockPlayer1, mockPlayer2);

            expect(board.getHorizontalRows()).toEqual([
                ['x', 'o', 'x'],
                ['o', 'x', 'o'],
                ['x', ' ', ' ']
            ]);
            expect(game.endGame).toHaveBeenCalledWith('x');
        });
    });
});
