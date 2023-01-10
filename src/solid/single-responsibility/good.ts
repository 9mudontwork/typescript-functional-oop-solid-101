/**
 * แยก sendEmail ซึ่งไม่เกี่ยวข้อง กับ UserAccount ออก
 */

export class UserAccount {
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

export {}
