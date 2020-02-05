import Color = require('color')
import * as CSS from 'csstype'

export class Themec {
  str: string = 'hello'
  mode: Mode = Mode.Light
  theme: Color
  subtheme: Color
  whitish: Color
  blackish: Color

  customs: Array<Map<string, CSS>> = []

  constructor() {
    this.str = 'hello'
    this.mode = Mode.Light
    this.customs = []
  }
}

export enum Mode {
  Dark,
  Light
}

export interface CSS {
  ToCSS(): string
}
