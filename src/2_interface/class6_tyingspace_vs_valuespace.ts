// compiled time vs run time
// 參考 https://stackoverflow.com/questions/846103/runtime-vs-compile-time

//typing space exist in compiled time not exist in runtime
interface b {
   c: number
}

type c = number

// value space exist in compiled time and alose exist in runtime
const d = 2
const d3 = {
   a: 1
}