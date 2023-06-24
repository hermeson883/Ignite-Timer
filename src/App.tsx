import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/gloabal'

import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

export function App() {
  return (
    // permite utilizar a estilização do style components somente dentro da ThemeProvider
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    // themeProvider fica subjulgado a minha variavel que passar dentro do parametro 'theme'
  )
}
