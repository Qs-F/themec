import { Mode } from '../themec'

let mode: Mode = Mode.Dark

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
