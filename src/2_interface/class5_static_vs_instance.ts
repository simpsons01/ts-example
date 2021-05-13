// static property vs instance property
class a {
  b: number 
  constructor(arg: number) {
    this.b = arg
  }
  c() {

  }
  static d = 2
  static e = 3
}

class b {
  arg
  arg2
  constructor(arg, arg2) {
    this.arg = arg
    this.arg2 = arg2
  }
}

// 以a類別來說，constructor, d, e被ts歸類在static property, b, c被歸類在實體屬性

interface e {
  new(a: number): a
}

const z: e = a

const z2: e = b 

//參考： https://stackoverflow.com/questions/58399613/what-is-exactly-the-static-side-and-the-instance-side-in-typescript