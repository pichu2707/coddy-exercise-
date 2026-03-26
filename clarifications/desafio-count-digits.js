let arr = "hola2025";

function countDigits(arr) {
  const digi = "1234567890";
  let numbers = 0;
  for (const char of arr) {
    if (digi.includes(char)) {
      numbers++;
    }
  }
  return numbers;
}

console.log(countDigits(arr));
