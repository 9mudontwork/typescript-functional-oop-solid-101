/**
 * - method ใน interface จะเป็น real abstract อัตโนมัติ
 * - interface ไม่สามารถสร้าง constructor ได้
 * - method ใน interface เป็น public อัตโนมัติ
 * - class สามารถ implements ได้หลาย interface
 */

interface Animal {
  name: string
  makeSound(): void
}

class Main implements Animal {
  name: string

  makeSound() {
    console.log('no animal sound')
  }
}

/**
 * - สามารถสร้าง method ที่เป็นทั้ง abstract และไม่ใช่ ได้
 * - abstract class สามารถสร้าง constructor ได้
 * - abstract class สามารถใช้ความสามารถ encapsulation ได้
 * - class สามารถ extends ได้แค่ 1 abstract class
 */

abstract class Animal2 {
  protected name: string
  makeSound() {
    console.log('animal2')
  }
  constructor(name: string) {
    this.name = name
  }
}

class Main2 extends Animal2 {
  name: string

  makeSound() {
    console.log(this.name)
  }
}

;(() => {
  const main = new Main()
  const main2 = new Main2('cat')
  main.makeSound()
  main2.makeSound()
})()

/**
 * interface ไม่สามารถใช้ instanceof ได้
 * https://stackoverflow.com/a/50113607/13161255
 */

// let x: any

// if (x instanceof Animal) {
//   // Error: 'IPerson' only refers to a type, but is being used as a value here.
// }

// if (x instanceof Animal2) {
//   // OK
// }

export {}
