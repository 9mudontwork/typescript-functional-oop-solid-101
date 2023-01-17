import { fromEvent, map } from 'rxjs'
import { emitKeypressEvents } from 'readline'

emitKeypressEvents(process.stdin)

const someValue = {
  a: 1,
  b: 2,
  c: 3,
}

const keypresses = fromEvent(process.stdin, 'keypress')
const positions = keypresses.pipe(map((ev: any) => ev[1].name))

positions.subscribe((x) => console.log(x))

console.log('press enter key')
