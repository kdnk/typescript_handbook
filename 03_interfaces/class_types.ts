interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick();
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}

  tick() {
    console.log("beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}

  tick() {
    console.log("tick tock");
  }
}

const createClock = (
  ctor: ClockConstructor,
  h: number,
  m: number
): ClockInterface => {
  return new ctor(h, m);
};

let a = createClock(DigitalClock, 12, 3);
let b = createClock(AnalogClock, 3, 12);
