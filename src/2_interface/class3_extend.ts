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

type useContractAOrB = contractA | contractB
type useContractAAndB = contractA & contractB

const contractOne: useContractAOrB = {
  age: 24
}

const contractSecond: useContractAOrB = {
  name: "mike"
}

const contractThird: useContractAAndB = {
  age: 15,
  name: "leo"
}

// 3. interface可以被class拓展，接下來implements，只能是該類的subClass，不過使用場景？？？
class baseClass {
  private priveateProperty: boolean
  constructor(val) {
    this.priveateProperty = val
  }
}

interface interfaceExtendByClass extends baseClass {
   dummyMethod(): void
}

class SubBaseClass extends baseClass implements interfaceExtendByClass  {
   dummyMethod(): void {
  
   }
}

class NoSunClass implements interfaceExtendByClass {
   dummyMethod(): void {

   }
}





