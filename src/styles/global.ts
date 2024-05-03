import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
body {
  font-family: 'Montserrat', sans-serif;

}
* {

.Toastify__toast-container {
      z-index: 9999999999999;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
.Toastify__toast-body{
  gap: 1rem;
}
    .Toastify__toast-body {
      > div:last-of-type {
        font-size: 1.4rem;
      }
    }

  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #007bff;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1e90ff;
}
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
