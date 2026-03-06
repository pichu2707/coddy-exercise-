function changeElement(arr, index, newElement) {
  arr[index] = newElement;
  return arr;
}

console.log(changeElement([1, 2, 3], 0, 9));
