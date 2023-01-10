/**
 * สร้าง class สี่เหลี่ยมพื้นผ้า รับค่า มาคำนวนหาพื้นที่
 * สร้าง class สี่เหลี่ยมจตุรัส รับค่ามาคำนวนพื้นที่
 *
 * แต่ว่า จริง ๆ แล้ว สี่เหลี่ยมจตุรัส ด้านมันต้องเท่ากัน
 *
 * class ลูกเลยทำหน้าที่แทน class แม่ไม่ได้อย่างเหมาะสม
 */

class Rectangle {
  width: number
  height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {}
