/**
 * constructor ใน main จะต้องแก้ไขตลอด หากมีการเพิ่ม class อื่น ๆ	เข้า
 */

interface Animal {
  makeSound(): void
}

class Dog implements Animal {
  makeSound() {
    return 'bark'
  }
}

class Cat implements Animal {
  makeSound() {
    return 'meow'
  }
}

class Main {
  constructor(animal: Animal) {
    let name = ''
    if (animal instanceof Dog) {
      name = 'dog'
    }

    if (animal instanceof Cat) {
      name = 'cat'
    }

    console.log({
      name: name,
      sound: animal.makeSound(),
    })
  }
}

;(() => {
  const dog = new Dog()
  const cat = new Cat()
  new Main(dog)
  new Main(cat)
})()

export {}
