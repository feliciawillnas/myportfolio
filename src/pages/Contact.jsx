import { RiExternalLinkFill } from "react-icons/ri";
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
  ];

  return (
    <>
      <Main>
        <Cursor variants={variants} cursorVariant={cursorVariant} />
        <Content>
          <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>
            feliciamail@mail.com
          </h2>
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
                    <h2>{link.label}</h2>
                    <RiExternalLinkFill />
                  </LinkStyling>
                </a>
              </li>
            ))}
          </ul>
        </Content>
      </Main>
    </>
  );
}

const Main = styled.main`
  cursor: none;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    cursor: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 3rem;

  li {
    display: block;
    width: fit-content;
  }
`;

const LinkStyling = styled.div`
  text-transform: lowercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;

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
