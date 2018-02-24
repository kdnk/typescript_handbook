interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black", width: 100 });
console.log(mySquare);

let mySquare2 = createSquare({ width: 100, opacity: 0.5 });

let squareOptions = { colour: "red", width: 100 };
let mySquare3 = createSquare(squareOptions);
