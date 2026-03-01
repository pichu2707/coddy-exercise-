let n = 6; // Don't change this line

// Write your code below
for (let i = 1; i < n; i++) {
  for (let j = n - 1; j >= 1; j--) {
    if (j === n - i) {
      console.log(i, j);
    }
  }
}
