/**
 * คำนิยาม ทำอะไรให้ได้สิ่งนี้
 *
 * เขียนขั้นตอนการงานของ function
 * เขียนว่า function ว่าจะมีขั้นตอนการทำงานอะไรบ้าง มี control flow
 *
 * pros
 * - คนอื่นที่มาทำต่อจะเข้าใจง่ายกว่า
 * - ควบคุมง่ายกว่า
 *
 * cons
 * - โค้ดจะยาวขึ้น
 * - เสียเวลาในการเขียนเพิ่มขึ้น
 * - อาจจะเกิดการสับสน และมีความซับซ้อน
 * - อาจจะเกิดบัคได้ง่ายกว่า
 */

let numbers = [1, 2, 3, 4, 5]

function findMax(numbers: Array<Number>) {
  let max = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
  }
  return max
}

console.log({ max: findMax(numbers) })

export {}
