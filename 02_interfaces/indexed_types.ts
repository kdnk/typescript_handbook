interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

// これはダメ
// numeric indexerの返り値は、string indexerの返り値の
// subtype出ないといけない。
// これは、jsは、indexする前に、number --> stringへの
// 変換を行うため。
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

// the following is okay.
interface Okay {
  [x: number]: Dog;
  [x: string]: Animal;
}

// dictionary
interface NumericDictionary {
  [index: string]: number;
  length: number;
  name: string;
}
