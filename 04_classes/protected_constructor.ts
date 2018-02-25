class Person2 {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

class Employee3 extends Person2 {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

let howard1 = new Employee3("Howard", "Sales");
let john = new Person2("John"); // Error: because constructor is protected.
