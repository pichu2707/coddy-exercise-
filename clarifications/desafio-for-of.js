// Contador de vocales en palabras

let str = "hello";
let count = 0;
const vowels = "aeiouAEIOU";
function countVowels(str) {
  for (const char of str) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  console.log(count);
}

countVowels(str);
