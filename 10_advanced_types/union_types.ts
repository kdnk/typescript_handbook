function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected string or number, got ${padding}.`);
}

padLeft("Hello world", 4);

// console.log(padLeft("Hello world", true)); // => error
console.log(padLeft("Hello world", 4));

// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }

// function getSmallPet(): Fish | Bird {
//   let a = true;
//   if (a) {
//     return { fly: () => {}, layEggs: () => {} };
//   } else {
//     return { swim: () => {}, layEggs: () => {} };
//   }
// }

// let pet = getSmallPet();
// pet.layEggs();
