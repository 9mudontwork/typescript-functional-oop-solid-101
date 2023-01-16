interface IUserData {
  username: string
}

type PartialUserData = Partial<IUserData>

class Model {
  private data: PartialUserData

  setUserData(data: PartialUserData) {
    this.data = data
  }

  getUserData(): PartialUserData {
    return this.data
  }
}

interface View {
  updateUserData(userData: PartialUserData): void
}

class Presenter {
  private view: View
  private model: Model

  constructor(view: View, model: Model) {
    this.view = view
    this.model = model
  }

  updateView() {
    const userData = this.model.getUserData()
    this.view.updateUserData(userData)
  }

  updateModel(userData: PartialUserData) {
    this.model.setUserData(userData)
    this.updateView()
  }
}

class Main implements View {
  updateUserData(userData: PartialUserData): void {
    console.log(userData)
  }
}

;(() => {
  const main = new Main()
  const model = new Model()
  const presenter = new Presenter(main, model)

  presenter.updateModel({ username: 'dog' })
})()

export {}
