// 1. 運用 arrow function 保留在詞法作用域 的 this，鎖住this
class a1 {
  b = 1
  c = () => {
    console.log(this.b)
  }
}


// 2. this param
class a3 {
  b = 1
  c() {
    return function(this: a3) {
      console.log(this.b)
    }
  }
}