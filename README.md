# pkg `themec`

`themec` is a package to manage themes.

[![Action Status](https://github.com/Qs-F/themec/workflows/build/badge.svg)](https://github.com/Qs-F/themec/actions)

## Features

- Providing user preference color switch (dark or light)
- Preserved unique value (theme, theme-sub, blackish, whitish, etc)
- Setting custom values
- Usable from css variable

## Installation

For yarn user,

```bash
yarn add @creatorqsf/themec
```

For npm user,

```bash
npm install @creatorqsf/themec
```

## Usage

### Themec.mode

`Themec.mode` provides the state of user's system preference theme. In short, for support for dark mode, it is useful.

Internally `window.matchMedia('prefers-color-scheme')` is used to get preference mode. Although this supoorts *event*, sometimes user or even developer wants to configure it, like making exception for a part and so on. For these cases, if *event* is used, current design of `Themec` overwrite the configuration when user switchs their color scheme. So it only set mode at initial time.

```ts
import { Themec, Mode } from '@creatorqsf/themec'

let thc = new Themec()

switch(thc.mode) {
  case Mode.Light:
    console.log('🌅')
    break
  case Mode.Dark:
    console.log('🌃')
    break
}

// if your environment is 'light', 
// output: 🌅
//
// if your environment is 'dark', 
// output: 🌃
```

### Themec CSS variables

`Themec` has 4 colors by default: `theme`, `subtheme`, `blackish`, and `whitish`.  
Of course you can overwrite these colors.

Additionally, you can set any css variable through `Themec.addCustom()`

Then, these values can be set to an element by `Themec.apply(element)`

```ts
import { Themec, Mode, color } from '@creatorqsf/themec'

let thc = new Themec(color('#eeeeee')) // set Themec.theme as #eeeeee

thc.blackish = color('#424242')

thc.addCustom('gradient', 'linear-gradient(to right, var(--theme), var(--subtheme))')

thc.addCustom('alpha', 'calc(var(--theme-rgb), .5)')

thc.apply(document.body)

// output:
// document.body styles
// document.body {
//   --theme: #eeeeee;
//   --theme-rgb: 238, 238, 238;
//   --subtheme: #00a050;
//   --subtheme-rgb: 0, 160, 80;
//   --blackish: #424242;
//   --blackish-rgb: 66, 66, 66;
//   --whitish: #ffffff;
//   --whitish-rgb: 255, 255, 255;
//   --gradient: linear-gradient(to right, var(--theme), var(--subtheme));
//   --alpha: calc(var(--theme-rgb), .5);
// }
```

## LICENSE

MIT

## Author

たふみ(@CreatorQsF)
