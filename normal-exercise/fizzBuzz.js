let num = 23;
// Type your code below
console.log("Welcome to FizzBuzz!");
for (i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    console.log("FizzBuzz");
  } else if (i % 7 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (!(i % 3 === 0) && String(i).includes("3")) {
    console.log("Almost Fizz");
  } else {
    console.log(i);
  }
}
