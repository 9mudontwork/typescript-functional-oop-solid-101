interface ICalculator {
  calculate(a: number, b: number): number
}

class PLus implements ICalculator {
  calculate(a: number, b: number): number {
    return a + b
  }
}

class Minus implements ICalculator {
  calculate(a: number, b: number): number {
    return a - b
  }
}

class Multiply implements ICalculator {
  calculate(a: number, b: number): number {
    return a * b
  }
}

class Divide implements ICalculator {
  calculate(a: number, b: number): number {
    return a / b
  }
}

class Context {
  private calculator: ICalculator

  constructor(calculator: ICalculator) {
    this.calculator = calculator
  }

  calculate(a: number, b: number): number {
    return this.calculator.calculate(a, b)
  }
}

;(() => {
  const context = new Context(new PLus())
  console.log(context.calculate(1, 2))
})()

export {}
