const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

const merge = function (obj, src) {
  const objKey = Object.keys(obj);
  const srcKey = Object.keys(src);

  for (let i = 0; i < objKey.length; i++) {
    for (let j = 0; j < srcKey.length; j++) {
      if (objKey[i] === srcKey[j]) {
        if (typeof(obj[objKey[i]]) === 'object' && typeof(src[srcKey[j]]) === 'object') {
          obj[objKey[i]] = merge(obj[objKey[i]], src[srcKey[j]]);
          srcKey.splice(j, 1);
        }
      } else {
        obj[srcKey[j]] = src[srcKey[j]];
        srcKey.splice(j, 1);
      }
    }
  }

  return obj;
};

console.log(merge(object , other)); // { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
