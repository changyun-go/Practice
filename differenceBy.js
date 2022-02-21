const differenceBy = function (array, values, func) {
  const result = [];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let elem of values) {
      if (func(array[i]) === func(elem)) continue;
      count++;
      if (count === values.length) {
        result.push(array[i]);
      }
    }
  }

  return result;
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // [1.2]
