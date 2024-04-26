function read(n) {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
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
      sudoku[i][j] = +sudoku[i][j]
      // for (let k = 0; k < sudoku[i][j].length; k++) {
      //   if (sudoku[i][j][k] !== "number") {
      //     Number(sudoku[i][j][k]);
      //     console.log(sudoku[i][j][k]);
      //   }
      // }
    }
  }

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  return sudoku;
}
console.table(solve());

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
