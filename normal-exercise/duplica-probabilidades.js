let numbers = [1, 2, 3, 4, 5];
function doubleOdds(numbers) {
  return numbers.map((num) => {
    if (num % 2 !== 0) {
      return num * 2;
    }
    return num;
  });
}
