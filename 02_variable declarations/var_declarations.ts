var a = 10;

function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    console.log(b);
    return b;
  };
}

var g = f();
g();

function f2() {
  var a = 1;

  a = 2;
  var b = g();
  a = 3;

  return b;

  function g() {
    return a;
  }
}

console.log(f2());
