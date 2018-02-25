interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;

  setTime(d: Date) {
    this.currentTime = d;
  }

  constructor(h: number, m: number) {}
}

// TODO: ここからよくわからん
interface ClockConstructor2 {
  new (hour: number, minute: number): ClockInterface2;
}

interface ClockInterface2 {
  tick();
}

function createClock(
  ctor: ClockConstructor2,
  hour: number,
  minute: number
): ClockInterface2 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep");
  }
}

class AnalogClock implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 7);
let analog = createClock(AnalogClock, 12, 7);
