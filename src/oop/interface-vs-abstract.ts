/**
 * interface จะกลายเป็น real abstract อัตโนมัติ
 * และไม่สามารถกำหนดต้นแบบการทำงานได้
 * ใช้กับ implements
 *
 * abstract คล้าย interface เลย
 * แต่สามารถกำหนดต้นแบบการทำงานได้
 * และ override method ได้
 * ใช้กับ extends
 *
 *
 * ทั้งคู่เรียกใช้งานโดนตรงไม่ได้ ต้องเรียกใช้งานผ่านหลักการ inheritance
 */

interface Animal {
  name: string
  makeSound(): void
}

abstract class Animal2 {
  name: string
  makeSound() {
    console.log('no animal sound')
  }
}

class Main implements Animal {
  name: string

  makeSound() {
    console.log('no animal sound')
  }
}

class Main2 extends Animal2 {
  name: string

  makeSound() {
    console.log('animal sound 2')
  }
}

;(() => {
  const main = new Main()
  const main2 = new Main2()

  main.makeSound()
  main2.makeSound()
})()

export {}
