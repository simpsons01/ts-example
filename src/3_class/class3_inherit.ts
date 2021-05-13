// 1. 在ts，限定型別時，當型別宣告為類別時，即使是子類別也是合法的
type machineState = "on" | "off"

class Machine {
  state: machineState = "off"
  constructor(state: string | undefined) {
    if(typeof state === "string") {
      this.state = "on"
    }
  }
  bootsUp() {
    this.state = "on"
  }
  powerOff() {
    this.state = "off"
  }
}


class Computer extends Machine {
   cpu: string 
   constructor(cpu: string) {
     super("off")
     this.cpu = cpu
   }  
}

const amdComputer: Computer = new Computer("amd")

const intelComputer: Machine = new Computer("intel")  // 通過ts檢查，因為Computer是Machine的子類(subClass)


// 2. 子類別可以複寫父類別方法，但必須遵守父類別的合約(contract)
class CarEngine extends Machine {
  speed: number = 0
  bootsUp(speed?: number): void {
    if(typeof speed === "number") {
      this.speed = speed
      super.bootsUp()
    }else {
      super.bootsUp()
    }
  }
}

