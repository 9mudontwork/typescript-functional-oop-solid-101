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

class View {
  updateUserData(userData: PartialUserData): void {
    console.log(userData)
  }
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

;(() => {
  const view = new View()
  const model = new Model()
  const presenter = new Presenter(view, model)

  presenter.updateModel({ username: 'dog' })
})()

export {}
