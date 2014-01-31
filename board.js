var Board = {};

exports.getHorizontalRows = function() {
  var horizontalRows = [];
  var row = [];
  for(var i in Board){
    if(Board.hasOwnProperty(i)){
      row.push(Board[i]);
        if(row.length === 3){
          horizontalRows.push(row);
          row = [];
        }
    }
  }
  return horizontalRows;
};

exports.getVerticalCols = function() {
  var verticalCols = [];
  var col = [];
  var colOrder = [1,4,7,2,5,8,3,6,9];
  for (i = 0; i < colOrder.length; i++){
    col.push(Board[colOrder[i]]);
    if(col.length === 3){
      verticalCols.push(col);
      col = [];
    }
  }
  return verticalCols;
};

exports.getDiagonals = function() {
  var diagonals = [];
  var dia = [];
  var diaOrder = [1,5,9,3,5,7];
  for (i = 0; i < diaOrder.length; i++) {
    dia.push(Board[diaOrder[i]]);
    if(dia.length === 3){
      diagonals.push(dia);
      dia = [];
    }
  }
  return diagonals;
};

exports.getOpenCells = function() {
  var openCells = [];
  for(var i in Board){
    if(Board.hasOwnProperty(i)){
      if(Board[i] !== 'x' && Board[i] !== 'o'){
        openCells.push(i);
      }
    }
  }
  return openCells;
};

exports.selectCell = function(cell, symbol) {
  var message = '';
  if(Board[cell] !== 'x' && Board[cell] !== 'o'){
    Board[cell] = symbol;
    message = 'success';
  } else {
    message = 'cell taken, try another';
  }
  return message;
};

exports.getState = function() {
  var boardState = [];
  for (var i in Board) {
    if(Board.hasOwnProperty(i)){
      boardState.push(Board[i]);
    }
  }
  return boardState;
};

exports.reset = function() {
  var boardSize = 9;
  for (i = 1; i <= boardSize; i++){
    Board[i] = '';
  };
};

