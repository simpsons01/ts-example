interface NumberAry extends Array<number> {
  [index: number]: number
}

let ary5: NumberAry = []

ary5 = [1]

ary5.push(2)

ary5.map((x) => x * 2)
