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

// color returns Colro object from css color string.
// This is for the browser js environment, since Color is Node.js project.
export const color = (color: string) => new Color(color)

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
    element.style.setProperty('--theme', this.theme.hex().toString())
    element.style.setProperty('--subtheme', this.subtheme.hex().toString())
    element.style.setProperty('--blackish', this.blackish.hex().toString())
    element.style.setProperty('--whitish', this.whitish.hex().toString())

    element.style.setProperty('--theme-rgb', this.theme.rgb().array().join(','))
    element.style.setProperty('--subtheme-rgb', this.subtheme.array().join(','))
    element.style.setProperty('--blackish-rgb', this.blackish.array().join(','))
    element.style.setProperty('--whitish-rgb', this.whitish.array().join(','))

    for (const [k, v] of Object.entries(this.customs.styleMap)) {
      element.style.setProperty('--' + k, v.toCSS())
    }
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
  styleMap: Map<string, Variable> = new Map<string, Variable>()

  setVariable(name: string, variable: string | Variable) {
    if (typeof variable === 'string') {
      this.styleMap.set(name, new VariableImplement(variable))
    } else {
      this.styleMap.set(name, variable)
    }
  }
}

