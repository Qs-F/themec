import { Custom, Themec } from '../themec'
import Color = require('color')

class Awesome {
  ToCSS(): string {
    return 'white'
  }
}

let tc: Themec = new Themec(Color('#00a0c8'))
let awesome = new Awesome()

console.log(tc)
tc.customs.push(new Map<string, Custom>().set('awesome', awesome))
console.log(tc)
