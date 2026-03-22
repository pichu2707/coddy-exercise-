//La iteración significa recorrer los elementos uno por uno en una secuencia. Con los arrays, podemos acceder a cada elemento de manera sistemática utilizando diferentes métodos.
//
// La forma más común de iterar a través de un array es utilizando un bucle for junto con la propiedad .length:

let arr = ["Bob", "Josh", "Alexander", "Rachel", "Jax"];
let words = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    words.push(arr[i]);
  }
}
console.log(words);
