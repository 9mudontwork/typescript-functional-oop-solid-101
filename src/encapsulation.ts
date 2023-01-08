// ควบคุมการเข้าถึงข้อมูลใน class
/**
 * private เข้าถึงแค่ภายใน class เท่านั้น
 * protected เข้าถึงได้ภายใน class และ class ที่สืบทอดมา
 * public เข้าถึงได้ทุกที่
 */

export class Car {
  private name: string
  protected year: number
  public color: string

  constructor(name: string, year: number, color: string) {
    this.name = name
    this.year = year
    this.color = color
  }

  getName(): string {
    return this.name
  }

  getYear(): number {
    return this.year
  }

  setName(name: string) {
    this.name = name
  }

  setYear(year: number) {
    this.year = year
  }
}

;(() => {
  const car = new Car('Toyota', 2019, 'red')

  console.log(car.getName())
  console.log(car.color)

  car.setName('Honda')
  car.color = 'blue'

  console.log({
    name: car.getName(),
    color: car.color,
  })
})()
