// Get the command from the user
let command = "start";

// Create a variable to store the message
let message;

switch (command) {
  // Write your code here
  case "start":
    console.log("System starting");
    break;
  case "stop":
    console.log("System stopping");
    break;
  case "pause":
    console.log("System paused");
    break;
  case "resume":
    console.log("Sustem resuming");
    break;
  default:
    console.log("Unknown command");
    break;
}

// Print the message
console.log(message);
