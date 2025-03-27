import React from "react";
import styled from "styled-components";

export default function Footer({ toggleTheme, isDarkMode }) {
  return (
    <Main>
      <Grid>
        <Socials>
          <h4>socials</h4>
          <ul>
            <li>
              <a href="/">github</a>
            </li>
            <li>
              <a href="/">linkedin</a>
            </li>
          </ul>
        </Socials>
        <DarkmodeToggle onClick={toggleTheme}>
          <p>darkMode:{isDarkMode ? " on " : " off"}</p>
        </DarkmodeToggle>
        <p>Nothing right now</p>
      </Grid>
    </Main>
  );
}

const Main = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 1.1rem;
  }

  li {
    :hover {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }

  a {
    display: block;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-transform: uppercase;
`;

// const DarkmodeToggle = styled.button`
//   background: green;
//   cursor: pointer;
//   border: none;
//   height: fit-content;
//   display: flex;
//   width: 100%;

//   :hover {
//     background-color: ${({ theme }) => theme.secondary};
//     color: ${({ theme }) => theme.primary};
//   }
// `;

const DarkmodeToggle = styled.div`
  cursor: pointer;
  border: none;
  height: fit-content;
  width: 100%;

  :hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;
