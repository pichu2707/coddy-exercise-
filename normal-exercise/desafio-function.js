let n = 1;

function miFuncionDeSuma() {
  for (let j = 1; j <= n; j++) {
    let k = 0;
    for (let i = 0; i <= 10000; i++) {
      k += i;
    }
    console.log(k);
  }
}
miFuncionDeSuma(n);
