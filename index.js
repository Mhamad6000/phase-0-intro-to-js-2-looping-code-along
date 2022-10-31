// Code your solutions in this file
function writeCards(arr, name) {
  const newArray = [];
  for (let i of arr) {
    newArray[
      arr.indexOf(i)
    ] = `Thank you, ${i}, for the wonderful surprise gift!`;
  }
  return newArray;
}
function countDown(number) {
  for (number; number >= 0; number--) {
    console.log(number);
  }
}
