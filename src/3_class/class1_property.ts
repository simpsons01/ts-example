// 1.需要宣告class擁有哪些property，才能在建構函數裡賦值
class Human1 {
  constructor(gender: string, name: string) {
    this.name = name
  }
} //錯誤

class Human2 {
  name
  constructor(gender: string, name: string) {
    this.name = name
  }
} //正確


// 2.不在一開始就定義classk的property是哪些型別，默認型別為any
class Count {
  num
  constructor(num) {
    this.num = num
  }
}

const strCount = new Count("1") //可以是字串

const numCount = new Count(1) //可以是數字


// 3.定義類的時候指定property的默認值
class Book {
  name = "harry porter"
}

const myBook = new Book()

myBook.name === "harry porter" //true

myBook.name = "lover stroy"

//myBook.name = 1 // //可以注意此時Book.name已經被ts自動推斷為字串行別，所以此時只能賦予name字串行別的value


// 4.定義類的時候指定property該是什麼型別
class Car {
  brand: string
  constructor(brand: string) {
    this.brand = brand
  }
}

const myCar = new Car("honda")

myCar.brand === "honda" //true

myCar.brand = 1





