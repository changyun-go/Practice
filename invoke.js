const invoke = function (obj, path) {
  const arg = [...arguments].slice(2, arguments.length);
  const result = eval(`obj.${path}(...arg)`);

  return result;
};

const object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

console.log(invoke(object, 'a[0].b.c.slice', 1, 3)); // [2, 3]
