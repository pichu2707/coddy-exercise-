// Contado de p's
let text = "Python programming";
const ps = "pP";
let count = 0;

function countsP(params) {
  for (const char of text) {
    if (ps.includes(char)) {
      count += 1;
    }
  }
  console.log(count);
}
countsP(text);
