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

type Shape2 = Square2 | Rectangle | Circle2;

function area(s: Shape2) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}
