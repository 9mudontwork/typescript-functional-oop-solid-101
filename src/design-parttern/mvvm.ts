class Model {
  username: string
}

class ViewModel {
  private model: Model

  constructor(model: Model) {
    this.model = model
  }

  getUserName(): string {
    return this.model.username
  }

  setUserName(username: string) {
    this.model.username = username
  }
}

class View {
  private viewModel: ViewModel

  constructor(ViewModel: ViewModel) {
    this.viewModel = ViewModel
  }

  render() {
    console.log(this.viewModel.getUserName())
  }

  updateUsername(name: string) {
    this.viewModel.setUserName(name)
    this.render()
  }
}

;(() => {
  const model = new Model()
  model.username = 'dog'

  const viewModel = new ViewModel(model)
  const view = new View(viewModel)

  view.render()
  view.updateUsername('cat')
})()

export {}
