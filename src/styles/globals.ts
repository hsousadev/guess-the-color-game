import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

 :root {
  --WHITE: #FFFFFF;
  --LIGHT-GREY: #ECEFF5;
  --SOFT-GREY: #E5E9F1;
  --REGULAR-GREY: #DBDFE6;
  --STRONG-GREY: #AAB1BB;
  --DARK-GREY: #48525D;
 }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, p {
    color: var(--DARK-GREY);
    
  }

  h1, h2, h3 {
     font-family: 'Fira Mono', monospace;

  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  h2 {
    margin: 0;
    font-size: 1rem;
  }

  h3 {
    margin: 0;
    font-size: 0.625rem;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`;
