var Winner = false;

exports.addArray = function(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 'x'){
      total += 1;
    }else if(arr[i] === 'o') {
      total += 4;
    }else {
      total = total;
    }
  }
  return total;
};

exports.check = function(arraySet) {
  for(var j = 0; j < arraySet.length; j++) {
    var sum = exports.addArray(arraySet[j]);
    if(sum === 3){
      Winner = true;
      break;
    }else if(sum === 12){
      Winner = true;
      break;
    }
  }
  return Winner;
};

exports.reset = function() {
  Winner = false;
};
