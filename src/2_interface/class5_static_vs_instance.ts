// static property vs instance property
class a {
  b: number;
  constructor(arg: number) {
    this.b = arg;
  }
  c() {}
  static d = 2;
  static e = 3;
}

// 以a類別來說，constructor, d, e被ts歸類在static property, b, c被歸類在實體屬性
//參考： https://stackoverflow.com/questions/58399613/what-is-exactly-the-static-side-and-the-instance-side-in-typescript
// https://stackoverflow.com/questions/13407036/how-does-interfaces-with-construct-signatures-work

//
interface dummyClass {
  property1: number;
}
interface dummyConstructorInterface {
  new (property1: number): dummyClass;
}

class dummyA implements dummyClass {
  property1: number;
  constructor(arg) {
    this.property1 = arg;
  }
}

function createDummy(dummy: dummyConstructorInterface, num): dummyClass {
  return new dummy(num);
}

createDummy(dummyA, 3)
