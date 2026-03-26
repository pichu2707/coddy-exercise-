let n = 7;

if (n % 2 === 1 && n < 1000) {
  for (let i = 1; i <= n; i += 2) {
    console.log("*".repeat(i));
  }
}
