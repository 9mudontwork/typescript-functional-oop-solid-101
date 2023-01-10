/**
 * implements สืบทอดมาบางส่วน ต้องเขียน methods ใหม่ให้ครบ
 *
 * abstraction เป็นการประกาศหน้าตาของ class โดยไม่ต้องกำหนด method
 * เพื่อนให้ class อื่น ๆ เอาไป implement method ต่อ
 */

interface ICar {
  setName(name: string): void
  setColor(color: string): void
}

export class Car implements ICar {
  private name: string
  private color: string

  constructor(name: string, color: string) {
    this.name = name
    this.color = color
  }

  setName(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setColor(color: string) {
    this.color = color
  }

  getColor() {
    return this.color
  }
}

;(() => {
  const car = new Car('Toyota', 'red')

  console.log({
    name: car.getName(),
    color: car.getColor(),
  })
})()
