// 1. 當有一個interface可能需要彈性特製自己的property就是使用index signuature的時機
interface dummyIndexSignuatureObj {
  [propName: string]: string
}

const myDummyAry: dummyIndexSignuatureObj = {
  dummyProperty1 : "dummeyProperty1",
  dummyProperty2: "dummeyProperty2"
}


// 2. 需注意的是index signature不能跟後面定義的property打架 
interface dummyIndexSignuatureWrongObj {
  [propName: string]: string
  numberProperty: number
}



