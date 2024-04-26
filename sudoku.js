
const { log } = require("console");

function read(n) {
  const fs = require("fs");
  let arraySud1 = [];
  const data = fs
    .readFileSync("./puzzles.txt", "utf-8")
    .trim()
    .split("\n")
    .map((el) => el.split(""));
  for (let i = 0; i < data[n].length; i += 9) {
    arraySud1.push(data[n].slice(i, i + 9));
  }

  return arraySud1;
}

function solve() {
  const sudoku = read(0);
  for (let i = 0; i < sudoku.length; i += 1) {
    for (let j = 0; j < sudoku.length; j++) {
      if (sudoku[i][j] === "-") {
        sudoku[i][j] = Math.floor(Math.random() * 8) + 1;
      }
      sudoku[i][j] = +sudoku[i][j];
      // for (let k = 0; k < sudoku[i][j].length; k++) {
      //   if (sudoku[i][j][k] !== "number") {
      //     Number(sudoku[i][j][k]);
      //     console.log(sudoku[i][j][k]);
      //   }
      // }
    }
  }


  return sudoku;
}
console.table(solve());
function isSolved() {
  const trueSudok = solve();
  console.table(trueSudok);
  for (el of trueSudok) {
    const elS = [...new Set(el)].toString();
    if (el.toString() !== elS) {
      isSolved();
    }
    return trueSudok;
  }
}
console.table(isSolved());
function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
