const abc = function(a, b, c) {
  return [a, b, c];
};

const curry = function (func) {
  let arr = [];

  return function inner () {
    arr.push(...arguments);
    if (arr.length === func.length) {
      let arg = arr;

      arr = [];
      return func.apply(null, arg);
    }
    return inner;
  };
};

const curried = curry(abc);

console.log(curried(1)(2)(3)); // [1, 2, 3]
console.log(curried(1, 2)(3)); // [1, 2, 3]
console.log(curried(1, 2, 3)); // [1, 2, 3]
