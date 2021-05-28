// 1. arguments在未宣吿時被ts推論為any[]，所以可以傳任何型別進去arguments

const sayHello = function(str: string, ...args) {
  console.log(arguments)
  console.log("hello" + str)
}

sayHello("ray", 2, 3, 4, () => {}, {}, false)
