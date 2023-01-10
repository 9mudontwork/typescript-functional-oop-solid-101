abstract class Shape {
  width: number
  height: number
  getArea(): number {
    return this.width * this.height
  }
  setShape(width: number, height: number) {
    this.width = width
    this.height = height
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super()
    this.setShape(width, height)
  }
}

class Square extends Shape {
  constructor(widthOrheight: number) {
    super()
    this.setShape(widthOrheight, widthOrheight)
  }
}

;(() => {
  const rectangle = new Rectangle(10, 5)
  const square = new Square(5)

  console.log(rectangle.getArea())
  console.log(square.getArea())
})()

export {}
