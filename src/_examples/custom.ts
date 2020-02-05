import { Custom, Themec } from '../themec'

class Awesome {
  ToCSS(): string {
    return 'white'
  }
}

let tc: Themec = new Themec()
let awesome = new Awesome()

console.log(tc)
tc.customs.push(new Map<string, Custom>().set('awesome', awesome))
console.log(tc)
