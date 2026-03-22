const array = [1, 2, 3, 4, 5, 6, 7];
function given(array) {
  if (array.length % 2 == 0) {
    console.log(array.slice(array.length / 2 - 1, array.length / 2 + 1));
  } else {
    console.log(
      array.slice(
        Math.floor(array.length / 2 - 1),
        Math.floor(array.length / 2) + 2,
      ),
    );
  }
}
given(array);
