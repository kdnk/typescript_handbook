// In TypeScript, each member is public by default.
class Animal2 {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }

  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// When a member is marked private, it cannot be accessed from outside of its containing class.
class Animal3 {
  private name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
}

new Animal3("Cat").name;

class Animal4 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Animal5 {
  protected name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal4 {
  constructor() {
    super("Rhino");
  }

  public hello() {
    console.log(`My name is ${this.name}`); // Property 'name' is private and only accessible within class 'Animal4'.
  }
}

class Rhino2 extends Animal5 {
  constructor() {
    super("Rhino2");
  }

  public hello() {
    console.log(`My name is ${this.name}`); // it's okay because name is protected member
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
