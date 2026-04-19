//Crea una función llamada `reverseVowels` que tome una cadena como parámetro y devuelva la cadena con todas sus vocales (a, e, i, o ,u ) invertidas en posición.
//Los caracteres no vocales deben permanecer en sus posiciones originales.
//
//Por ejemplo:
//- "hello" debería devolver "holle" (porque 'e' y 'o' intercambian posiciones)
//- "programming" debería devolver "prigrammong" (porque 'o', 'a', e 'i' se invierten)
//
//La función debe ser sensible a mayúsculas y minúsculas (tratar las vocales en mayúscula de manear diferente)

function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  let chars = str.split("");

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    if (!vowels.includes(chars[left])) {
      left++;
      continue;
    }
    if (!vowels.includes(chars[right])) {
      right--;
      continue;
    }

    // swap
    [chars[left], chars[right]] = [chars[right], chars[left]];

    left++;
    right--;
  }

  return chars.join("");
}

console.log(reverseVowels("hello"));
