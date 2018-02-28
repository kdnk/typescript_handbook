function identity0<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
