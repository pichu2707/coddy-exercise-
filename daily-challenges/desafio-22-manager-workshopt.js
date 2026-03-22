//Crea un programa que ayude a gestionar el último día de rebajas del taller. Recibirás los metros cuadrados del taller, el año en que vence el contrato de alquiler y el total de horas de aparcamiento utilizadas por los clientes.
// Calcula la capacidad máxima (suponiendo 0,93 m² por persona), comprueba si el año del contrato es bisiesto y calcula la tarifa de aparcamiento (3 $ por hora). Imprime los tres resultados en líneas separadas.
//

let arr = [95, 1900, 1];
// Read the input values

// TODO: Calculate maximum occupancy (10 square feet per person)
// Hint: Divide square footage by 10
let occupancy = ~~(arr[0] / 10);

console.log(occupancy);
// TODO: Check if the lease year is a leap year
// Hint: A year is a leap year if it's divisible by 4, except for years divisible by 100 (unless also divisible by 400)
if ((arr[1] % 4 == 0 && !(arr[1] % 100 == 0)) || arr[1] % 400 == 0) {
  console.log(true);
} else {
  console.log(false);
}
// TODO: Calculate parking fee ($3 per hour)
// Hint: Multiply parking hours by 3
let price = arr[2] * 3;
console.log(price);
// Print the results on separate lines
// Line 1: Maximum occupancy
// Line 2: "Yes" if leap year, "No" if not
// Line 3: Total parking fee
