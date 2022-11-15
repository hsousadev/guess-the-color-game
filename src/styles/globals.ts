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

  /* width */
  ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: var(--LIGHT-GREY);
      border-radius: 16px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: #9fa9b8;
      border-radius: 16px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: #9fa9b8;
    }

  button {
    cursor: pointer;
    appearance: none;
    outline: none;
    background: transparent;
    border: none;
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
    margin: 0;
    
  }

  h2, h3 {
    font-family: 'Fira Mono', monospace;
  }

  strong {
    font-family: 'Fira Mono', monospace;
    font-size: 1rem; 
    color: var(--DARK-GREY)
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
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
