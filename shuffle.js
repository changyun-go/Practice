const shuffle = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const random = (Math.floor(Math.random() * arr.length));
    const temp = arr[i];

    arr[i] = arr[random];
    arr[random] = temp;
  }

  return arr;
};

console.log(shuffle([1, 2, 3, 4])); // [4, 1, 2, 3], [1, 3, 4, 2], etc.
