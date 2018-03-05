enum Status {
  Ready,
  Waiting
}

enum Color {
  Red,
  Blue,
  Green
}

// enum values from different enum types are considered incompitable.
let status1 = Status.Ready;
status1 = Color.Green;
