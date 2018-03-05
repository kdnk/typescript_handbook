function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  console.log("logging first argument...");
  for (let id in first) {
    console.log(id);
    (<any>result)[id] = (<any>first)[id];
  }

  console.log("\nlogging second argument...");
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      console.log(id);
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class Person1 {
  constructor(public name: string) {}
}

interface Loggable {
  log(): void;
}

class ConsoleLogger implements Loggable {
  log() {
    console.log(`\nlogging...`);
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        console.log(i);
      }
    }
  }
}

var jim = extend(new Person1("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
