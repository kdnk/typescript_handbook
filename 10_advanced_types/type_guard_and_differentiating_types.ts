interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  let a = true;
  if (a) {
    return { fly: () => {}, layEggs: () => {} };
  } else {
    return { swim: () => {}, layEggs: () => {} };
  }
}

// let pet = getSmallPet();
// if (pet.swim) {
//   pet.swim();
// } else if (pet.fly) {
//   pet.fly();
// }

let pet = getSmallPet();
if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
} else {
  (<Bird>pet).fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim != undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
