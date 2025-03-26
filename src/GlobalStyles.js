import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"); */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.body};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font-family: "Source Code Pro", monospace;
  }

  h2 {
    font-family: "Press Start 2P", system-ui;
  }

  span {
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-family: "Inter", sans-serif;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-family: "Source Code Pro", monospace;
    letter-spacing: 0.04rem;
    font-weight: 400;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-family: "Source Code Pro", monospace;
    letter-spacing: 0.04rem;
    font-weight: 400;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`;
