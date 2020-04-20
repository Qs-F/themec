import { color, Custom, Mode, Themec } from '../dist/themec'

class Awesome {
  toCSS(): string {
    return 'white'
  }
}

const thc: Themec = new Themec(color('#eeeeee'))
thc.addCustom('hello', 'test')
thc.blackish = color('#aaaaaa')
console.log(new Awesome().toCSS())
thc.addCustom('awesome', new Awesome())
thc.addCustom('test-color', color('#888888'))

console.log(thc)
thc.apply(document.body)

const mode: Mode = Mode.Dark

const arg = 'dark'
if (arg == 'dark') {
  mode = Mode.Dark
} else if (arg == 'light') {
  mode = Mode.Light
}

switch (mode) {
  case Mode.Dark:
    console.log('dark')
    break
  case Mode.Light:
    console.log('light')
    break
}
