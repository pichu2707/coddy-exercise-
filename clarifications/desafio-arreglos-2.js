/*Crea una función llamada findElement que recibe dos argumentos:

Un arreglo de números
Un número a buscar
La función debe hacer lo siguiente:

Verifica si el arreglo incluye el número usando el método includes.
Si el número se encuentra, devuelve el índice de su primera ocurrencia usando el método indexOf.
Si el número no se encuentra, devuelve -1.
Por ejemplo:

findElement([1, 2, 3, 4, 5], 3) debería devolver 2
findElement([1, 2, 3, 4, 5], 6) debería devolver -1*/
function findElement(arr, num) {
  let includesNum = arr.includes(num);
  if (includesNum == true) {
    let position = arr.indexOf(num);
    console.log(position);
  } else {
    console.log(-1);
  }
}
findElement([1, 2, 3, 4, 5], 3);
