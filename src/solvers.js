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



window.findNRooksSolution = function (n) {
  // instantiate the board
  var board = new Board({ n: n });
  // make a variable called rooksPlaced
  var rooksPlaced = 0;
  // make a variable called startingSpace and assign [0,0]
  var startingRowCol = [0, 0];
  var temp = -1;

  // findNextConflictFreeSpace (space [row, col])
  var findNextConflictFreeSpace = function (rowCol) {
    // if end of board is reached

    //var next = nextSpace(board, row, col);
    if (!board._isInBounds(rowCol[0],rowCol[1])) {
      // remove all rooks from board
      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          if (board.get(i)[j]) {
            board.togglePiece(i, j);
          }
        }
      }
      // set rooksPlaced equal to zero
      rooksPlaced = 0;
      // set startingSpace = nextSpace(startingSpace)
      //[startRow, startCol] = nextSpace(board, row, col); // es6 destructuring, if bugs occur, check this
      startingRowCol = nextSpace(board, rowCol);
      // if startingSpace has reached end of board
      // return
      if (!board._isInBounds(startingRowCol[0], startingRowCol[1])) {
        return board;
      } else {
        findNextConflictFreeSpace(startingRowCol);
      }
    } else {
      // place Rook on space
      board.get(rowCol[0])[rowCol[1]] = 1;

      // if hasAnyRooksConflicts returns false
      if (!board.hasAnyRooksConflicts()) {
        // increment rooksPlaced
        rooksPlaced++;
        // if rooksPlaced equal to n
        // return board
        if (rooksPlaced === n) {
          console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
          return board;
          // else (need more rooks)
          // call findNextConflictFreeSpace(nextSpace(currentSpace))
        } else {
          temp = nextSpace(board, rowCol);
          findNextConflictFreeSpace(temp);
        }
        // if hasAnyRooksConflicts returns true
        // remove Rook 
        // call findNextConflictFreeSpace(nextSpace(currentSpace))
      } else {
        board.get(rowCol[0])[rowCol[1]] = 0;
        temp = nextSpace(board, rowCol);
        findNextConflictFreeSpace(temp);
      }
    }
  }

  // function next space
  // input: takes in row, col as argument as integers
  // if next space is undefined, return empty array
  // output: returns row, col of next space as array [row, col]
  var nextSpace = function (board, rowCol) {
    if (rowCol[1] === n - 1 && rowCol[0] === n - 1) {
      return [-1, -1];
    }
    if (rowCol[1] === n - 1) {
      return [rowCol[0] + 1, 0];
    }
    return [rowCol[0], rowCol[1] + 1];
  }

  findNextConflictFreeSpace(startingRowCol);
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
