// Crea un programa que reciba dos arrays de números como entrada (dado) e impriman un nuevo array de todos los elementos que están ene lprimer array pero no están en el segundo.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 6];

function includesElements(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}

console.log(includesElements(arr1, arr2));
