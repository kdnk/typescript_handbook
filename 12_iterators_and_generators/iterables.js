var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log("entry", entry);
}
// for ... of vs. for ... in
var list3 = [4, 5, 6];
for (var i in list3) {
    // print key
    console.log("i", i);
}
for (var _a = 0, list3_1 = list3; _a < list3_1.length; _a++) {
    var i = list3_1[_a];
    // print value
    console.log("i", i);
}
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var pet in pets) {
    console.log(pet); // "species"
}
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet = pets_1[_b];
    console.log(pet); // "Cat", "Dog", "Hamster"
}
