import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
// arquivos com 'd.ts' simbolizam que estou criando um arquivo que só irá receber tipagens typeScript

// arquivo de definição de tipos => só tem tipagem

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
