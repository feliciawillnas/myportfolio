import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";
import AsciiArt from "../components/AsciiArt";

export default function Contact() {
  return (
    <Main>
      <Content>
        <h2>feliciamail@mail.com</h2>
        <ul>
          <li>
            <a
              href="https://linkedin.com/in/feliciawillnas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkStyling>
                <h2>LinkedIn</h2>
                <h2>
                  <RiExternalLinkFill />
                </h2>
              </LinkStyling>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/feliciawillnas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkStyling>
                <h2>GitHub</h2>
                <h2>
                  <RiExternalLinkFill />
                </h2>
              </LinkStyling>
            </a>
          </li>
        </ul>
      </Content>
      <Wrapper>
        <AsciiArt />
      </Wrapper>
    </Main>
  );
}

const Main = styled.main`
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 3rem;

  /* padding-top: 7rem; */

  a {
    text-transform: lowercase;

    &:hover {
      text-decoration: uppercase;
    }
  }

  h2 {
    overflow-wrap: break-word;
    width: fit-content;

    &:hover {
      cursor: pointer;
    }
  }
`;

const LinkStyling = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 1rem;

  @media (max-width: 768px) {
    height: fit-content;
  }
`;
