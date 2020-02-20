import Color = require('color')

export default Themec

// Mode is used to define current browser mode.
export enum Mode {
  Dark,
  Light
}

// Variable is an interface to define css variable.
export interface Variable {
  toCSS(): string
}

// Themec is main class
export class Themec {
  // mode is prefers-color-scheme wrapping. Automatically set.
  // if the system does not support color scheme, then Mode.Light is set.
  mode: Mode = Mode.Light 
  
  // theme, subtheme, whitish, blackish is commonly used, so set by default
  theme: Color = Color('#00a0c8')
  subtheme: Color = Color('#00a050')
  whitish: Color = Color('#fff')
  blackish: Color = Color('#000')

  customs: Style = new Style() // customs is the field for custom css variables.

  constructor(theme?: Color, subtheme?: Color, whitish?: Color, blackish?: Color) {
    // detect system color scheme, dark or light
    if (window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      this.mode = Mode.Dark
    }

    this.theme = theme || this.theme
    this.subtheme = subtheme || this.subtheme
    this.whitish = whitish || this.whitish
    this.blackish = blackish || this.blackish
  }

  // addCustom adds corresponding name and variable to this.customs.
  // variable can be both of Variable and string.
  addCustom(name: string, variable: Variable | string) {
    this.customs.setVariable(name, variable)
  }

  // apply set current theme, subtheme, whitish, blackish and all customs as css variable to given element.
  apply(element: HTMLElement) {
    element.style.setProperty('--theme', this.theme.string())
    element.style.setProperty('--subtheme', this.subtheme.string())
    element.style.setProperty('--blackish', this.blackish.string())
    element.style.setProperty('--whitish', this.whitish.string())

    for (const [k, v] of Object.entries(this.customs.style)) {
      element.style.setProperty('--' + k, v.toCSS())
    }
  }

  // color returns Colro object from css color string.
  // This is for the browser js environment, since Color is Node.js project.
  color(col: string): Color{
    return Color(col)
  }
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
