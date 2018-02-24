interface Point {
  readonly x: number;
  readonly y: number;
}

interface Point2 {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5;

let p2: Point2 = { x: 10, y: 20 };
p2.x = 5;

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12;
ro.push(5);
ro.length = 100;
// You can't cast number[] --> ReadonlyArray<number>
a = ro;

// override with a type assertion
a = ro as number[];
