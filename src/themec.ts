import Color = require('color')

export class Themec {
  mode: Mode = Mode.Light
  theme: Color = Color('#00a0c8')
  subtheme: Color = Color('#00a050')
  whitish: Color = Color('#fff')
  blackish: Color = Color('#000')
  customs: Style = new Style()

  constructor(theme?: Color, whitish?: Color, blackish?: Color, subtheme?: Color) {
    if (window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      this.mode = Mode.Dark
    }
    this.theme = theme || this.theme
    this.subtheme = subtheme || this.subtheme
    this.whitish = whitish || this.whitish
    this.blackish = blackish || this.blackish
  }

  addCustom(name: string, variable: Variable | string) {
    this.customs.setVariable(name, variable)
  }

  apply(element: HTMLElement) {
    element.style.setProperty('--theme', this.theme.string())
    element.style.setProperty('--subtheme', this.subtheme.string())
    element.style.setProperty('--blackish', this.blackish.string())
    element.style.setProperty('--whitish', this.whitish.string())

    for (const [k, v] of Object.entries(this.customs.style)) {
      element.style.setProperty('--' + k, v.toCSS())
    }
  }

  color(col: string): Color{
    return Color(col)
  }
}

export enum Mode {
  Dark,
  Light
}

export interface Variable {
  toCSS(): string
}

export class VariableImplement {
  variable: string = ''

  constructor(variable: string) {
    this.variable = variable
  }

  toCSS(): string {
    return this.variable
  }
}

export class Style {
  style: Map<string, Variable> = new Map<string, Variable>()

  setVariable(name: string, variable: string | Variable) {
    if (typeof variable === 'string') {
      this.style.set(name, new VariableImplement(variable))
    } else {
      this.style.set(name, variable)
    }
  }
}
