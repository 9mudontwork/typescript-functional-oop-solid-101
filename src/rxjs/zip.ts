// https://rxjs.dev/api/index/function/zip

import { zip } from 'rxjs'

const age$ = [1, 2, 3]
const name$ = ['Foo', 'Bar', 'Beer']
const isDev$ = [true, true, false]

zip(age$, name$, isDev$).subscribe((x) => console.log(x))
