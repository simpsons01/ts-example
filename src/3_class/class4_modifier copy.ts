// 1. protected vs private只差在於可不可以再子類中取得
class dummyBase {
  private dummmyPrivateProperty: number = 1
  protected dummmyProtectedProperty: number = 2
}

class dummySubBase extends dummyBase {
  constructor() {
    super()
    this.dummmyPrivateProperty
    this.dummmyProtectedProperty
  }
}

// 2.設定readonly的property，只能在constructor或是一開始就給定值
class dummyReadOnlyErrorExample {
  readonly readonlyProperty1: number = 1
  readonly readonlyProperty2: number
  constructor(num) {
    this.readonlyProperty1 = 2
    this.readonlyProperty2 = num
  }
}


// 3. 使用getter，未使用setter，該屬性會直接被推斷為read-only屬性
class Account {
  _money: number = 0
  get money() {
    return this.money
  }
  // set money(number) {
  //   this._money = number
  // }
}

const ray = new Account()
ray.money = 100 // 打開 setter試看看.....
