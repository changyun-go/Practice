const difference = function () {
  const arg = [...arguments];

  const result = arg[0].filter(function (elem) {
    for (let i = 1; i < arg.length; i++) {
      if (!arg[i].includes(elem)) {
        return true;
      }
    }
  });

  return result;
};

console.log(difference([2, 1, 5, 4], [2, 3, 5, 6])); // [1, 4]
