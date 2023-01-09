/**
 * implements สืบทอดมาบางส่วน ต้องเขียน methods ใหม่ให้ครบ
 *
 * abstract ใน typescript จะประกาศ interface เพื่อให้ class อื่นสืบทอดมาใช้
 * และเพื่อบอกว่า class นั้นจะต้องมี method นั้น ๆ ด้วย
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
