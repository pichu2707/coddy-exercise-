let numbers = [1, 2, 3, 4, 5];

let numbers2 = [6, 7, 8];
let con = numbers.concat(numbers2);
console.log(con);
let joinArray = con.join(", ");
console.log(joinArray);
console.log(numbers.slice(0, 3));
let cambio = numbers.splice(1, 1, 99);
console.log(numbers);
