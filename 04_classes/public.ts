// In TypeScript, each member is public by default.
class Animal2 {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }

  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// When a member is marked private, it cannot be accessed from outside of its containing class.
class Animal3 {
  private name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
}

new Animal3("Cat").name;
