//Escribe una función llamada processArray que tome un arreglo de números como argumento. La función debe hacer lo siguiente:
//
// Elimina el último elemento del arreglo.
// Agrega el número 10 al final del arreglo.
// Verifica si el arreglo incluye el número 5. Si lo hace, reemplázalo con el número 50.
// Invierte el orden de los elementos en el arreglo.
// Devuelve el arreglo modificado.
let arr = [1, 2, 3, 4, 5];

function processArray(arr) {
  arr.pop();
  arr.push(10);
  let found = arr.find((item) => {
    item === 5;
  });
  if (found !== undefined) {
    let indice = arr.indexOf(5);
    if (indice !== -1) {
      arr[indice] = 5;
    }
  }
  arr.reverse();
  console.log(arr);
}

console.log(processArray(arr));
