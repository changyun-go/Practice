// const chunk = function (array, size) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (i % size === 0) {
//       result.push(array.slice(i, i + size));
//     }
//   }

//   return result;
// };

const chunk = function (array, size) {
  const result = [];
  let chunkArr = [];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    chunkArr.push(array[i]);
    count++;
    if (count === size || i === array.length - 1) {
      result.push(chunkArr);
      chunkArr = [];
      count = 0;
    }
  }

  return result;
};

console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)); // [['a', 'b', 'c'], ['d']]
