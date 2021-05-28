// 1. 設置一個基本的函式
function myAdd(a: number, b: number): number {
  return a + b
}

myAdd(1, 2);

myAdd(1,3, 3)

myAdd(1)

myAdd(2, "2")

// 2. 可選參數用法
type add = (a: number, b?: number | undefined) => number;

let myAdd2: add
myAdd2 = function(a, b){
  if(b === undefined) {
    return a
  }else {
    return a + b
  }
} // 此時b可選參數在ts被推斷成 undefined | number

myAdd2(1); 

myAdd2(1, 2);

myAdd2(1, undefined)


// 預設參數同時設定了該參數的型別
function defaultAddFunc (a: number, b = 1): number {
  return a + b
} 

defaultAddFunc(1, "2")


// 4. 可選參數不能放置在必需參數前面
function myAdd3(a?: number, b: number): number {
  return a + b;
}


