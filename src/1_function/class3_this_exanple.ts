// 一般函式 this指向是根據函式呼叫的context而定，因此ts沒辦法決定 this到底是指向哪邊
var a = "a from var a"

const b = {
  a: "a from obj b",
  logA: logA
}

const e = {
  a: "a from obj e"
}


function logA() {
  console.log(this.a)
}

logA()   // a from var a
b.logA() //a from obj b
logA.call(e) // a from obj e
