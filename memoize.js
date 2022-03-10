const memoize = function (func) {
  const cache = [];

  return function (obj) {
    const keys = [];

    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;

      keys.push(key);
    }

    if (cache[keys]) {
      return cache[keys];
    }

    const result = func(obj);

    cache[keys] = result;

    return result;
  };
};

function getValues (obj) {
  const result = [];

  for (const key in obj) {
    result.push(obj[key]);
  }

  return result;
}

const object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };

const values = memoize(getValues);

console.log(values(object)); // [1, 2]
console.log(values(other)); // [3, 4]

object.a = 2;
console.log(values(object)); // [1, 2]
