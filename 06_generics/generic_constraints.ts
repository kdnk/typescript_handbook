interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity(3);
loggingIdentity({ number: 10, length: 100 });
