export class UserAccount2 {
  username: string
  password: string

  getUsername() {
    return this.username
  }

  setUserName(username: string) {
    this.username = username
  }

  getPassword() {
    return this.password
  }

  setPassword(password: string) {
    this.password = password
  }
}

class EmailService {
  sendEmail(to: string, message: string) {
    // send email
  }
}
