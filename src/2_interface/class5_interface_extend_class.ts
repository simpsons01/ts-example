// 3. interface可以被class拓展，但是為什麼？
// 參考https://www.typescriptlang.org/docs/handbook/classes.html
// 參考https://stackoverflow.com/questions/51131898/what-is-the-difference-between-type-and-class-in-typescript
// 當創建一個class，在ts會發生什麼事？
class baseClass {
   c: number
   constructor(arg: number) {
      this.c = arg
   }  
}

type baseClassType = {
   c: number
}

// function baseClassWithES5(arg: number) {
//    this.c = arg
// }

const tempBaseClass1: baseClass = new baseClass(2)

const tempBaseClass2: baseClass = { c:1  }

const tempBaseClass3: baseClassType = { c: 1 }


interface dExtendsByType extends baseClassType {
   d: number
}
interface dExtendWithClass extends baseClass {
   d: number
}

const d1: dExtendWithClass = {
   d: 1,
   c: 2
}

const d2: dExtendsByType = {
   d: 1,
   c: 2
}