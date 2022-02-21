const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

const func = function (prop) {
  return !prop.active;
};

const takeWhile = function (arr, func) {
  const result = [];
  let i = 0;

while (arr[i] && func(arr[i])) {
  result.push(arr[i].user);
  i++;
}

  return result;
};

console.log(takeWhile(users, func)); // ['barney', 'fred']
