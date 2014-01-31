var board = require('../board');

describe('board', function() {

  beforeEach(function() {
    board.reset();
  });

  it('gets empty horizontal rows', function() {
    expect(board.getHorizontalRows()).toEqual([['','',''],['','',''],['','','']]);
  });

  it('gets filled horizontal rows', function() {
    board.selectCell(1,'x');
    board.selectCell(5,'o');
    board.selectCell(8,'x');

    expect(board.getHorizontalRows()).toEqual([['x','',''],['','o',''],['','x','']]);
  });

  it('gets empty vertical columns', function() {
    expect(board.getVerticalCols()).toEqual([['','',''],['','',''],['','','']]);
  });

  it('gets filled vertical columns', function() {
    board.selectCell(2,'x');
    board.selectCell(4,'o');
    board.selectCell(9,'x');

    expect(board.getVerticalCols()).toEqual([['','o',''],['x','',''],['','','x']]);
  });

  it('gets empty diagonals', function() {
    expect(board.getDiagonals()).toEqual([['','',''],['','','']]);
  });

  it('gets filled diagonals', function() {
    board.selectCell(3,'x');
    board.selectCell(5,'o');
    board.selectCell(7,'x');

    expect(board.getDiagonals()).toEqual([['','o',''],['x','o','x']]);
  });

  it('gets the board with empty current state', function() {
    expect(board.getState()).toMatch('');
  });

  it('gets the board with filled current state', function() {
    board.selectCell(4,'o');
    board.selectCell(2,'x');

    expect(board.getState()).toContain('x');
    expect(board.getState()).toContain('o');
  });

  it('gets available cells', function() {
    expect(board.getOpenCells()).toMatch(/[1-9]/);
  });

  it('selects an open cell', function() {
    expect(board.selectCell(1,'x')).toEqual('success');
    expect(board.selectCell(8,'o')).toEqual('success');
  });

  it('selects a cell already taken', function() {
    board.selectCell(3,'x');
    board.selectCell(8,'o');

    expect(board.selectCell(3,'x')).toEqual('cell taken, try another');
    expect(board.selectCell(8,'x')).toEqual('cell taken, try another');
  });

  it('does not allow the caller to modify the board state', function() {
    var state = board.getState();
    expect(state[1]).toBe('');

    state[1] = 'x';

    var currentState = board.getState();
    expect(currentState[1]).toBe('');
  });

});

