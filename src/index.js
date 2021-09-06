module.exports = solveSudoku = (matrix) => {
  const getBox = (number) => Math.floor(number / 3) * 3;

  const getEmpty = (m) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (m[i][j] === 0) return [i, j];
      }
    }
  };

  const entry = getEmpty(matrix);

  if (!entry) return matrix;

  for (let num = 1; num <= 9; num++) {
    const x = getBox(entry[0]);
    const y = getBox(entry[1]);
    let result = true;
    let i = 0;
    while (i < 3) {
      for (let j = 0; j < 3; j++) {
        if (matrix[x + i][y + j] === num) {
          result = false;
          break;
        }
      }
      i++;
    }

    if (
      !matrix[entry[0]].find((item) => item === num) &&
      !matrix.find((item) => item[entry[1]] === num) &&
      result
    ) {
      matrix[entry[0]][entry[1]] = num;
      solveSudoku(matrix);
    }
  }

  if (getEmpty(matrix)) matrix[entry[0]][entry[1]] = 0;

  return matrix;
};
