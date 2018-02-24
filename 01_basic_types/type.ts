// numbers
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
let x: [string, number];
x = ["hello", 10];

console.log(x[0].substr(1));
console.log(x[1]);

x[3] = "world";
if (x[5]) {
  console.log(x[5].toString());
}
x[6] = "true";

console.log(x);

// enum
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(c);
console.log(colorName);

console.log(c);

// void
function warnUser(): void {
  alert("This is my waring message");
}

let unusable: void = undefined;

// undefined & null
let u: undefined = undefined;
let n: null = null;

// never
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}

const neverFunc = () => {};

// type assertion
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
