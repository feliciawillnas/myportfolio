import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');

  body {

  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }
`;
