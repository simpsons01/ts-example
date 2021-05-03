// what is interface? 
// declare interface means describe a object 
interface human {
  name: string
  gender?: string
  sayHi(): string
}

// define a asia human 
const asiaMan: human = {
  name: "蛋堡",
  gender: "female",
  sayHi() {
    return "我是" + this.name
  }
}

const americanMan: human = {
  name: "ray",
  gender: "male",
  sayHi() {
    return "I am" + this.name
  }
}

const getHuman = function(type: string): human {
   if(type === "asia")  {
    return asiaMan
   }else if(type === "american") {
     return americanMan
   }
}

