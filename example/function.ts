// basic function type definition
const add: (params: number) => string = function (params: number): string {
  return `${params + 2}`
}
add(2)

// use interface to defince function type
interface MyAdd {
  (param: number): string
}

const add1: MyAdd = function (params: number): string {
  return `${params} + 2`
}

const add2 = function (params: number | string): number | string {
  if ((params as string).toUpperCase) {
    return `${(params as string).toUpperCase()}`
  } else {
    return (params as number) * 2
  }
}

let a: number | string

const b = a as string

b.toUpperCase()
