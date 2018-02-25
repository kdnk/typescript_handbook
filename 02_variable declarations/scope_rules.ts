function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }
  // console.log(y); --> これはerror

  //   /Users/kdnk/kdnk/study/typescript_tutorial/02_variable declarations/scope_rules.js:6
  //     console.log(y);
  //                 ^

  // ReferenceError: y is not defined
  //     at f (/Users/kdnk/kdnk/study/typescript_tutorial/02_variable declarations/scope_rules.js:6:17)
  //     at Object.<anonymous> (/Users/kdnk/kdnk/study/typescript_tutorial/02_variable declarations/scope_rules.js:9:13)
  //     at Module._compile (module.js:643:30)
  //     at Object.Module._extensions..js (module.js:654:10)
  //     at Module.load (module.js:556:32)
  //     at tryModuleLoad (module.js:499:12)
  //     at Function.Module._load (module.js:491:3)
  //     at Function.Module.runMain (module.js:684:10)
  //     at startup (bootstrap_node.js:187:16)
  //     at bootstrap_node.js:608:3

  return x;
}

console.log(f(true));
console.log(f(false));

// i was overrided.
function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }

  return sum;
}

sumMatrix([[1, 2], [2, 3]]);

// for (var i = 1; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 100);
// }

for (var i = 0; i < 10; i++) {
  // console.log(i);
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  })(i);
}
