export {}

/**
 * lazy
 * เรียกใช้ถึงจะ new instance
 */

class Car {
  private static instance: Car

  // TODO: ใส่ private
  constructor() {}

  public static getInstance(): Car {
    if (!this.instance) {
      this.instance = new Car()
    }

    return this.instance
  }

  log(): void {
    console.log('log')
  }
}

/**
 * eary
 * เรียกใช้แต่แรก
 */

class Car2 {
  private static instance: Car2 = new Car2()

  // TODO: ใส่ private
  constructor() {}

  public static getInstance(): Car2 {
    return this.instance
  }

  log(): void {
    console.log('log')
  }
}

/**
 * ????
 */

class Car3 {
  private static instance: Car3

  static get Instance(): Car3 {
    return Car3.instance
  }

  protected constructor() {
    if (!Car3.instance) {
      Car3.instance = new Car3()
    }
  }

  log(): void {
    console.log('log')
  }
}

;(() => {
  const car = new Car()
  const car2 = new Car()

  console.log(car === car2)

  const car3 = Car.getInstance()
  const car4 = Car.getInstance()

  console.log(car3 === car4)
})()
