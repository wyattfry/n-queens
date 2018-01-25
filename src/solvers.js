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



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // instantiate the board
      // var board = new Board(matrix);
  // make a variable called rooksPlaced
  // make a variable called startingSpace and assign [0,0]

  // findNextConflictFreeSpace (space [row, col])
    // if end of board is reached
      // remove all rooks from board
      // set rooksPlaced equal to zero
      // set startingSpace = nextSpace(startingSpace)
      // if startingSpace has reached end of board
        // return
    // place Rook on space
    // if hasAnyRooksConflicts returns false
      // increment rooksPlaced
      // if rooksPlaced equal to n
        // return board
      // else (need more rooks)
        // call findNextConflictFreeSpace(nextSpace(currentSpace))
    // if hasAnyRooksConflicts returns true
      // remove Rook 
      // call findNextConflictFreeSpace(nextSpace(currentSpace))

    // call findNextConflictFreeSpace(startingSpace)

  // function next space
    // input: takes in row, col as argument as integers
    // if next space is undefined, return empty array
    // output: returns row, col of next space as array [row, col]

  return solution;
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
