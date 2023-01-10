/**
 * ออกแบบ หลอดไฟ ให้สามารถ เปิด,ปิด ได้ และเช็คว่ามันเปิดอยู่หรือเปล่า
 * หลังจากนั้น อยากให้ตั้งเวลาเปิดปิดได้ เลยเพิ่ม ITurnOffSchedule เข้ามา
 *
 * หลังจากนั้น อยากมีหลอดไฟแบบเก่า แต่ไม่สามารถตั้งเวลาเปิดปิดได้
 *
 * ทำให้ ClassicLight ต้องถูกบังคับให้เพิ่ม method ScheduleTime ทั้ง ๆ ที่ไม่ได้ใช้
 */

interface IElectronic {
  turnOn(): void
  turnOff(): void
  isTurnOn(): boolean
  scheduleTime(time: number): void
}

class Light implements IElectronic {
  private isOn: boolean = false

  turnOn() {
    this.isOn = true
  }

  turnOff() {
    this.isOn = false
  }

  isTurnOn() {
    return this.isOn
  }

  scheduleTime(time: number): void {
    console.log(time)
  }
}

class ClassicLight implements IElectronic {
  private isOn: boolean = false

  turnOn() {
    this.isOn = true
  }

  turnOff() {
    this.isOn = false
  }

  isTurnOn() {
    return this.isOn
  }

  scheduleTime(time: number): void {
    console.log(time)
  }
}

export {}
