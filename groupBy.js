const groupBy = function (collection, func) {
  const result = {};

  for (let i = 0; i < collection.length; i++) {
    let key = func(collection[i]);

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(collection[i]);
  }

  return result;
};

groupBy([6.1, 4.2, 6.3], Math.floor); // { '4': [4.2], '6': [6.1, 6.3] }
