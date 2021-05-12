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

// 2. interface可以被class拓展，接下來implements，只能是該類的subClass
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

class NoSubClass implements interfaceExtendByClass  {
  priveateProperty = true
}

// 試著把baseClass private屬性改掉會發生什麼事？




