/**
 * polymorphism ความสามารถในการเปลี่ยนแปลงรูปร่างของออบเจ็กต์ โดยไม่ต้องเปลี่ยนแปลงโค้ดที่เกี่ยวข้องกับออบเจ็กต์นั้น
 *
 * object ของ class ลูก เปลี่ยนรูปให้อยู่ object ของ class แม่ได้
 * แต่ object ของ class แม่ไม่สามารถเปลี่ยนให้อยู่ใน object ของ class ลูกได้
 *
 * class แม่ สร้างต้นแบบการทำงานขึ้นมาไว้ได้
 * class ลูก override ต้นแบบการทำงานของ class แม่ได้
 */

class Animal {
  makeSound() {
    console.log('no animal sound')
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('bark')
  }
}

class Cat extends Animal {
  makeCatSound() {
    console.log('meow')
  }
}

class Main {
  constructor(animal: Animal) {
    animal.makeSound()
  }
}

;(() => {
  const animal = new Animal()
  const dog = new Dog()
  const cat = new Cat()

  new Main(dog)
  new Main(cat)
})()

export {}
