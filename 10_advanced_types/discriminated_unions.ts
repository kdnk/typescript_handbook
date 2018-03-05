interface Square2 {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle2 {
  kind: "circle";
  radius: number;
}

interface Triangle {
  kind: "triangle";
  width: number;
  height: number;
}

type Shape2 = Square2 | Rectangle | Circle2 | Triangle;

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

function area(s: Shape2) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      return assertNever(s);
  }
}
