import Color = require('color')

export class Themec {
  mode: Mode = Mode.Light
  theme: Color = Color('#00a0c8')
  subtheme: Color = Color('#00a050')
  whitish: Color = Color('#fff')
  blackish: Color = Color('#000')
  customs: Array<Map<string, Custom>> = []
}

export enum Mode {
  Dark,
  Light
}

export interface Custom {
  ToCSS(): string
}
