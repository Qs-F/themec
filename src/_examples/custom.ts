import { Mode, CSS, Themec } from '../themec'

class Awesome {
  ToCSS(): string {
    return 'white'
  }
}

let tc: Themec = new Themec()
let awesome = new Awesome()

tc.customs = [] // why is this needed? in themec.ts, customs: xxx... = [] was done

console.log(tc.str, tc.mode, tc.customs)
tc.customs.push(new Map<string, CSS>().set('awesome', awesome))
