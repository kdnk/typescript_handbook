function getSmallPet() {
    var a = true;
    if (a) {
        return { fly: function () { }, layEggs: function () { } };
    }
    else {
        return { swim: function () { }, layEggs: function () { } };
    }
}
// let pet = getSmallPet();
// if (pet.swim) {
//   pet.swim();
// } else if (pet.fly) {
//   pet.fly();
// }
var pet = getSmallPet();
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
function isFish(pet) {
    return pet.swim != undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
