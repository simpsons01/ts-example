// 描述一個物件
interface dummyInterface {
  property1: string
  method1(): string
}

const myDummyInterface: dummyInterface = {
  property1: "hello",
  method1() {
    return "hello world"
  }
}

//描述一個函式
interface dummyAddMethod {
  (a: number, b: number): number
}

const dummyAdd: dummyAddMethod = function(a, b) {
   return a + b
}


//描述一個類
interface dummyClass {
  propery1: string
  method1(): string
}

class myDummyClass implements dummyClass {
  public propery1: string
  constructor(property1) {
    this.propery1 = property1
  }
  method1() {
    return this.propery1
  }
  //private privateProperty: string //試著打開看看，ts是否報錯
  //public property2: string //試著打開看看，ts是否報錯
}