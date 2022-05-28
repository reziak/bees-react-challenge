import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font: 400 16px 'Work Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`