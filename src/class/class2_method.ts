// 1.在類別裡定義method就跟定義一般ts的涵式(function)一樣，規定參數型別以及涵式執行完會回傳的值
class Clock {
  alarmTime: number = 10
  setAlarmTime(alarmIime: number): void {
    this.alarmTime = alarmIime
  }
  getAlarmTime(): number {
    return this.alarmTime
  }
}

const myClock = new Clock()

myClock.setAlarmTime(10)

myClock.getAlarmTime() //10