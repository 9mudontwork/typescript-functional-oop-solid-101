/**
 * extends สืบทอดมาทั้งหมด ไม่จำเป็นต้องเขียน methods ใหม่
 */

export class Vehicle {
  protected name: string
  protected color: string

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

export class Car extends Vehicle {
  private year: number

  constructor(name: string, year: number, color: string) {
    super()
    this.setName(name)
    this.year = year
    this.setColor(color)
  }

  getYear(): number {
    return this.year
  }

  setYear(year: number) {
    this.year = year
  }

  setName(name: string) {
    this.name = name
    console.log('override setName() from Car')
  }
}

;(() => {
  const car = new Car('Toyota', 2019, 'red')

  console.log({
    name: car.getName(),
    year: car.getYear(),
    color: car.getColor(),
  })

  car.setName('Honda')
  car.setColor('blue')

  console.log({
    name: car.getName(),
    color: car.getColor(),
  })
})()
