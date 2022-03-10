const defaults = function () {
	const obj = arguments[0];

	for (let i = 1; i < arguments.length; i++) {
    for (const key in arguments[i]) {
      if (!arguments[i].hasOwnProperty(key)) continue;

      if (!obj.hasOwnProperty(key)) {
        obj[key] = arguments[i][key];
      }
    }
	}

  return obj;
};

console.log(defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })); // { 'a': 1, 'b': 2 }
