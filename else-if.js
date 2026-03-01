let wind = parseInt(inp); // don't change this line
let condition = "unset";
// type your code below
if (wind < 8) {
  condition = "calm";
} else if (wind >= 8 && wind <= 31) {
  condition = "breeze";
} else if (wind >= 32 && wind <= 63) {
  condition = "gale";
} else {
  condition = "storm";
}
// don't change the line below
console.log(`condition = ${condition}`);
