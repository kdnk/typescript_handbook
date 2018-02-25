class Greeter1 {
  static standardGreeting = "Hello, there";
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return Greeter1.standardGreeting;
    }
  }
}

let greeter1: Greeter1;
greeter1 = new Greeter1("world");
console.log(greeter1.greet());

let greeterMaker: typeof Greeter1 = Greeter1;
