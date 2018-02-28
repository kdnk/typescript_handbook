class Animal {
  public name: string;
}

class Elephant extends Animal {}

class Rhino extends Animal {}

class Snake extends Animal {}

let zoo = [new Elephant(), new Rhino(), new Snake()];
let zoo2: Animal[] = [new Elephant(), new Rhino(), new Snake()];

function createZoo(): Animal[] {
  return [new Rhino(), new Elephant(), new Snake()];
}
