// 1. 設置一個基本的函式
type add = (a: number, b: number, c?: number) => number;

function myAdd(a, b, c = 0): add {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
}

myAdd(1, 2);
myAdd(1, 2, 3); //
myAdd(1, 2, 3, 4);

