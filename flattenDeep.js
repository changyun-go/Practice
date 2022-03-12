const flattenDeep = function (arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flattenDeep(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(flattenDeep([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
