interface addAsFunc {
  (a: number, b: number): number
}

interface addAsProperty {
  add(a: number, b: number): number
}

const myAddFunc: addAsFunc = (a, b) => a + b

const myAddObj: addAsProperty = {
  add: (a: number, b: number) => {
    return a + b
  }
}