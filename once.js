const once = function (func) {
  let allow = true;

  return function () {
    if (allow) {
      func(...arguments);
      allow = false;
    }
  };
};

const initialize = once(foo);

initialize(); // foo
initialize();

function foo () {
  console.log('foo');
}
