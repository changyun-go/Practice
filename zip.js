const zip = function () {
  const arg = [...arguments];
  const result = [];

  for (let i = 0; i < arguments[0].length; i++) {
    const mergeArr = [];

    for (let j = 0; j < arg.length; j++) {
      mergeArr.push(arg[j][i]);
    }

    result.push(mergeArr);
  }

  return result;
};

console.log(zip(['a', 'b'], [1, 2], [true, false])); // [['a', 1, true], ['b', 2, false]]
