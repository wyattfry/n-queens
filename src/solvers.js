/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.returnBoard = function(n) {
  var innerFunction = function(x) {
    return new Board({n:x});
  }
  return innerFunction(n);
}

window.findNRooksSolution = function (n) {
  var board = new Board({ n: n });
  console.log('board', board);
  var rooksPlaced = 0;
  var startingRowCol = [0, 0];
  var temp = -1;

  var findNextConflictFreeSpace = function (rowCol) {

    if (!board._isInBounds(rowCol[0],rowCol[1])) {
      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          if (board.get(i)[j]) {
            board.togglePiece(i, j);
          }
        }
      }
      rooksPlaced = 0;
      startingRowCol = nextSpace(rowCol);
      if (!board._isInBounds(startingRowCol[0], startingRowCol[1])) {
        
        return;
      } else {
        findNextConflictFreeSpace(startingRowCol);
      }
    } else {
      board.get(rowCol[0])[rowCol[1]] = 1;

      if (!board.hasAnyRooksConflicts()) {
        rooksPlaced++;
        if (rooksPlaced === n) {
          console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
          return;
        } else {
          temp = nextSpace(rowCol);
          findNextConflictFreeSpace(temp);
        }
      } else {
        board.get(rowCol[0])[rowCol[1]] = 0;
        temp = nextSpace(rowCol);
        findNextConflictFreeSpace(temp);
      }
    }
  }

  var nextSpace = function (rowCol) {
    if (rowCol[1] === n - 1 && rowCol[0] === n - 1) {
      return [-1, -1];
    }
    if (rowCol[1] === n - 1) {
      return [rowCol[0] + 1, 0];
    }
    return [rowCol[0], rowCol[1] + 1];
  }

  findNextConflictFreeSpace(startingRowCol);

  return board.rows()

};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
