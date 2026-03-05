const sumOfEvens = (n) => {
  let k = 0;
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      k += i;
    }
  }
  console.log(k);
};

console.log(sumOfEvens(5));
console.log(sumOfEvens(22));
