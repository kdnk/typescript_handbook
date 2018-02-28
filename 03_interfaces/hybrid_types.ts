interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number);
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 124;
  counter.reset = function() {};
  return counter;
}

let d = getCounter();
d(10);
d.reset();
d.interval = 5.0;
