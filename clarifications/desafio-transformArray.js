// Crea una función llamada transformArray que:
//
// Toma un array de números como su único argumento.
// Elimina todos los números menores que 10.
// Multiplica los números restantes por 2.
//

// let arr = [10, 15, 20, 25];
let arr = [-5, 12, -10, 20, 0, 15];

function transformArray(arr) {
  let result = arr.filter((element) => element >= 10);
  let multiply = result.map((element) => element * 2);
  return multiply;
}

console.log(transformArray(arr));
