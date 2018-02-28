class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: boolean;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<T extends Animal>(c: new () => T): T {
  return new c();
}
