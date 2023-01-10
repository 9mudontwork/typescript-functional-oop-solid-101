/**
 * ทำให้ hight level module กับ low level module รู้จักการผ่าน abstraction
 */

interface ISwitchable {
  enable(): void
  disable(): void
  isEnable(): boolean
}

class Remote {
  target: ISwitchable

  constructor(target: ISwitchable) {
    this.target = target
  }

  swtichToggle() {
    if (this.target.isEnable()) {
      this.target.disable()
    } else {
      this.target.enable()
    }
  }
}

class Tv implements ISwitchable {
  isTurnOn: boolean

  turnOn() {
    this.isTurnOn = true
  }

  turnOff() {
    this.isTurnOn = false
  }

  enable = () => this.turnOn()
  disable = () => this.turnOff()
  isEnable = () => this.isTurnOn
}

class Door {
  isOpen: boolean

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  enable = () => this.open()
  disable = () => this.close()
  isEnable = () => this.isOpen
}

;(() => {
  const remoteTv = new Remote(new Tv())
  const remoteDoor = new Remote(new Door())
  remoteTv.swtichToggle()
  console.log({
    tv: remoteTv.target.isEnable(),
  })

  remoteTv.swtichToggle()
  console.log({
    tv: remoteTv.target.isEnable(),
  })

  remoteDoor.swtichToggle()
  console.log({
    door: remoteDoor.target.isEnable(),
  })

  remoteDoor.swtichToggle()
  console.log({
    door: remoteDoor.target.isEnable(),
  })
})()

export {}
