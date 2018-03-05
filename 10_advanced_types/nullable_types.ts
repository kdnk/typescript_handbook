let s = "foo";
s = null;
let sn: string | null = "bar";
sn = null;
sn = undefined;

function f(x: number, y?: number) {
  return x + (y || 0);
}

f(1, 2);
f(1);
f(1, undefined);
f(1, null);

class C {
  a: number;
  b?: number;
}

let c1 = new C();
c1.a = 12;
c1.a = undefined;
c1.b = 13;
c1.b = undefined;

function f2(sn: string | null): string {
  if (sn == null) {
    return "default";
  } else {
    return sn;
  }
}
