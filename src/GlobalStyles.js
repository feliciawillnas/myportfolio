import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html, body, #root {
  height: 100%;
  margin: 0;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.body};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6, span, p {
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font-family: "Source Code Pro", monospace;
    letter-spacing: 0.04rem;
    font-weight: 700;
  }

  h2 {
    font-family: "DotGothic16", sans-serif;
  }

  h4 {
    font-family: "Source Code Pro", monospace;
    font-size: 14px;
    letter-spacing: 0.04rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  span {
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }

  p {
    font-family: "Source Code Pro", monospace;
    font-size: 14px;
    letter-spacing: 0.04rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  a {
    font-family: "Source Code Pro", monospace;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    letter-spacing: 0.04rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }
`;
