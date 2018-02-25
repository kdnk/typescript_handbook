class Control {
  private state: any;
}

class Control2 {
  private state: any;
}

// クラスを継承するときは、メンバも継承する
interface SelectableControl extends Control {
  select(): void;
}

interface SelectableControl2 extends Control2 {
  select(): void;
}

// SelectableControlの実装は、state というprivate memberwもつ
// そのため、Controlの子孫のクラスを継承しないといけない.
// Controlを継承しないと、private stateがないと怒られる.
class Button extends Control implements SelectableControl {
  select() {}
}

class Button2 extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

class Image3 extends Control2 implements SelectableControl2 {
  select() {}
}

class Image2 implements SelectableControl {
  select() {}
}

class Location2 {}
