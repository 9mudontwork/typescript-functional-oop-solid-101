interface Animal {
  name: string
  makeSound(): void
}

class Dog implements Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  makeSound() {
    return 'bark'
  }
}

class Cat implements Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  makeSound() {
    return 'meow'
  }
}

class Main {
  excute(anime: Animal) {
    console.log({
      name: anime.name,
      sound: anime.makeSound(),
    })
  }
}

;(() => {
  const main = new Main()
  const dog = new Dog('dog')
  const cat = new Cat('cat')

  main.excute(dog)
  main.excute(cat)
})()

export {}
