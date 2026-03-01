let n = 36;

for (let i = 0; i <= n; i++) {
  for (let j = n; j >= 1; j--) {
    if (i * j === n) {
      console.log(i, j);
    }
  }
}
