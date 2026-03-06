function swapEnds(arr) {
  // Write code here
  let firstArr = arr.shift();
  let lastArr = arr.pop();
  arr.unshift(lastArr);
  arr.push(firstArr);
  return arr;
}

console.log(swapEnds([1, 2, 3, 4]));
