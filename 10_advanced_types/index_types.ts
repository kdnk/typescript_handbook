// function pluck(o, names) {
//   return names.map(n => o[n]);
// }

function pluck<T, K extends keyof T>(o: T, names: Array<K>): T[K][] {
  return names.map(n => o[n]);
}

interface Person0 {
  name: string;
  age: number;
}

let person: Person0 = {
  name: "Jarid",
  age: 35
};

let strings: string[] = pluck(person, ["name"]);

let personProps: keyof Person0;

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

interface Map<T> {
  [key: string]: T;
}

let keys: keyof Map<number>;
let value: Map<number>["foo"];
