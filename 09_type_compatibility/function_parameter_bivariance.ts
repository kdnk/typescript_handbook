// この辺よくわからん

enum EventType {
  Mouse,
  Keyboard
}

interface Event {
  timestamp: number;
}

interface MouseEvent extends Event {
  x: number;
  y: number;
}

interface KeyEvent extends Event {
  keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}

listenEvent(EventType.Mouse, (e: MouseEvent) => {
  console.log(e.x + ", " + e.y);
});

listenEvent(EventType.Mouse. (e: number) => {
  console.log(e);

})
