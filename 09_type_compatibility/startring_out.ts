interface Named2 {
  name: string;
}

let x: Named2;

let y = { name: "Alice", location: "Seattle" };
x = y;

function greet(n: Named2) {
  alert("Hello, " + n.name);
}

greet(y);
