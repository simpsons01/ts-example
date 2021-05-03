class Animal {
  readonly type: string
  protected name: string
  protected gender: string
  protected constructor(theName: string, theGender: string) {
    this.name = theName
    this.gender = theGender
    this.type = "other animal"
  }
}

class Rhino extends Animal {
  constructor() {
    super("Rhino", "female")
  }

  print(): string {
    return `${this.name}, ${this.gender}`
  }
}

// let animal = new Animal("Goat")
let rhino = new Rhino()

console.log(rhino.print())

//protected privated readonly public

// public 開放給外部使用的屬性

// privated 私有屬性，只能在該個class內讀取，不開放給外部使用

// protected 保護屬性，可以在sub-class讀取，不開放給外部使用

// readonly 唯讀屬性，只能在建構類別時賦予值，之後無法更改
