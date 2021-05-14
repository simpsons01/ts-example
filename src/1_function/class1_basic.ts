// 1. 設置一個基本的函式
function myAdd(a: number, b: number): number {
  return a + b;
}

myAdd(1, 2);


// 2. 可選參數用法
type add = (a: number, b?: number) => number;

let myAdd: add 
myAdd  = function(a, b = 1){
  return a + b
}

myAdd(1); 
myAdd(1, 2);


// 3. 可選參數不能放置在必需參數前面
function myAdd(a?: number, b: number): number {
  return a + b;
}
