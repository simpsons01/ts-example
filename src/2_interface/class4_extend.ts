// 1. interface可以被拓展，使用extend關鍵字
interface baseInterface {
  baseProperty: string
}

interface extendInterface extends baseInterface {
  extendProperty: string
}

const customExtendObj: extendInterface = {
  baseProperty: "hello world",
  extendProperty: "i am extend property"
}

// 2. 也可以使用union(聯合型別) intersection(交集型別)
interface  contractA{
  age: number
}

interface  contractB {
  name: string
}

const contractOne: contractA | contractB = {
  age: 24
}

const contractSecond: contractA | contractB = {
  name: "mike"
}

const contractThird: contractA & contractB = {
  age: 15,
  name: "leo"
}





