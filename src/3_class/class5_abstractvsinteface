// abstract class vs interface

// 使用abstract class
abstract class RouterMachineUseAbstract {
  abstract connect(): void
  abstract disconnect(): void
  operation(action: string): void {
    if(action === "connect") {
      this.connect()
    }else if(action === "disconnect") {
      this.disconnect()
    }
  }
}

class SonyRouterMachine extends RouterMachineUseAbstract {
  connect() {
    console.log("use Sony tech to connect")
  }
  disconnect() {
    console.log("use Sony tech to disconnect")
  }
}

class AppleRouterMachine extends RouterMachineUseAbstract {
  connect() {
    console.log("use Apple tech to connect")
  }
  disconnect() {
    console.log("use Apple tech to disconnect")
  }
}


// 使用interface
interface RouterMachineUseInterface {
  connect(): void
  disconnect(): void
  operation(action: string): void
}


class SamsumgRouterMachime implements RouterMachineUseInterface {
  connect() {
    console.log("use Samsung tech to connect")
  }
  disconnect() {
    console.log("use ApSamsungple tech to disconnect")
  }
  operation(action): void {
    if(action === "connect") {
      this.connect()
    }else if(action === "disconnect") {
      this.disconnect()
    }
  }
}

class AsusRouterMachime implements RouterMachineUseInterface {
  connect() {
    console.log("use Asus tech to connect")
  }
  disconnect() {
    console.log("use Asus tech to disconnect")
  }
  operation(action): void {
    if(action === "connect") {
      this.connect()
    }else if(action === "disconnect") {
      this.disconnect()
    }
  }
}


//參考 https://stackoverflow.com/questions/50110844/what-is-the-difference-between-interface-and-abstract-class-in-typescript


