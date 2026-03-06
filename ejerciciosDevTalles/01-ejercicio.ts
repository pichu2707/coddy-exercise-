function atLeastOneTrue(firstValue: boolean, secondValue: boolean): boolean {
  if (firstValue === true || secondValue === true) {
    return true;
  }
  return false;
}

atLeastOneTrue(true, false);
