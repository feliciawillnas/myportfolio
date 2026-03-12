import styled from "styled-components";

import { Cursor } from "../components/Cursor";
import { useCursor } from "../hooks/useCursor";

export default function Contact() {
  const { variants, cursorVariant, textEnter, textLeave } = useCursor();

  const links = [
    {
      href: "https://linkedin.com/in/feliciawillnas/",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/feliciawillnas",
      label: "GitHub",
    },
    {
      href: "/",
      label: "Resume",
    },
    {
      href: "/",
      label: "Email",
    },
  ];

  return (
    <>
      <Main>
        <Cursor variants={variants} cursorVariant={cursorVariant} />

        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <LinkStyling>
                  <h1>{link.label}</h1>
                </LinkStyling>
              </a>
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
}

const Main = styled.main`
  cursor: none;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 3rem 1rem;
    list-style: none;
    padding: 0;

    li:nth-child(1) {
      grid-column: 2;
    }

    li:nth-child(2) {
      grid-column: 1;
      margin-right: -3rem;
    }

    li:nth-child(3) {
      grid-column: 3;
      margin-left: -3rem;
    }

    li:nth-child(4) {
      grid-column: 2;
    }

    @media (max-width: 768px) {
      display: block;

      flex-direction: column;
      align-items: center;

      li:nth-child(2) {
        margin-right: 0rem;
      }

      li:nth-child(3) {
        margin-left: 0rem;
      }
    }
  }

  li {
    display: block;
    width: fit-content;
  }
`;

const LinkStyling = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* filter: url(#wonky); */

  transition: transform 0.2s;
  transform-origin: left center;

  svg {
    font-size: 45px;
  }

  &:hover {
    transform: scale(1.1);
    // For the custom cursor
    cursor: none;
  }
`;
