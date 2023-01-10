/**
 * ยกตัวอย่างให้ remote เป็น hight level module
 * และ tv เป็น low level module
 *
 * ปัญหาคือ remote มีการเรียกใช้ method ของ tv โดยตรง
 * เมื่อมีการแก้ tv อาจจะกระทบ remote ได้
 *
 * หรืออยากให้ remote ไปทำงานร่วมกับ ประตู ก็ไม่ได้
 */

class Remote {
  target: Tv

  constructor(target: Tv) {
    this.target = target
  }

  swtichToggle() {
    if (this.target.isTurnOn) {
      this.target.turnOff()
    } else {
      this.target.turnOn()
    }
  }
}

class Tv {
  isTurnOn = false

  turnOn() {
    this.isTurnOn = true
  }

  turnOff() {
    this.isTurnOn = false
  }
}

class Door {
  isOpen = false

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }
}

;(() => {
  const remote = new Remote(new Tv())
  remote.swtichToggle()
  console.log(remote.target.isTurnOn)
})()

export {}
