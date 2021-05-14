// 1. static property vs instance property
// 以a類別來說，constructor, d, e被ts歸類在static property, b, c被歸類在實體屬性
// 參考1： https://stackoverflow.com/questions/58399613/what-is-exactly-the-static-side-and-the-instance-side-in-typescript
// 參考2： https://stackoverflow.com/questions/13407036/how-does-interfaces-with-construct-signatures-work

class a {
  b: number;
  constructor(arg: number) {
    this.b = arg;
  }
  c() {}
  static d = 2;
  static e = 3;
}

// 2. construct signature 範例
interface dummyClass {
  property1: number;
}
interface dummyConstructor {
  new (property1: number): dummyClass;
}

class dummyA implements dummyClass {
  property1: number;
  constructor(arg) {
    this.property1 = arg;
  }
}

function createDummy(dummy: dummyConstructor, num): dummyClass {
  return new dummy(num);
}

createDummy(dummyA, 3)
