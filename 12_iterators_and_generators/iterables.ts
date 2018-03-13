let someArray = [1, "string", false];

for (let entry of someArray) {
  console.log("entry", entry);
}

// for ... of vs. for ... in

let list3 = [4, 5, 6];
for (let i in list3) {
  // print key
  console.log("i", i);
}

for (let i of list3) {
  // print value
  console.log("i", i);
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
  console.log(pet); // "species"
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}
