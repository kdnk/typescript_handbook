interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named;
p = new Person();

// In java, Must written like below.
interface Named {
  name: string;
}

class Person implements Named {
  name: string;
}

let p: Named;
p = new Person();
