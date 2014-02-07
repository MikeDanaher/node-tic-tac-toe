var board = require('../board');

describe('board', function() {

  beforeEach(function() {
    board.reset();
  });

  it('gets empty horizontal rows', function() {
    expect(board.getHorizontalRows()).toEqual([[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
  });

  it('gets filled horizontal rows', function() {
    board.update(1,'x');
    board.update(5,'o');
    board.update(8,'x');

    expect(board.getHorizontalRows()).toEqual([['x',' ',' '],[' ','o',' '],[' ','x',' ']]);
  });

  it('gets empty vertical columns', function() {
    expect(board.getVerticalCols()).toEqual([[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
  });

  it('gets filled vertical columns', function() {
    board.update(2,'x');
    board.update(4,'o');
    board.update(9,'x');

    expect(board.getVerticalCols()).toEqual([[' ','o',' '],['x',' ',' '],[' ',' ','x']]);
  });

  it('gets empty diagonals', function() {
    expect(board.getDiagonals()).toEqual([[' ',' ',' '],[' ',' ',' ']]);
  });

  it('gets filled diagonals', function() {
    board.update(3,'x');
    board.update(5,'o');
    board.update(7,'x');

    expect(board.getDiagonals()).toEqual([[' ','o',' '],['x','o','x']]);
  });

  it('gets empty possible wins', function() {
    expect(board.getPossibleWins()).toEqual([[' ',' ',' '],[' ',' ',' '],[' ',' ',' '],[' ',' ',' '],[' ',' ',' '],[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]);
  });

  it('gets filled possible wins', function() {
    board.update(3,'x');
    board.update(5,'o');
    board.update(7,'x');

    expect(board.getPossibleWins()).toEqual([[' ',' ','x'],[' ','o',' '],['x',' ',' '],[' ',' ','x'],[' ','o',' '],['x',' ',' '],[' ','o',' '],['x','o','x']]);
  });

  it('gets the board with empty current state', function() {
    expect(board.getState()).toMatch(' ');
  });

  it('gets the board with filled current state', function() {
    board.update(4,'o');
    board.update(2,'x');

    expect(board.getState()).toContain('x');
    expect(board.getState()).toContain('o');
  });

  it('gets available cells', function() {
    expect(board.getOpenCells()).toMatch(/[1-9]/);
  });

  it('selects an open cell', function() {
    board.update(1,'x');
    board.update(8,'o');

    var boardState = board.getHorizontalRows();

    expect(boardState[0][0]).toEqual('x');
    expect(boardState[2][1]).toEqual('o');
  });

  it('does not allow the caller to modify the board state', function() {
    var state = board.getState();
    expect(state[1]).toBe(' ');

    state[1] = 'x';

    var currentState = board.getState();
    expect(currentState[1]).toBe(' ');
  });

});

