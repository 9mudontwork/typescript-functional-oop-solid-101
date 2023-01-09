/**
 * function มีการเกิด side effect
 * หรือใน function มีการเรียกใช้ ตัวแปร หรือ function ภายนอก
 */

const indicator = 2

function plusWithIndicator(number1: number, number2: number) {
  return number1 + number2 + indicator
}

console.log(plusWithIndicator(1, 2))
