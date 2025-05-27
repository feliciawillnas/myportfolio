import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";

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
              <span>
                <h2>LinkedIn</h2>
                <RiExternalLinkFill />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/feliciawillnas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <h2>GitHub</h2>
                <RiExternalLinkFill />
              </span>
            </a>
          </li>
        </ul>
      </Content>
    </Main>
  );
}

const Main = styled.main`
  /* height: 100vh; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 3rem;

  padding-top: 7rem;

  a {
    text-transform: lowercase;

    &:hover {
      text-decoration: uppercase;
    }
  }

  span {
    display: flex;
    align-items: center;

    // Icon size
    font-size: 3rem;
    gap: 0.5rem;
  }

  h2 {
    font-size: 3rem;
    letter-spacing: 0.3rem;
    line-height: 1.1;
    overflow-wrap: break-word;
    width: fit-content;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;
