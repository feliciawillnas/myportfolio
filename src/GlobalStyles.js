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

img {
  border-radius: 2px;
}

video {
  border-radius: 2px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

/* Typography */
/* Font size is specified in each component */
h1, h3, h4, h5, a, span {
  font-family: "Source Code Pro", monospace;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.04rem;
  font-weight: 400;
}

p {
  font-family: "Source Code Pro", monospace;
  color: ${({ theme }) => theme.text};
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.1rem;
  font-weight: 600;
  
  font-size: 52px;
}
`;
