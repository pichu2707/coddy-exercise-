//Escribe un programa que recibe un arreglo de números como entrada (dado), e imprime un arreglo de los números que están por debajo de 50 o son divisibles por 5. Usa el método forEach.
//

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 55, 60, 65, 100, 223];
result = [];
arr.forEach((arr, index) => {
  if (arr < 50 || arr%5==0) {
    result.push(arr);
  }
});
console.log(result);
