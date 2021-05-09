// 1. 不同類別但是擁有相同屬性，在ts中是合法的
class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
}

class Employee {
  name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let employee = new Employee("Bob");

animal = employee // 居然通過ts檢查，不過專案上應該不會有人這樣搞.....


// 2. 使用getter，未使用setter，該屬性會直接被推斷為read-only屬性
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
ray.money = 100
// 打開 setter試看看.....



