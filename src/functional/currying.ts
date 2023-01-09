/**
 * function ที่มีการ return function ออกไป
 * หรือสามารถทำ pipeline
 */

const add = (x: number) => {
  return (y: number) => {
    return x + y
  }
}
const addOne = add(1)

console.log(addOne(1))
console.log(add(1)(2))
