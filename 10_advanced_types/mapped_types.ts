interface PersonPartial {
  name?: string;
  age?: number;
}

interface PersonReadonly {
  readonly name: string;
  readonly age: number;
}

interface Person0 {
  name: string;
  age: number;
}

type Pertial1<T> = { [P in keyof T]?: T[P] };
type Readonly1<T> = { readonly [P in keyof T]: T[P] };

type PersonPartial1 = Pertial1<Person0>;

type NullablePerson = { [P in keyof Person0]: Person0[P] | null };
type PartialPerson = { [P in keyof Person0]?: Person0[P] };

type Nullable<T> = { [P in keyof T]: T[P] | null };
type Partial9<T> = { [P in keyof T]?: T[P] };

// proxy の例はよくわからん
// とばす

type Pick9<T, K extends keyof T> = { [P in K]: T[P] };
type Record9<K extends string, T> = { [P in K]: T };

type ThreeStringProps = Record<"prop1" | "prop2" | "prop3", string>;

let z = {} as Person0;
console.log("z", z);
