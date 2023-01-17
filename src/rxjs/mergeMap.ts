import { of, mergeMap, interval, map } from 'rxjs'

// const letters = of('a', 'b', 'c')
// const result = letters.pipe(
//   mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
// )

// result.subscribe((x) => console.log(x))

// const letters = of('a', 'b', 'c')
// const result = letters.pipe(
//   mergeMap((firstLetter, i) => {
//     return of(firstLetter + (i + 1))
//   })
// )

// result.subscribe((x) => console.log(x))

// const letters = of('a', 'b', 'c')
// const result = letters.pipe(
//   mergeMap((firstLetter, i) => {
//     return of(firstLetter + (i + 1))
//   })
// )

// result.subscribe((x) => console.log(x))

const letters = of('a', 'b', 'c')
const result = mergeMap((firstLetter: string, i: number) => {
  return of(firstLetter + (i + 1))
})(letters)

result.subscribe((x) => {
  if (x === 'b2') {
    console.log(`this is ${x}`)
    return
  }

  console.log(x)
})
