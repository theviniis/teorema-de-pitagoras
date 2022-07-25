import { createGlobalStyle } from 'styled-components';
import { variables } from './variabes';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: inherit;
  }

  ul, li {
    list-style: none;
  }
  
  html {
    scroll-behavior: smooth;
  }

  img {
  display: block;
  max-width: 100%;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    display: grid;
    place-content: center;
    font-family: ${variables.font};
    background-color: hsl(0, 0%, 90%);
    color: ${variables.fcText};
    font-size: 1.25rem;
    margin: 2vw;
  }

  .container {
    max-width: ${variables.maxWidth};
    margin: 0 auto;
  }
  `;
