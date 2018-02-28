interface genericIdentityFn<T> {
  d(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: genericIdentityFn<number> = identity;
