// 實際專案該怎麼做？使用overload v.s 針對不同資料定義不同函式
//overload
function add(x: { a: number; b: number }): number;
function add(x: number[]): number;
function add(x: { a: number; b: number } | number[]): number {
  if (Array.isArray(x)) {
    return x.reduce((a, c) => {
      return (a += c);
    }, 0);
  } else {
    return x.a + x.b;
  }
}
add({ a:1, b:2 })
add([1,2])

//定義不同函式
const addByTwoNum = (a: number, b: number): number => a + b;
const addByAry = (ary: number[]): number => {
  return ary.reduce((a, c) => {
    return (a += c);
  }, 0);
};

addByTwoNum(1, 2)
addByAry([1,2])


