let x1 = (a: number) => 0;
let y1 = (b: number, s: number) => 0;

y1 = x1; //discardding params is common in js.
x1 = y1;

let x2 = () => ({ name: "Alice" });
let y2 = () => ({ name: "Alice", location: "Seattle" });

y2 = x2;
x2 = y2;
