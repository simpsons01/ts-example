// 1. 運用 arrow function 保留在詞法作用域 的 this，鎖住this
class a1 {
  b = 1
  c() {
    return () => {
      console.log(this.b)
    }
  }
}


// 2. 創建一個變數，this指向該變數
class a1 {
  b = 1
  c() {
    const self = this
    return function() {
      console.log(self.c)
    }
  }
}


// 3. this decalreation
class a1 {
  b = 1
  c() {
    return function(this: a1) {
      console.log(this.b)
    }
  }
}