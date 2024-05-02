import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
body {
  font-family: 'Montserrat', sans-serif;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    a{
      text-decoration: none;
    }

    button{
      border: 0;
      cursor: pointer;
    }

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

    html {
      font-size: 62.5%;

  }
`

export default GlobalStyles
