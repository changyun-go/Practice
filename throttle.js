const throttle = function (func, wait) {
  let allow = true;

  return function () {
    if (allow) {
      func.apply(this, arguments);
      allow = false;

      setTimeout(function () {
        allow = true;
      }, wait);
    }
  };
};

function foo () {
  console.log('foo');
}

const throttledFoo = throttle(foo, 1000);

setTimeout(function () {
  throttledFoo();
}, 0); // foo

setTimeout(function () {
  throttledFoo();
}, 100);

setTimeout(function () {
  throttledFoo();
}, 1100); // foo
