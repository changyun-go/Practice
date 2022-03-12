const intersection = function () {
  const arg = [...arguments];

  const result = arg[0].filter(function (elem) {
    let count = 0;

    for (let i = 1; i < arg.length; i++) {
      if (arg[i].includes(elem)) {
        count++;
      }

      if (count === arg.length - 1) {
        return true;
      }
    }
  });

  return result;
};

console.log(intersection([2, 1, 5], [2, 3, 5])); // [2, 5]
