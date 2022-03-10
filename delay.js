const delay = function (func, wait, arg) {
  setTimeout(function () {
    func(arg);
  }, wait);
};

delay(function(text) {
  console.log(text); 
}, 1000, 'later'); // (1초) later
