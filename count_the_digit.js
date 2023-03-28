function nbDig(n, d) {
  // calculate square numbers from 0 to n
  let squareNmbrs = "";
  for (let currentNumber = 0; currentNumber <= n; currentNumber++) {
    squareNmbrs += currentNumber ** 2;
  }
  let counter = 0;
  for (i = 0; i < squareNmbrs.length; i++) {
    if (squareNmbrs.charAt(i) == d) {
      counter++;
    }
  }
  return counter;
}

module.exports = nbDig;
