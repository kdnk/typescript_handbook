interface Empty<T> {}

let x1: Empty<number>;
let y1: Empty<string>;

x = y;

interface NotEmpty<T> {
  data: T;
}

let x2: NotEmpty<number>;
let y2: NotEmpty<string>;

x2 = y2;
