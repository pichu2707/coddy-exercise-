function gcd(firstNumber: number, secondNumber: number): number {
  firstNumber = Math.abs(firstNumber);
  secondNumber = Math.abs(secondNumber);

  if (secondNumber === 0) {
    return firstNumber;
  }

  return gcd(secondNumber, firstNumber % secondNumber);
}

console.log(`MCD de 48 y 18: ${gcd(48, 18)}`);
