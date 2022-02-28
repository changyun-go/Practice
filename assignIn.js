const assignIn = function (obj) {
  for (let i = 1; i < arguments.length; i++) {
    const src = arguments[i];

    for (const key in src) {
      obj[key] = src[key];
    }
  }

  return obj;
};

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

assignIn({ 'a': 0 }, new Foo, new Bar); // { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
