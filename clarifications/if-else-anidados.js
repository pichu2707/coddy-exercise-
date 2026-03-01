let age = 11; // Don't change this line
let has_adult = "true"; // Don't change this line

if (age >= 10) {
  if (age >= 10 && age < 13 && has_adult === "true") {
    console.log("You can enter with adult supervision!");
  } else if (age >= 10 && age < 13 && has_adult === "false") {
    console.log("Sorry, you need an adult with you");
  } else if (age >= 13) {
    console.log("You can enter by yourself!");
  }
} else {
  console.log("Sorry, you are too young");
}
