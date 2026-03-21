//Realiza las siguientes tareas:
//Ordena el array en orden ascendente usando un método.
// Invierte el orden del array usando un método.
// Encuentra el índice de la primera ocurrencia del número 30 y guárdalo en una variable llamada firstIndex.
// Encuentra el índice de la última ocurrencia del número 10 y guárdalo en una variable llamada lastIndex.
// Verifica si el número 100 está incluido en el array y guarda el resultado en una variable llamada hasHundred.
// Finalmente, imprime lo siguiente:
//
// El array actualizado después de ordenar e invertir.
// El valor de firstIndex.
// El valor de lastIndex.
// El valor de hasHundred

let numbers = [40, 10, 30, 20, 50, 30, 10];
// numbers.sort((a, b) => b - a);
// console.log(numbers);
numbers.sort();
numbers.reverse();
console.log(numbers);
let firstIndex = numbers.findIndex((element) => element === 30);
console.log(firstIndex);
let lastIndex = numbers.lastIndexOf(10);
console.log(lastIndex);
let hasHundred = numbers.includes(100);
console.log(hasHundred);
