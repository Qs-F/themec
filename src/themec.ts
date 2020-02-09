import Color = require('color')

export class Themec {
  mode: Mode = Mode.Light
  theme: Color = Color('#00a0c8')
  subtheme: Color = Color('#00a050')
  whitish: Color = Color('#fff')
  blackish: Color = Color('#000')
  customs: Array<Map<string, Custom>> = []

  constructor(theme: Color, whitish?: Color, blackish?: Color, subtheme?: Color) {
    if (window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      this.mode = Mode.Dark
    }
    this.theme = theme
    this.subtheme = subtheme || this.subtheme
    this.whitish = whitish || this.whitish
    this.blackish = blackish || this.blackish
  }
}

export enum Mode {
  Dark,
  Light
}

export interface Custom {
  ToCSS(): string
}
