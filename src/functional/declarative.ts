/**
 * คำนิยาม ทำอะไร ต้องการอะไร
 *
 * ไม่จำเป็นต้องรู้ว่า function ที่ใช้ทำงานยังไง แค่โยน data เข้าไป
 * เป็นการเขียนโค้ดที่ไม่มี control flow
 *
 * pros
 * - โค้ดมีประสิทธภาพ เมื่อเทียบกับ imperative
 * - ลดการเกิด side effect
 *
 * cons
 * - คนอื่นที่มาทำต่อจะเข้าใจยากกว่า
 */

const numbers = [1, 2, 3, 4, 5]

function findMax(numbers: Array<number>) {
  return Math.max(...numbers)
}

function findMax2(numbers: Array<number>) {
  return numbers.reduce((max, number) => (number > max ? number : max))
}

console.log({ max1: findMax(numbers), max2: findMax2(numbers) })

export {}
