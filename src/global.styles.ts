import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFFEF0;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button, textarea {
    font: 400 16px 'Work Sans', sans-serif;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
`