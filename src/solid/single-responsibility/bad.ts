/**
 * sendEmail ไม่ได้เกี่ยวกับอะไรกับ UserAccount
 * สามารถแยกไปสร้าง class ใหม่ได้
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

  sendEmail(to: string, message: string) {
    // send email
  }
}
