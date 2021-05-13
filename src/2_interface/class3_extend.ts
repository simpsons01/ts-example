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

// 2. interface可以被class拓展，接下來implements，只能是該類的subClass，不過使用場景？？？
class baseClass {
  private priveateProperty: boolean
  constructor(val) {
    this.priveateProperty = val
  }
}

interface interfaceExtendByClass extends baseClass {
  
}

class SubBaseClass extends baseClass implements interfaceExtendByClass  {
   constructor() {
     super(false)
   }
}





