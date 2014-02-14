var Winner = {};

Winner.check = function(winsArray) {
    var isWinner = false;

    for (var i = 0; i < winsArray.length; i++) {
        var test = winsArray[i].join('');
        if (test === 'xxx' || test === 'ooo') {
            isWinner = true;
            break;
        }
    }

    return isWinner;

};

module.exports = Winner;
