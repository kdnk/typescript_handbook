interface Named {
  name: string;
}

let x: Named;

let y = { name: "Alice", location: "Seattle" };

x = y;

function great(x: Named) {
  console.log("Hello " + x.name);
}

great(y);
