import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";

export default function Footer({ toggleTheme, isDarkMode, currentPath }) {
  return (
    <Main $isWorksPage={currentPath === "/works"}>
      <Grid>
        <Socials>
          {/* <h4>socials</h4> */}
          <ul>
            <li>
              <a
                href="https://github.com/feliciawillnas"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
                <RiExternalLinkFill />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/feliciawillnas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
                <RiExternalLinkFill />
              </a>
            </li>
          </ul>
        </Socials>
        <div>
          {/* <p>&nbsp;</p> */}
          {/* <CurrentDate /> */}
          <DarkmodeToggle onClick={toggleTheme}>
            <p>darkMode:{isDarkMode ? " on " : " off"}</p>
          </DarkmodeToggle>
        </div>
        <Contact>
          {/* <h4>contact</h4> */}
          <p>FELICIA@GMAIL.COM</p>
        </Contact>
      </Grid>
    </Main>
  );
}

const Main = styled.footer`
  width: 100%;
  padding: 1rem;
  bottom: 0;
  position: ${({ $isWorksPage }) => ($isWorksPage ? "relative" : "absolute")};

  @media (max-width: 768px) {
    padding: 0.7rem;
  }

  li {
    :hover {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
    }
  }

  a {
    display: flex;
    gap: 0.2rem;
    align-items: center;
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

const Contact = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    text-transform: uppercase;
  }
`;

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
