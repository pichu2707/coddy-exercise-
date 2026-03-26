// Se te da un array numbers = [1, 2, 3, 4, 5]. Realiza los siguientes pasos e imprime los resultados directamente:
//
// Usa map() para crear un nuevo array donde cada número se multiplique por 3, e imprime el resultado.
// Usa filter() para crear un nuevo array que solo incluya números mayores que 3, e imprime el resultado.

let numbers = [1, 2, 3, 4, 5];
let mapead = numbers.map(num => num*3);
console.log(mapead)
let filtrado = numbers.filter( num => num>3);
console.log(filtrado)
